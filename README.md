💡 Project: AI-Interview-Mocker

AI-Interview-Mocker is an AI-powered web application designed to help users practice mock interviews online. This project integrates Gemini AI to generate interview questions dynamically based on user input, creating a personalized and realistic interview environment.

🧠 Key Features


AI-Powered Interviews:
Uses Gemini AI to intelligently generate questions tailored to your role, skillset, and experience level.

Personalized Setup:
Before starting the interview, users provide:

Job Role/Position (e.g., Full Stack Developer)

Skills/Tech Stack (e.g., React, Node.js, MySQL)

Years of Experience

Dynamic Question Generation:
Based on the provided details, the system dynamically creates a mock interview session with relevant and adaptive questions.

Real-Time Interaction:
Users can engage in mock interview sessions that mimic real-world technical interviews, helping them build confidence and identify areas for improvement.

🚀 Tech Stack
Next.js (with Turbopack)

pnpm (package manager)

Gemini AI (for intelligent question generation)

React (frontend)

Tailwind CSS (UI styling)


To run this Next.js project using pnpm, follow the steps below


1.Navigate to the project directory: cd ai-interview-mocker


2.Start the development server:pnpm run dev
  This command uses Next.js with Turbopack (next dev --turbo) to start the development server.

  
3.Access the application:Local URL: http://localhost:3000





![image alt](https://github.com/sharada-patil1508/AI-INTERVIEW-MOCKER/blob/14566e17c763a05598bd499f62615851c4541919/Screenshot%202025-05-01%20213228.png)

Dashboard Overview

Once the development server is running, navigating to http://localhost:3000/dashboard will take you to the Dashboard of the AI Mock Interview application.

✨ Key Features:
Add New Interview:
Users can click on the "+ Add new Interview" button to initiate a new mock interview session. This will guide them through creating an AI-driven interview experience.
![image alt](https://github.com/sharada-patil1508/AI-INTERVIEW-MOCKER/blob/e18b1d46594d3437db1fc3a3ae0f42d7dbcf8485/Dashboard.png)


Create a New AI Mock Interview
When the user clicks "+ Add new Interview" from the Dashboard, a modal form appears to gather basic information about the user's job profile. This information helps the system generate a personalized mock interview session.

📋 Modal Form Fields:

Job Role / Job Position:

Example: Full Stack Developer, Data Analyst, DevOps Engineer

This helps the AI tailor the questions based on the job role.

Job Description / Tech Stack:

Enter relevant technologies or responsibilities.

Example: React, Node.js, MongoDB, or Cloud deployment, Docker, Kubernetes

Year of Experience:

Number of years the candidate has worked in the specified role.

This helps scale the complexity of the questions (e.g., basic for 1 year, advanced for 5+ years).

🎯 Purpose:

Once the user fills out this information and clicks Start Interview, the app initiates a mock interview experience using the provided inputs, simulating real-world technical or HR-style questions.

This approach ensures that every interview session is customized, making it highly relevant for practice or preparation.


![image alt](https://github.com/sharada-patil1508/AI-INTERVIEW-MOCKER/blob/52829a4b14c63ea9deca87b5365f59eb16c52684/Screenshot%202025-05-01%20222910.png)



🔐 Interview Flow & Data Handling

Once a user starts the interview:

User Input Collection:
The user is prompted to enter essential details such as:

Job Role / Position

Tech Stack / Skills

Years of Experience

Unique Interview Key Generation:
A unique interview ID (key) is generated dynamically. This key serves as a session identifier and allows the system to retrieve and manage interview data associated with the specific user.

Data Handling & Storage:
The collected information is securely stored in the backend using the unique key, enabling:

Retrieval of interview session history

Analysis and reuse for future personalized sessions

Feedback generation

Question Generation with Gemini AI:
Based on the provided inputs, Gemini AI generates a tailored set of mock interview questions in real time.

Session Management:
The session can be reused or referenced later using the unique key, supporting seamless interview mock-up workflows and analytics.
