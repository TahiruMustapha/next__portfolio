import React from 'react'

const ContactForm = () => {
  return (
    <form>
      <h2 className='text-2xl font-bold mb-5 text-white'>Contact Me</h2>
       <div className='mb-3'>
         <input 
         type="text" 
         placeholder='Name'
         name='name'
         className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-200 bg-white border-0 rounded shadow'
         />
       </div>
       <div className='mb-3'>
         <input 
         type="email" 
         placeholder='Email'
         name='email'
         className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-200 bg-white border-0 rounded shadow'
         />
       </div>
       <div className='mb-3'>
         <input 
         placeholder='Message'
         name='message'
         className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-200 bg-white border-0 rounded shadow'
         />
       </div>
       <button className=' px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition duration-150 bg-blue-500 hover:bg-blue-400'>Send Message</button>
     </form>
  )
}

export default ContactForm
