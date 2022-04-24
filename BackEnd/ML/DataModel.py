from flask import Blueprint,render_template, Flask
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

@DataModel.route("/DataModel")
def DataModelling():
    DataSetCreation()
    return


def DataSetCreation():
    data_path='DataSet'
    categories=os.listdir(data_path)
    print(categories)
    labels=[i for i in range(len(categories))]
    print(labels)
    category_dict={'Design 1':0,'Design 2':1,'Design 3':2}
    print(category_dict)

    data=[]
    target=[]

    for category in categories:
        imgs_path=os.path.join(data_path,category)
        img_names=os.listdir(imgs_path)
        print(imgs_path,img_names)
        print(category,'---------------------')
        for img_name in img_names:
            img_path=os.path.join(imgs_path,img_name)
            img=cv2.imread(img_path,0)
            img=cv2.resize(img,(8,8))
            data.append(img)
            target.append(category_dict[category])
    data=np.array(data)
    print('before resize:',data.shape)
    data=data.reshape(data.shape[0],data.shape[1]*data.shape[2])
    print('after resize:',data.shape)
    target=np.array(target)
    np.save('data',data)
    np.save('target',target)

    return "Data set created!"

def DataTraining():

    data=np.load('data.npy')
    target=np.load('target.npy')
    train_data,test_data,train_target,test_target=train_test_split(data,target,test_size=0.1)
    model=KNeighborsClassifier() #load KNN algorithm into model
    model.fit(train_data,train_target) #training the KNN model using traininig data and target
    predicted_target=model.predict(test_data) #getting predictions from the model
    acc=accuracy_score(test_target,predicted_target)
    print('Accuracy:',acc)
    classi_report=classification_report(test_target,predicted_target)
    print('Classification Report:',classi_report)
    joblib.dump(model,'T-shirt-knn.sav')
    ##########################################################################################################################

    clsfr=joblib.load('T-shirt-knn.sav')

    label_dict={0:'Design 1',1:'Design 2',2:'Design 3'}

    img = cv2.imread('DataSet/Design 1/47.jpeg')
    img = cv2.resize(img,(720,720))

    img_in=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) #converting into a gray image
    img_in=cv2.resize(img_in,(8,8)) #resizing into 8x8
    img_in=np.reshape(img_in,(1,64))  #reshaping into 1x64

    result=clsfr.predict(img_in)[0]
    label=label_dict[result]

    cv2.putText(img, label, (10, 100), cv2.FONT_HERSHEY_SIMPLEX, 3, (0, 0, 0), 3)
    cv2.namedWindow('img', cv2.WINDOW_AUTOSIZE)
    cv2.imshow("img", img)
    key = cv2.waitKey(0)

    if label == 'Design 1' :
        images = glob.glob(r"C:\Users\Thilina Vithana\Desktop\Design Predictor\Dataset\Design 1/*.jpeg")
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

    if label == 'Design 2' :
        images = glob.glob(r"C:\Users\Thilina Vithana\Desktop\Design Predictor\Dataset\Design 2/*.jpeg")
        random_image1_1 = random.choice(images)
        random_image1 = cv2.imread(random_image1_1)
        random_image2_2 = random.choice(images)
        random_image2 = cv2.imread(random_image2_2)
        random_image3_3 = random.choice(images)
        random_image3 = cv2.imread(random_image3_3)
        random_image4_4 = random.choice(images)
        random_image4 = cv2.imread(random_image4_4)

        print(random_image1_1[-8:])
        print(random_image2_2[-8:])
        print(random_image3_3[-8:])
        print(random_image4_4[-8:])

        img1 = cv2.vconcat([random_image1, random_image2])
        img2 = cv2.vconcat([random_image3, random_image4])
        img = cv2.hconcat([img1, img2])
        img = cv2.resize(img,(720,720))
        cv2.imshow("img", img)
        key = cv2.waitKey(0)

    if label == 'Design 3' :
        images = glob.glob(r"C:\Users\Thilina Vithana\Desktop\Design Predictor\Dataset\Design 3/*.jpeg")
        random_image1_1 = random.choice(images)
        random_image1 = cv2.imread(random_image1_1)
        random_image2_2 = random.choice(images)
        random_image2 = cv2.imread(random_image2_2)
        random_image3_3 = random.choice(images)
        random_image3 = cv2.imread(random_image3_3)
        random_image4_4 = random.choice(images)
        random_image4 = cv2.imread(random_image4_4)

        print(random_image1_1[-8:])
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
    return "Data set training completed!"