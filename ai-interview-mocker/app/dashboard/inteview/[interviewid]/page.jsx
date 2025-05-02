"use client"

import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';
import { MockInterview } from '../../../../utils/schema'
import { db } from '../../../../utils/db'
import { eq } from './someUtilityFile';
import { WebcamIcon } from 'lucide-react';
import { Button } from "../../../../components/ui/button";
import Link from 'next/link';

function Interview(params) {
  const [interviewData, setInterviewData] = useState(null);
  const [webcamEnable, setWebcamEnable] = useState(false);

  useEffect(() => {
    console.log(params.InterviewId);
    GetInterviewDetails();
  }, [params.InterviewId]);

  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview)
      .where(eq(MockInterview.mockId, params.InterviewId));
    console.log(result);
    setInterviewData(result[0]);
  }

  const handleUserMedia = () => {
    setWebcamEnable(true);
  }

  const handleUserMediaError = (error) => {
    console.error('Webcam error:', error);
    setWebcamEnable(false);
  }

  if (!interviewData) {
    return <div className='text-center text-lg font-medium mt-10'>Loading interview data...</div>;
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gray-50'>
      <h2 className='font-extrabold text-3xl text-primary mb-8'>Let's Get Started</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center'>
        {webcamEnable ? (
          <Webcam
            onUserMedia={handleUserMedia}
            onUserMediaError={handleUserMediaError}
            mirrored={true}
            style={{
              height: 300,
              width: 300,
              borderRadius: '1rem',
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg space-y-6 border border-gray-200">
            <WebcamIcon className="w-20 h-20 text-primary" />
            <Button
              variant="ghost"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300"
              onClick={() => setWebcamEnable(true)}
            >
              Enable Web Cam and Microphone
            </Button>
          </div>
        )}

        <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-200 space-y-4'>
          <h2 className='text-lg font-semibold'>
            <strong className='text-gray-600'>Job Role/Position:</strong> <span className='text-gray-800'>{interviewData.jobPosition || 'Not Available'}</span>
          </h2>
          <h2 className='text-lg font-semibold'>
            <strong className='text-gray-600'>Years of Experience:</strong> <span className='text-gray-800'>{interviewData.jobExperience || 'Not Available'}</span>
          </h2>
        </div>
      </div>

      import Link from 'next/link'; // Ensure this import exists at the top

<div className='flex justify-center mt-10'>
  <Link href={'/dashboard/inteview/' + params.InterviewId + '/Start'}>
    <Button className="px-6 py-3 rounded-xl text-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300">
      Start Interview
    </Button>
  </Link>
</div>



    </div>
  );
}

export default Interview;
