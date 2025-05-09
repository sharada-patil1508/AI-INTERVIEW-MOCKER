

 

 
 AI-Powered Interviews:
 Uses Gemini AI to intelligently generate questions tailored to your role, skillset, and experience level.
 
 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 
 Personalized Setup:
 Before starting the interview, users provide:
 You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
  This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


  
 
 Job Role/Position (e.g., Full Stack Developer)

 
 Skills/Tech Stack (e.g., React, Node.js, MySQL)
 ## Learn More
 
 Years of Experience
 To learn more about Next.js, take a look at the following resources:

 
 Dynamic Question Generation:
 Based on the provided details, the system dynamically creates a mock interview session with relevant and adaptive questions.
 
 - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
 - 
 - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
 
 Real-Time Interaction:
 Users can engage in mock interview sessions that mimic real-world technical interviews, helping them build confidence and identify areas for improvement.
 
 You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
 
 🚀 Tech Stack
 
 Next.js (with Turbopack)
 ## Deploy on Vercel
 
 pnpm (package manager)
 
 The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
 
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
 
 ![image alt](https://github.com/sharada-patil1508/AI-INTERVIEW-MOCKER/blob/0e437d321a6e015c119482d9db84e15515833da6/user_personal_key.png)
 
 
 🚀 How It Works
 
 User fills in job info
 Inputs like job role and experience are collected.
 
 Start Interview
 User clicks "Enable Web Cam and Microphone" and then "Start Interview".
 
 Gemini AI in Action
 Based on the input, the system fetches tailored interview questions from Gemini AI.
 
 Session Management
 A session key is created and saved, allowing users to track progress and revisit interviews.
 
 ![image alt](https://github.com/sharada-patil1508/AI-INTERVIEW-MOCKER/blob/dc52732ef6e4e99e5bf810ec0e727b0e16a1f2ca/start_interview.png)
 
 
 🎤 A-Interview-Mocker
 A-Interview-Mocker is an AI-powered mock interview platform that helps job seekers practice real-time interviews with dynamic, role-specific questions. Powered by Gemini AI, the system creates a realistic virtual interview experience through webcam and microphone interactions.
 
 🚀 Key Highlights
 👤 Personalized Interview Setup
 
 Users provide:
 
 Job Role/Position (e.g., Full Stack Developer)
 
 Skills
 
 Years of Experience
 
 Based on this data, a unique session key is generated to store and track the interview session.
 
 🎥 Live AI Interview Simulation
 
 Users enable webcam and microphone to begin.
 
 Interview questions are dynamically generated by Gemini AI based on the user’s profile.
 
 Users can answer verbally while being recorded live, simulating a real interview environment.
 
 📝 Real-Time Transcription
 
 As the user speaks, their responses are transcribed and displayed live.
 
 At the end of the session, feedback and correct answers are shown for comparison.
 
 📋 Interactive UI
 
 Questions are presented with tabs (Q1, Q2, etc.)
 
 Users can click "Record Answer" for each question.
 
 A helpful note guides them through the process.
 
 📸 Demo Snapshots
 Interview in Progress:
 
 Questions generated based on profile
 
 Webcam stream and real-time transcription
 
![image alt](https://github.com/sharada-patil1508/AI-INTERVIEW-MOCKER/blob/ba3f790e8a9b52251c39c00ee36910666baf3f96/interview.png)
 
 
 
 
 🛠️ How It Works (Full Flow)
 User Input Phase
 
 User enters:
 
 Job Role (e.g., Full Stack Developer)
 
 Skills
 
 Experience (e.g., 3 years)
 
 A unique mockId is generated for the session.
 
 This data is stored in the userdata table in the PostgreSQL backend (as seen in the screenshot).
 
 Dynamic Question Generation
 
 Based on the profile, Gemini AI generates a JSON object of questions.
 
 The questions are stored in the column jsonMockResp against the mockId.
 
 Interview Session Begins
 
 Webcam and microphone are activated.
 
 User answers each question while being recorded.
 
 Live transcription captures answers.
 
 Recording + Feedback
 
 After all questions, user gets:
 
 Their own transcribed answers
 
 AI-suggested ideal answers
 
 Optional performance feedback
 
 🗃️ Backend Database (PostgreSQL)
 
 Column Name	Description
 id	Auto-increment primary key
 jsonMockResp	JSON array of generated questions
 jobPosition	User-inputted role (e.g., Backend Developer)
 jobExperience	Years of experience
 createdBy	User’s email address
 
 📍 All interview sessions are stored securely in this schema for history, feedback, or training purposes.
 
 ![image alt](https://github.com/sharada-patil1508/AI-INTERVIEW-MOCKER/blob/9219523139a8f59ff20574ff416141b67cc3915c/database.png)
 
 
 
 stored information
 
 ![image alt](https://github.com/sharada-patil1508/AI-INTERVIEW-MOCKER/blob/6176a40770b56f9c3fe3021ea98642d2002e899d/user_ifo_in_database.png)
 
 
 ![image alt](https://github.com/sharada-patil1508/AI-INTERVIEW-MOCKER/blob/e6aab57a8492762c5d65fbcf9e18e5372bad61ca/user_info_in_database.png)
 Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
