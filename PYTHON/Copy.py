import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

#Load The DataSet
Data=pd.read_csv(r"C:\Users\kaush\Downloads\DATA SET\Anime\archive\Anime_rank.csv")

#Data Preprocessing
Data.head()
Data.describe()+
Data.info()
Data['Episodes']=Data['Episodes'].fillna(Data['Episodes'].mean())  #Label Encoding is not used because Episodes dtype is int not string

#Label Encoding used if the column values is string
from sklearn.preprocessing import LabelEncoder
encoder =LabelEncoder()
Data['Start date']=encoder.fit_transform(Data['Start date'])
Data['End date']=encoder.fit_transform(Data['End date'])
{class_:index for index,class_ in enumerate(encoder.classes_)}

# Check for duplicate data
duplicates = Data.duplicated()
print(duplicates)

# Handle duplicates (decide if to remove or keep based on analysis)
if duplicates.sum() > 0:
  print(f"Found {duplicates.sum()} duplicate rows.")
  test = Data.drop_duplicates()  # Remove duplicates

# One-hot encoding for categorical variables
Data = pd.get_dummies(Data, columns=['Title','Stream type','Members'], drop_first=True)

print(Data.isnull().sum())    #Check data is null or not

#Splitting Of the Data
# Define features and target variable
X = Data.drop('Score', axis=1)  # Drop the target variable column from features
y = Data['Score']  # Target variable
#Target Varaible= The model train and predict the columns is target variable
#And We Drop Target Variable in X because model only takes input of features and if model take target variable and learn the pattern of
#target variable the data leaking problem occur

# Perform train-test split
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print(X_train.head())
print(y_train.head())

print(X_train.shape)
print(X_test.shape)
print(y_train.shape)
print(y_test.shape)

#Training Of the model

#Linear Regression Model
# from sklearn.linear_model import LinearRegression
# lr=LinearRegression()
# lr.fit(X_train,y_train)

# print('TRAIN Accuracy',lr.score(X_train,y_train))
# print('TRUE VAL',y_test.values)
# print('PREDICTED VAL',lr.predict(X_test))
# print('Test Accuracy',lr.score(X_test,y_test))

#Random Forest Regression
from sklearn.ensemble import RandomForestRegressor
RFG=RandomForestRegressor(n_estimators=100, random_state=42)
RFG.fit(X_train,y_train)

print('TRAIN Accuracy',RFG.score(X_train,y_train))
print('TRUE VAL',y_test.values)
print('PREDICTED VAL',RFG.predict(X_test))
print('Test Accuracy',RFG.score(X_test,y_test))

# Predicted vs Actual Values Plot
plt.figure(figsize=(10, 6))
plt.scatter(y_test, RFG.predict(X_test), alpha=0.5)
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
plt.xlabel('Actual Values')
plt.ylabel('Predicted Values')
plt.title('Actual vs. Predicted Values')
plt.show()
