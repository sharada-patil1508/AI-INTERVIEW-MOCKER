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
