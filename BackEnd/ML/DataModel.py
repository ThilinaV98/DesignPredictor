from flask import Blueprint, current_app,render_template, Flask
import os
import numpy as np
import cv2
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
import joblib
from matplotlib import pyplot as plt
import random
import glob
import os


DataModel=Blueprint('DataModel',__name__,static_folder='static',template_folder='template')
DataSet='ML\Dataset'
data_path=''

@DataModel.route("/DataModel")
def data_modelling():
    # DataSetCreation();
    # DataTraining();

    
    clsfr=joblib.load('T-shirt-knn.sav')

    label_dict={0:'Design1',1:'Design2',2:'Design3'}

    img = cv2.imread(DataSet+'/Design1/47.jpeg')
    img = cv2.resize(img,(720,720))

    img_in=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) #converting into a gray image
    img_in=cv2.resize(img_in,(8,8)) #resizing into 8x8
    img_in=np.reshape(img_in,(1,64))  #reshaping into 1x64

    result=clsfr.predict(img_in)[0]
    label=label_dict[result]

    cv2.putText(img, label, (10, 100), cv2.FONT_HERSHEY_SIMPLEX, 3, (0, 0, 0), 3)
    cv2.namedWindow('img', cv2.WINDOW_AUTOSIZE)
    cv2.imshow("img", img)
    print('showing images')
    key = cv2.waitKey(0)

    print(r'C:\Users\Thilina Vithana\Desktop\Design Predictor\ML\Dataset\Design1\*.jpeg')
    images = glob.glob('E:\\Reseach\\Design Predictor\\BackEnd\\ML\\Dataset\\Design1\\*.jpeg')
    print('Named explicitly:')
    for name in images:
        print(name)
    # print(f`images {images}`)
    random_image1_1 = random.choice(images)
    random_image1 = cv2.imread(random_image1_1)
    random_image2_2 = random.choice(images)
    random_image2 = cv2.imread(random_image2_2)
    random_image3_3 = random.choice(images)
    random_image3 = cv2.imread(random_image3_3)
    random_image4_4 = random.choice(images)
    random_image4 = cv2.imread(random_image4_4)
    print(random_image1_1[-8:]) # get the image name as "image1 = random_image1_1[-8:]" 
    print(random_image2_2[-8:])
    print(random_image3_3[-8:])
    print(random_image4_4[-8:])
    img1 = cv2.vconcat([random_image1, random_image2])
    img2 = cv2.vconcat([random_image3, random_image4])
    img = cv2.hconcat([img1, img2])
    img = cv2.resize(img,(720,720))
    cv2.imshow("img", img)
    key = cv2.waitKey(0)


    cv2.destroyAllWindows()
    return "DataModelling is Copleted!"