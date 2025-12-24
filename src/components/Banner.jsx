"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

function Banner() {
  const router = useRouter();
  const handleBtn = () => {
    const password = prompt("enter your password");
    if(password == '1234') {
      console.log(router);
      router.push('/dashboard')
    }
  }

  return (
    <div className='text-center space-y-5 bg-linear-60 to-sky-100 from-sky-300 text-black p-10 rounded'>
      <h2 className='text-3xl font-bold'> Welcome to Dev-story </h2>
      <button onClick={handleBtn} className='border border-2  duration-300'>Share-Story </button>
    </div>
  )
}

export default Banner
