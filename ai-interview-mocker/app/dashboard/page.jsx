import React from 'react'
import { UserButton } from '@clerk/nextjs'
import AddNewInterivew from './_components/AddNewInterview.jsx' // Adjust the path if needed

function Dashboard() {
  return (
    <div className='p-10'>
      
          <h2 className='font-bold text-2xl'>Dashboard</h2>
          <h3 className='text-gray-500'>Create and Start your AI Mockup Interview</h3>
       

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-5'>
        <AddNewInterivew/>
       
      </div>
    </div>
  )
}

export default Dashboard;
