# Animal Detection System

## 1. Overview

The Animal Detection project is an AI-powered system designed to detect and identify animals in real-time using images or video feeds. This solution assists wildlife monitoring, ensures safety in human-animal conflict areas, and contributes to research and education. 

The system uses the YOLOv8 model for precise and fast detection of animals in images. It provides an easy-to-use web interface developed using React, HTML, and CSS for a smooth user experience. When an image or video is uploaded, the backend processes it with the YOLOv8 model to identify animal types and their locations, returning the results for visualization on the frontend.

This model is trained on the COCO128 dataset, allowing it to detect multiple common animals effectively. The system can be integrated with CCTV cameras for continuous surveillance and monitoring, making it practical for real-world applications. It supports fields like conservation, research, education, and safety. 

This project offers an automated, scalable solution that reduces the need for constant human monitoring and provides reliable animal detection at any time.

---

## 2. Scope

This project has a wide range of applications in the real world, including:

- **Wildlife Conservation:** Identifies and tracks animals in their natural habitats to study movement and behavior.
- **Security & Safety:** Detects animals near residential or restricted areas to prevent accidents or human-animal conflicts.
- **Zoo and Sanctuary Monitoring:** Automates observation of animals in captivity.
- **Education & Research:** Assists students and researchers in studying animal presence and behavior.

---

## Why Did We Choose This Project?

We chose this project to develop an efficient and accurate animal detection system using deep learning. By leveraging YOLOv8, the model can quickly and precisely identify animals in images, useful for wildlife monitoring, security surveillance, and conservation efforts.

React for the frontend and YOLOv8 for the backend ensures a seamless experience for users to upload and analyze images.

---

## Technologies Used and Why

### Frontend (React.js, HTML, CSS)

- **React.js**: Enables dynamic and interactive UI using reusable components.
- **HTML**: Provides structure to the web pages.
- **CSS**: Styles HTML elements and controls layout and appearance.

### Backend (Python)

- **Python**: Used to train the YOLOv8 model using the Ultralytics library and to export it to TensorFlow.js format for browser-based use.

### Deep Learning (TensorFlow.js, YOLOv8)

- **YOLOv8**: A state-of-the-art object detection model known for real-time performance.
- **TensorFlow.js**: Runs the trained model directly in the browser, minimizing server load and latency. Also handles post-processing like Non-Max Suppression.

---

## 3. Implementation Steps

### 1. Home Page

The homepage includes:
- Title: "Animal Image Detection"
- Key Points: Real-time animal detection, CCTV integration, and user-friendly interface.
- Visuals: Cartoon-style animal images for user engagement.
- Navigation: Links to Detection, FAQ, and Contact pages.
- Footer: Project summary and purpose.

### 2. Detection Page

Core functionality to detect animals:
- Upload image
- Upload video
- Open live camera
- Drag-and-drop support

Displays processed images/videos with bounding boxes and accuracy labels.

### 3. FAQ Page

Contains answers to common queries related to the project objectives, technology stack, and use cases.

### 4. Contact Us Page

Users can submit their name, email, and a message. Shows confirmation upon successful submission.

### 5. Future Enhancements

- Audio-based animal detection
- Multilingual support
- Species-level classification

---

## 6. Advantages

- **High Accuracy and Speed:** YOLOv8 ensures fast, real-time results.
- **Multi-Animal Detection:** Detects multiple animals at once.
- **Wildlife Conservation:** Helps track and monitor wildlife.
- **User-Friendly:** Easy upload and detection process.

---

## Dataset

Our dataset consists of a diverse collection of images showcasing various animals. The YOLO model used in this project has been pretrained on this dataset, enabling it to detect and classify different animal categories. The animals included in our dataset are:

- Bird  
- Cat  
- Dog  
- Horse  
- Sheep  
- Cow  
- Elephant  
- Bear  
- Zebra  
- Giraffe  

---

## Transfer Learning with YOLO

Transfer learning is a technique that enables leveraging the knowledge learned from a pre-trained model and applying it to a new task or dataset. In this project, we utilize transfer learning with a pre-trained YOLO model on the COCO dataset. By utilizing the pre-trained weights, we can accelerate the training process and enhance the performance of the animal detection model.

---

## Dependencies

- [TensorFlow.js](https://www.tensorflow.org/js)  
- [Keras](https://keras.io/)  
- [npm](https://www.npmjs.com/)  
- [React.js](https://reactjs.org/)  

---

## Installation

### Prerequisites

Install Node.js and npm using the link above. Npm is included with Node.js.

### Instructions

Clone the repository:

```bash
git clone https://github.com/praveenaso/gdsc.git
```

Install all dependencies:

```bash
cd finalproject
cd Animaldetection
npm install
```

---

## Usage

Run the project:

```bash
npm start
```

---

## Acknowledgements

We would like to acknowledge the creators of the **COCO dataset** and the **YOLO algorithm** for their valuable contributions to the field of object detection. Their work has been instrumental in making this project possible.
