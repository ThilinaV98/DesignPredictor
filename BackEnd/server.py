from flask import Flask, Response, request
import pymongo
import json

app = Flask(__name__)

try:
    mongo = pymongo.MongoClient(host="localhost",
                                port=27017,
                                serverSelectionTimeoutMS=1000)
    db = mongo.company
    mongo.server_info()
except:
    print("Error - Cannot connecrt to the db ")


@app.route("/users", methods=["POST"])
def create_user():
    try:
        user = {"username": request.form["username"], 
                "password": request.form["password"],
                "email": request.form["email"],
                "department": request.form["department"],
                "position": request.form["position"],
                }
        dbResponse = db.users.insert_one(user)
        return Response(response=json.dumps({
            "message": "user created",
            "id": f"{dbResponse.inserted_id}"
        }),
                        status=200,
                        mimetype="application/json")

    except Exception as ex:
        print(ex)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
