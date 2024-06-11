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
git clone https://github.com/your-username/feedback-frontend.git
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


