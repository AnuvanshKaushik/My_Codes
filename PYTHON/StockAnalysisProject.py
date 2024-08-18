import numpy as np
import pandas as pd
import tensorflow as tf
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler

Data=pd.read_csv(r"C:\Users\kaush\Downloads\DATA SET\STOCK\Tasla_Stock_Updated_V2.csv")

print(Data.head())
print(Data.info())

#Convert Data Datatype
Data['Date']=pd.to_datetime(Data['Date'])
Data.sort_values('Date',inplace=True)


# Select open column for predictions
Data2=Data[['Open']].values

#Fixed a long dataset into range of 0 and 1 
Set_Range=MinMaxScaler(feature_range=(0,1))
Set_Range_data=Set_Range.fit_transform(Data2)

#Prepare the dataset for RNN Classification
def dataset_creation(data2,time_step=2):
    X,Y=[],[]
    for i in range(len(data2)-time_step-1):
        a=data2[i:(i+time_step),0]
        X.append(a)
        Y.append(data2[i + time_step, 0])
    return np.array(X), np.array(Y)

time_step=100
X,Y=dataset_creation(Set_Range_data,time_step)

# Reshape input to be [samples, time steps, features]
X = X.reshape(X.shape[0], X.shape[1], 1)

# Split data into training and test sets
X_train,Y_train = X[0:int(0.8*len(X))],Y[0:int(0.8*len(Y))]
X_test,Y_test = X[int(0.8*len(X)):len(X)],Y[int(0.8*len(Y)):len(Y)]

# Build the RNN model
model = tf.keras.Sequential([
    tf.keras.layers.LSTM(50, return_sequences=True, input_shape=(time_step, 1)),
    tf.keras.layers.LSTM(100),
    
    tf.keras.layers.Dense(40),
    tf.keras.layers.Dense(15),
    tf.keras.layers.Dense(1)
])

model.compile(optimizer='adam',loss='mean_squared_error',metrics=['accuracy'])
model.summary()

# Train the model
history=model.fit(X_train, Y_train, validation_data=(X_test, Y_test), epochs=10, batch_size=32)

# Predict and inverse of normalization
train_predictions = model.predict(X_train)
test_predictions = model.predict(X_test)

train_predictions=Set_Range.inverse_transform(train_predictions)
test_predictions=Set_Range.inverse_transform(test_predictions)


# Prepare for plotting
trainPredictPlot = np.empty_like(Set_Range_data)
trainPredictPlot[:, :] = np.nan
trainPredictPlot[time_step:len(train_predictions) + time_step, :] = train_predictions

testPredictPlot = np.empty_like(Set_Range_data)
testPredictPlot[:, :] = np.nan

# Calculate the correct start point for testPredictPlot
test_start_index = len(train_predictions) + (time_step)

# Check if there's enough space for test predictions
if test_start_index + len(test_predictions) <= len(testPredictPlot):
    
    testPredictPlot[test_start_index:test_start_index + len(test_predictions), :] = test_predictions
else:
    # Adjust the test predictions to fit the available space
    testPredictPlot[test_start_index:, :] = test_predictions[:len(testPredictPlot) - test_start_index, :]


# Plot the results
plt.figure(figsize=(16, 8))
dates = Data['Date']

# Use dates for x-axis
plt.plot(dates, Set_Range.inverse_transform(Set_Range_data), label='True Stock Prices',color='yellow')
plt.plot(dates[time_step:len(train_predictions) + time_step], trainPredictPlot[time_step:len(train_predictions) + time_step], label='Predictions dusring Training',color='red')
plt.plot(dates[test_start_index:test_start_index + len(test_predictions)], testPredictPlot[test_start_index:test_start_index + len(test_predictions)], label='Predictions dusring Testing',color='blue')
plt.xlabel('Dates of test')
plt.ylabel('Price Of Stock')
plt.legend()
plt.grid()
plt.show()