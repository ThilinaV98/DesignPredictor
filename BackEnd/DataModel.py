from flask import Blueprint,render_template

DataModel=Blueprint('DataModel',__name__,static_folder='static',template_folder='template')

@DataModel.route("/DataModel")
def DataModelling():
    return "pakaya"