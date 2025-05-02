"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Webcam from 'react-webcam'
import { Button } from "../../../../../../components/ui/button"
import useSpeechToText from 'react-hook-speech-to-text';

function RecordAnswerSection() {
  const [userAnswer, setUserAnswer] = useState('');
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => {
        const updatedAns = prevAns + result?.transcript;
        console.log("User Answer:", updatedAns); // 👈 Logs live updated answer to console
        return updatedAns;
      })
    );
  }, [results]);

  const handleRecording = () => {
    if (isRecording) {
      stopSpeechToText();
       if(userAnswer?.length<10)
       {
        return;
       }

    } else {
      startSpeechToText();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
      
      {/* Start/Stop Recording Button */}
      <Button 
        onClick={handleRecording}
        className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg"
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </Button>

      {/* Webcam + Transcript Box */}
      <div className="flex justify-center">
        <div className="relative w-[400px] h-[300px] rounded-xl border-2 border-blue-500 shadow-2xl overflow-hidden bg-white/30 backdrop-blur-md p-4 flex flex-col justify-between -mt-4">
          
          {/* Faint Webcam Icon */}
          <div className="absolute inset-2 z-0 flex justify-center items-center bg-black/10 rounded-lg">
            <Image 
              src="/webcam.png"
              alt="Webcam Icon"
              width={160}
              height={160}
              className="opacity-10 object-contain"
            />
          </div>

          {/* Live Webcam */}
          <Webcam 
            className="w-full h-full object-cover rounded-xl z-10 relative"
            mirrored={true}
            style={{ height: 300, width: '100%' }}
          />
        </div>
      </div>

      {/* Transcript Section */}
      <div className="w-[400px] bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-2 text-center text-blue-700">Live Transcription (User Answer)</h2>
        <div className="max-h-[120px] overflow-y-auto space-y-1 text-gray-800 text-sm">
          {results.map((result) => (
            <p key={result.timestamp}>{result.transcript}</p>
          ))}
          {interimResult && (
            <p className="italic text-gray-500">{interimResult}</p>
          )}
        </div>
        <div className="text-center text-sm text-gray-600 mt-2">
          Recording: {isRecording.toString()}
        </div>
        {error && (
          <div className="mt-2 text-red-600 text-sm text-center">
            Error: {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecordAnswerSection;
