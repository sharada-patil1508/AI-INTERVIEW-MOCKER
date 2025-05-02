"use client"
import React, { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../../@/components/ui/dialog'

import { Button } from "../../../components/ui/button"
import { Input } from '../../../@/components/ui/input'
import { chatSession } from '../../../utils/GeminiAIModel'
import { MockInterview } from '../../../utils/schema'
import { v4 as uuidv4 } from 'uuid'
import { useUser } from '@clerk/nextjs'
import moment from 'moment/moment'
import { db } from '../../../utils/db' // Update path as needed
import { useRouter } from 'next/navigation'


function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false)
  const [JobPosition, setJobPosition] = useState()
  const [JobDesc, setJobDesc] = useState()
  const [JobExperience, setJobExperience] = useState()
  const router=useRouter();

  const { user } = useUser()

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(JobPosition, JobDesc, JobExperience)

    const InputPrompt =
      "Job Position: " +
      JobPosition +
      ", Job Description: " +
      JobDesc +
      ", Year of Experience: " +
      JobExperience +
      ", Based on this information, please give me " +
      process.env.NEXT_PUBLIC_INTERVIEW_QESTION_COUNT +
      " interview questions with answers in JSON format. Provide questions and answers as fields in the JSON."

    const result = await chatSession.sendMessage(InputPrompt)
    const rawText = await result.response.text()
    const cleanedJson = rawText.replace('```json', '').replace('```', '').trim()

    console.log("Cleaned JSON:", cleanedJson)

    if (cleanedJson) {
      const resp = await db.insert(MockInterview).values({
        mockId: uuidv4(),
        jsonMockResp: cleanedJson,
        jobPosition: JobPosition,
        jobExperience: JobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY'),
      }).returning({ mockId: MockInterview.mockId })

      console.log("Insert ID:", resp)

      if(resp)
      {
        setOpenDailog(false);
        router.push('/dashboard/interview/'+resp[0].mockId)
      }

    } else {
      console.log("ERROR: Empty or invalid AI response")
    }
  }

  return (
    <div>
      <div
        className='p-10 border rounded-lg bg-secondary hover:scale-150 hover:shadow-md cursor-pointer transition-all'
        onClick={() => setOpenDailog(true)}
      >
        <h2 className='text-lg text-center'>+Add new Interview</h2>
      </div>

      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className='font-bold text-2xl'>Tell us more about your job interview</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>Add details about your job position/role, job description and year of experience</h2>

                  <div className='mt-7 my-2'>
                    <label>Job Role/Job Position</label>
                    <Input
                      placeholder="Ex: Full Stack Developer"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>

                  <div className='my-3'>
                    <label htmlFor="jobDesc" className="block mb-1 font-medium">
                      Job Description / Tech Stack (In Short)
                    </label>
                    <textarea
                      id="jobDesc"
                      className="w-full border rounded-md p-2"
                      placeholder="e.g., React, Angular, NodeJs, MySQL, etc."
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>

                  <div className='my-3'>
                    <label>Year of Experience</label>
                    <Input
                      placeholder="5"
                      type="number"
                      max="50"
                      required
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>

                <div className='flex gap-5 justify-end'>
                  <Button variant="ghost" onClick={() => setOpenDailog(false)}>Cancel</Button>
                  <Button type="submit">Start Interview</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewInterview
