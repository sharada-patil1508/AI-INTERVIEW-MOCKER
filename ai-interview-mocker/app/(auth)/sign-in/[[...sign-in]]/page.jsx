// pages/signin.js

'use client'; // Mark this file as a Client Component

import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="signin-wrapper">
      <h1>hellow</h1>
      <SignIn />
      
      <style jsx>{`
        /* Full-screen layout to center the content */
        .signin-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f9f9f9;
        }

        /* Optional: Style the Clerk SignIn Form */
        .clerk-signin {
          width: 100%;
          max-width: 400px;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
