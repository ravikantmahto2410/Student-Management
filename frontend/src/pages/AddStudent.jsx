import React, { useContext, useState } from 'react'
import { AdminContext } from '../contexts/AdminContext'

const AddStudent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenum, setPhonenum] = useState('')
    
    const [codeforcesprofile, setCodeforcesprofile] = useState('')
    const [currentrating, setCurrentrating] = useState('')
    const [maxrating, setMaxrating] = useState('')

    const {backendUrl} = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            
            const formData = new FormData()
            formData.append()
        } catch (error) {
            
        }

    }

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full '>
        <p className='border-b text-2xl  font-semibold'>Add Student</p>
        <div className='flex flex-col items:start gap-10 text-gray-600'>
            
            <div className='w-full lg:flex-1 flex flex-col gap-4 mt-1'>
                <div className='flex-1 flex flex-col gap-1'>
                    <p className='font-semibold'>Student Name</p>
                    <input 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className='border rounded px-3 py-2 w-150' type="text" placeholder='Name' required

                    />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p className='font-semibold'>Email</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                        className='border rounded px-3 py-2 w-150' type="email" placeholder='email' required
                    />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p className='font-semibold'>Contact Number</p>
                    <input 
                        onChange={(e) => setPhonenum(e.target.value)}
                        value={phonenum}
                        className='border rounded px-3 py-2 w-150' type="number" placeholder='Contact No' required
                    />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p className='font-semibold'>Codeforces Profile</p>
                    <input
                        onChange={(e) => setCodeforcesprofile(e.target.value)}
                        value={codeforcesprofile}
                        className='border rounded px-3 py-2 w-150' type="url" placeholder='profile link' required
                    />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p className='font-semibold'>Current Rating</p>
                    <input 
                        onChange={(e) => setCurrentrating(e.target.value)}
                        value={currentrating}
                        className='border rounded px-3 py-2 w-150' type="number" placeholder='rating' required
                    />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p className='font-semibold'>Max Rating</p>
                    <input 
                        onChange={(e) => setMaxrating(e.target.value)}
                        value={maxrating}
                        className='border rounded px-3 py-2 w-150' type="number" placeholder='rating' required
                    />
                </div>
            </div>
            <button className='bg-[#5F6FFF] px-10 py-3 mt-4 text-white rounded-full cursor-pointer w-48' type="submit">Add Student</button>
        </div>
        
    </form>
  )
}

export default AddStudent