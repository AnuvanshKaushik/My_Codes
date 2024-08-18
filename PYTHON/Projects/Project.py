import pandas as pd

# Load the dataset
df = pd.read_csv(r"D:\Anuvansh Project\Merged file.csv")

# Display the first few rows of the dataset
print(df.head())

# Display basic information about the dataset
print(df.info())

# Display summary statistics
print(df.describe())

# Check for missing values
print(df.isnull().sum())

# Drop rows with missing values (or handle them as needed)
df = df.dropna()

# Alternatively, fill missing values with a specific value
# df = df.fillna(value)

# Encode categorical features
df_encoded = pd.get_dummies(df, columns=['STATE/UT', 'DISTRICT'], drop_first=True)
# Define features and target
X = df_encoded.drop('TOTAL IPC CRIMES', axis=1)
y = df_encoded['TOTAL IPC CRIMES']

import matplotlib.pyplot as plt
import seaborn as sns

# Example: Visualize crime rates by year
plt.figure(figsize=(10, 6))
sns.lineplot(X='Year', y='TOTAL IPC CRIMES', data=df)
plt.title('Total IPC Crimes Over Time')
plt.show()

# Example: Visualize crime rates by district
plt.figure(figsize=(10, 6))
sns.barplot(X='DISTRICT', y='TOTAL IPC CRIMES', data=df)
plt.title('Total IPC Crimes by District')
plt.xticks(rotation=90)
plt.show()

from sklearn.model_selection import train_test_split

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

from sklearn.ensemble import RandomForestRegressor

# Initialize the model
model = RandomForestRegressor(n_estimators=100, random_state=42)

# Train the model
model.fit(X_train, y_train)

from sklearn.metrics import mean_absolute_error, r2_score

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f'Mean Absolute Error: {mae}')
print(f'R-squared Score: {r2}')
