"use client";
import React, { useEffect, useState } from 'react';
import { MockInterview } from '../../../../../utils/schema';
import { db } from '../../../../../utils/db';
import { eq } from '../someUtilityFile';
import QestionSection from './_components/QestionSection'; 
import dynamic from 'next/dynamic';
const RecordAnswerSection = dynamic(() => import('./_components/RecordAnswerSection'), { ssr: false });

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [MockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setactiveQuestionIndex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    try {
      const result = await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId, params.InterviewId));

      let raw = result[0]?.jsonMockResp;

      const lastCurly = raw?.lastIndexOf('}');
      const lastSquare = raw?.lastIndexOf(']');
      const cutoffIndex = Math.max(lastCurly, lastSquare) + 1;
      const cleanedRaw = raw?.slice(0, cutoffIndex);

      const jsonMockResp = JSON.parse(cleanedRaw);

      console.log("Parsed JSON:", jsonMockResp);

      setMockInterviewQuestion(jsonMockResp);
      setInterviewData(result[0]);
    } catch (err) {
      console.error("JSON parsing error:", err.message);
    }
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/*Qestions */}
        <QestionSection 
          MockInterviewQuestion={MockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        {/*video Audio Recording */}
        <RecordAnswerSection />
      </div>
    </div>
  );
}

export default StartInterview;
