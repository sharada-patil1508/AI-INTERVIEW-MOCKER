"use client";

import { useState, useEffect } from "react";
import useSpeechToTextLib from "react-hook-speech-to-text";

const useSpeechToText = () => {
  const [userAnswer, setUserAnswer] = useState("");

  const {
    error,
    interimResult,
    results,
    isRecording,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToTextLib({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    const fullText = results.map((r) => r.transcript).join(" ");
    setUserAnswer(fullText);
  }, [results]);

  const toggleRecording = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      requestMicAndStart();
    }
  };

  const requestMicAndStart = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      startSpeechToText();
    } catch (err) {
      console.error("Microphone access denied.");
    }
  };

  return {
    isRecording,
    interimResult,
    finalTranscript: userAnswer,
    userAnswer,
    error,
    toggleRecording,
    startRecording: requestMicAndStart,
  };
};

export default useSpeechToText;
