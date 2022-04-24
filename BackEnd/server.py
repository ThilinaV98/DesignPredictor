from flask import Flask, Response, request, jsonify
import pymongo
import json
from bson.objectid import ObjectId
import numpy as np
# import cv2
# from sklearn.model_selection import train_test_split
# from sklearn.neighbors import KNeighborsClassifier
# from sklearn.metrics import accuracy_score
# from sklearn.metrics import classification_report
# import joblib
# from matplotlib import pyplot as plt



#UNCOMMENT THESE FILES WHEN DATAMODEL IS WORKING PROPERLY
# from ML.DataModel import DataModel

app = Flask(__name__)
# app.register_blueprint(DataModel,url_prefix="/ml")

try:
    mongo = pymongo.MongoClient(host="localhost",
                                port=27017,
                                serverSelectionTimeoutMS=1000)
    db = mongo.company
    mongo.server_info()
except:
    print("Error - Cannot connecrt to the db ")


@app.route("/users", methods=["POST","GET"])
def create_user():

###############################################################################
# User data Add 
################################################################################
    if request.method == "POST":
        try:
            # user = {"username": request.form["username"], 
            #         "password": request.form["password"],
            #         "email": request.form["email"],
            #         "department": request.form["department"],
            #         "position": request.form["position"],
            #         }
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
################################################################################
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
            return Response(response=json.dumps({"message": "Cannot read users"}), status=500, mimetype="application/json")

@app.route("/products", methods=["POST"])
def add_products():

###############################################################################
# Product data Add 
################################################################################
    try:
        # user = {"username": request.form["username"], 
        #         "password": request.form["password"],
        #         "email": request.form["email"],
        #         "department": request.form["department"],
        #         "position": request.form["position"],
        #         }
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



if __name__ == "__main__":
    app.run(port=5000, debug=True)
