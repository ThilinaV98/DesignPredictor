from flask import Flask, Response, request, jsonify, session, render_template
import flask
import pymongo
import json
from bson.objectid import ObjectId
import os
import urllib.request
from werkzeug.utils import secure_filename

# import numpy as np
# import cv2
# from sklearn.model_selection import train_test_split
# from sklearn.neighbors import KNeighborsClassifier
# from sklearn.metrics import accuracy_score
# from sklearn.metrics import classification_report
# import joblib
# from matplotlib import pyplot as plt



#UNCOMMENT THESE FILES WHEN DATAMODEL IS WORKING PROPERLY
from ML.DataModel import DataModel
# from ML.DataModel.DataModel import data_modelling

import ML.DataModel as dml

app = Flask(__name__)
app.register_blueprint(DataModel,url_prefix="/ml")
try:
    mongo = pymongo.MongoClient(host="localhost",
                                port=27017,
                                serverSelectionTimeoutMS=1000)
    db = mongo.company
    mongo.server_info()
except:
    print("Error - Cannot connecrt to the db ")

###############################################################################
# User log in  
###############################################################################


###############################################################################
# User data Add 
###############################################################################

@app.route("/users", methods=["POST","GET"])
def create_user():

    if request.method == "POST":
        try:
            data = request.get_json()
            dbResponse = db.users.insert_one(data)
            return Response(response=json.dumps({
                "message": "user created",
                "id": f"{dbResponse.inserted_id}"
            }),
                            status=200,
                            mimetype="application/json")

        except Exception as ex:
            print(ex)
###############################################################################
# User data Retrive 
###############################################################################
    if request.method == "GET":
        try:
            data = list(db.users.find())
            for user in data:
                user["_id"] = str(user["_id"])
            return Response(response=json.dumps(data),
                            status=200,
                            mimetype="application/json")

        except Exception as ex:
            print(ex)
            return Response(response=json.dumps({
                "message": "Cannot read users"}), 
                        status=500, 
                        mimetype="application/json")

###############################################################################
# User data Update 
###############################################################################
@app.route("/users/<id>", methods=["PATCH"])
def update_user(id):
    try:
        dbResponse = db.users.update_one(
            {" _id":ObjectId(id)},
            {"$set":{"username":request.form["username"]},
            "$set":{"password":request.form["password"]},
            "$set":{"email":request.form["email"]},
            "$set":{"department":request.form["department"]},
            "$set":{"position":request.form["position"]}
            }
        )
        for attr in dir(dbResponse):
            print(f"******{attr}******")
        return Response(response=json.dumps({
                "message": "user updated"}),
                            status=200,
                            mimetype="application/json")
    except Exception as ex:
        print(ex) 
        return Response(response=json.dumps({
                "message": "user cannot updated"}),
                            status=500,
                            mimetype="application/json")
###############################################################################
# Get user details from ID
################################################################################
@app.route("/users/<uID>", methods=["GET"])
def get_user(uID):

        try:
            data = db.users.find_one({'_id': ObjectId(uID)})
            print(data)
            return Response(response=json.dumps(data, default=str),
                            status=200,
                            mimetype="application/json")

        except Exception as ex:
            print(ex)
            return Response(response=json.dumps({
                "message": "Cannot read users"}), 
                        status=500, 
                        mimetype="application/json")
                            
###############################################################################
# Product data Add 
################################################################################
@app.route("/products", methods=["POST","GET"])
def add_products():

    if request.method == "POST":
        try:
            data = request.get_json()
            dbResponse = db.products.insert_one(data)
            return Response(response=json.dumps({
                "message": "Products added",
                "id": f"{dbResponse.inserted_id}"
            }),
                            status=200,
                            mimetype="application/json")

        except Exception as ex:
            print(ex)
###############################################################################
# Product data Retrive 
################################################################################
    if request.method == "GET":
        try:
            data = list(db.products.find())
            for product in data:
                product["_id"] = str(product["_id"])
            return Response(response=json.dumps(data),
                            status=200,
                            mimetype="application/json")

        except Exception as ex:
            print(ex)
            return Response(response=json.dumps({"message": "Cannot read products"}), status=500, mimetype="application/json")

###############################################################################
# Product data Update 
###############################################################################
@app.route("/products/<id>", methods=["PATCH"])
def update_products(id):
    try:
        dbResponse = db.products.update_one(
            {"_id":ObjectId(id)},
            {"$set":{"quantity":request.form["quantity"]},
            "$set":{"price":request.form["price"]},
            "$set":{"img":request.form["img"]}
            }
        )
        for attr in dir(dbResponse):
            print(f"******{attr}******")
        if dbResponse.modified_count == 1:
            return Response(response=json.dumps({
                    "message": "product updated"}),
                                status=200,
                                mimetype="application/json")
        else:
            return Response(response=json.dumps({
                    "message": "nothing to update"}),
                                status=200,
                                mimetype="application/json")

    except Exception as ex:
        print(ex) 
        return Response(response=json.dumps({
                "message": "product cannot updated"}),
                            status=500,
                            mimetype="application/json")

###############################################################################
# Get user details from ID
################################################################################
@app.route("/products/<pID>", methods=["GET"])
def get_products(pID):

        try:
            data = db.products.find_one({'_id': ObjectId(pID)})
            print(data)
            return Response(response=json.dumps(data, default=str),
                            status=200,
                            mimetype="application/json")

        except Exception as ex:
            print(ex)
            return Response(response=json.dumps({
                "message": "Cannot read Product details"}), 
                        status=500, 
                        mimetype="application/json")
###############################################################################
# Image Upload 
################################################################################
app.secret_key = "caircocoders-ednalan"
 
UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
 
ALLOWED_EXTENSIONS = set(['jpg', 'jpeg'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    # check if the post request has the file part
    if 'File' not in request.files:
        resp = jsonify({'message' : 'No file part in the request'})
        resp.status_code = 400
        return resp
 
    files = request.files.getlist('File')
     
    errors = {}
    success = False
     
    for file in files:      
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            success = True
        else:
            errors[file.filename] = 'File type is not allowed'
 
    if success and errors:
        errors['message'] = 'File(s) successfully uploaded'
        resp = jsonify(errors)
        resp.status_code = 500
        return resp
    if success:
        dml.data_modelling()
        resp = jsonify({'message' : 'Files successfully uploaded'})
        resp.status_code = 201
        return resp
    else:
        resp = jsonify(errors)
        resp.status_code = 500
        return resp





if __name__ == "__main__":
    app.run(port=5000, debug=True)
