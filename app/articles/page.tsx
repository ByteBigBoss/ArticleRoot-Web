import NavBar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 overflow-x-hidden">
     
     <div className='pt-6 w-full bg-black flex justify-center pb-[20px]'>
    <div className='frame-container'>
    <NavBar/>
    </div>
    </div>
     


    </main>
  )
}

export default page