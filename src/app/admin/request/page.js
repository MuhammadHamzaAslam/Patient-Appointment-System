import React from 'react'
import { auth } from '../../../../auth'
import { redirect } from 'next/navigation';

export default async function AdminRequest() {
    const session = await auth()
    // console.log("session =>" , session);
    if(session?.user?.role !== "admin") redirect('/')
  return (
    <section>
      <h1 className='flex justify-center items-center min-h-screen text-5xl font-bold'>Doctor Request</h1>
    </section>
  )
}
