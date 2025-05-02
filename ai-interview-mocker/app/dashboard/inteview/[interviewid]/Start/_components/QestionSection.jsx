"use client"
import { Lightbulb } from 'lucide-react';
import React from 'react';

function QestionSection({ MockInterviewQuestion, activeQuestionIndex }) {
  return MockInterviewQuestion && (
    <div className='p-5 border rounded-lg my-10'>
      {/* Question number buttons */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {MockInterviewQuestion.map((item, index) => (
          <h2
            key={index}
            className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer 
              ${activeQuestionIndex === index ? 'bg-primary text-white' : 'bg-secondary'}`}
          >
            Qestion #{index + 1}
          </h2>
        ))}
      </div>

      {/* Actual question display */}
      {MockInterviewQuestion[activeQuestionIndex] && (
        <h2 className='my-5 text-md md:text-lg'>
          {MockInterviewQuestion[activeQuestionIndex].Question}
        </h2>
      )}

<div className='border rounded-lg p-5 bg-blue-100  mt-10'>
  <h2 className='flex gap-2 items-center text-blue-800'>
    <Lightbulb className='text-yellow-500' />
    <strong>Note:</strong> This is an important note section.
  </h2>

  <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_QESTION_NOTE
    }</h2>
</div>

      
    </div>
  );
}

export default QestionSection;
