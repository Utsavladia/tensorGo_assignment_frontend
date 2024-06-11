# Feedback Application Frontend

This is the frontend part of the Feedback Application. It allows users to log in using Google authentication and provide feedback on features, pricing, and usability.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

To set up and run the frontend application on your local machine, follow these steps:

### 1. Clone the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/Utsavladia/tensorGo_assignment_frontend
cd feedback-frontend
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables
#### Create a .env file in the root directory of the project and add your Google Client ID. This is necessary for Google authentication to work.
```bash
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
```

### 4. Run the Application
```bash
npm start
```
#### The application should now be running on http://localhost:3000.
### 5. Ensure Backend is Running
#### Make sure the backend server is running on http://localhost:5000 as the frontend is configured to communicate with the backend at this address.




## End-to-End Flow

1. **Visit the Frontend Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Log in using Google Authentication**
   Click on the "Login with Google" button and follow the Google OAuth flow to authenticate.
   ![image](https://github.com/Utsavladia/tensorGo_assignment_frontend/assets/124615886/c5f02a1a-ea30-4883-b7ce-0a2dcc657a29)


4. **Provide Feedback**
   You'll be redirected to the feedback page. Here, you can provide feedback on features, pricing, or usability.
![image](https://github.com/Utsavladia/tensorGo_assignment_frontend/assets/124615886/d2b1e7a1-2656-4d44-a318-c83670d7f2e5)

5. **Submit Feedback**
   After providing your feedback, click the "Send" button. Your feedback will be submitted to the backend and stored in the MongoDB database.

6. **View Submitted Feedback**
   You can view the submitted feedback by navigating to the respective category section (features, pricing, or usability). The feedback will be displayed in real-time.


