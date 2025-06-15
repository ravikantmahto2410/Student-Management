import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='mb-0 flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className='flex items-center gap-2 text-xs'>
            <img className='w-20 sm:w-40 cursor-pointer h-15' src={assets.tlelogo} alt=''/>
        </div>
    </div>
  )
}

export default Navbar