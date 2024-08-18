import pandas as pd
import tensorflow as tf
import numpy as np
from tensorflow import keras
from keras.preprocessing.image import load_img, img_to_array
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout, BatchNormalization
from keras.preprocessing.image import ImageDataGenerator

# Load the CSV file
csv_file_path = r'D:\Ani\Handwriting\archive\english.csv'
data = pd.read_csv(csv_file_path)

# Display the first few rows of the CSV
print(data.head())

# Parameters
image_size = (600, 450)  # You can adjust this size

# Function to load and preprocess images
def preprocess_image(image_path):
    image = load_img(image_path, target_size=image_size, color_mode='grayscale')    
    image = img_to_array(image)
    image = np.expand_dims(image, axis=-1)
    image = image / 255.0  # Normalize pixel values to [0, 1]
    return image

# Load and preprocess images
image_paths = [r"D:/Ani/Handwriting/archive/" + path for path in data['image'].values]
images = np.array([preprocess_image(image_path) for image_path in image_paths])

print(image_paths)

print(images)

print(f"Image shapes: {images.shape}")

# Encode labels
labels = data['label'].values
label_encoder = LabelEncoder()
encoded_labels = label_encoder.fit_transform(labels)

# Data Augmentation
datagen = ImageDataGenerator(
    rotation_range=15,
    width_shift_range=0.1,
    height_shift_range=0.1,
    shear_range=0.1,
    zoom_range=0.1,
    horizontal_flip=False,
    fill_mode='nearest'
)

# Create augmented images
augmented_images = []
for image in images:
    augmented_images.extend([datagen.random_transform(image) for _ in range(5)])
augmented_images = np.array(augmented_images)

# Create augmented labels
augmented_labels = np.repeat(encoded_labels, 6)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(augmented_images, augmented_labels, test_size=0.2, random_state=42)

# Define the model
model = Sequential([
    Conv2D(64, (3, 3), activation='relu', input_shape=(image_size[0], image_size[1], 1)),
    BatchNormalization(),
    MaxPooling2D((2, 2)),
    Dropout(0.25),

    Conv2D(128, (3, 3), activation='relu'),
    BatchNormalization(),
    MaxPooling2D((2, 2)),
    Dropout(0.25),

    Conv2D(256, (3, 3), activation='relu'),
    BatchNormalization(),
    MaxPooling2D((2, 2)),
    Dropout(0.25),

    Flatten(),
    Dense(256, activation='relu'),
    Dropout(0.5),
    Dense(len(label_encoder.classes_), activation='softmax')
])

# Compile the model
model.compile(optimizer=keras.optimizers.Adam(lr=0.001, decay=0.0001),
              loss='sparse_categorical_crossentropy', metrics=['accuracy'])

model.summary()

# Train the model
history = model.fit(X_train, y_train, epochs=15, validation_split=0.2, batch_size=32)

# Evaluate the model
test_loss, test_accuracy = model.evaluate(X_test, y_test)
print(f'Test accuracy: {test_accuracy}')

# Make predictions
predictions = model.predict(X_test)
predicted_labels = tf.argmax(predictions, axis=1)

# Decode the predicted labels
predicted_labels_decoded = label_encoder.inverse_transform(predicted_labels)

# Save the model
model.save('CHARACTER_RECOGNITION_AI.keras')  # 62-labels