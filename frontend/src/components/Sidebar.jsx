import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='min-h-screen bg-white border-r'>
        <ul>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9
                md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4  border-[#5F6FFF]' : ''}`}
            >
                <img className='w-10' src={assets.Add} alt=''/>
                <p>AddStudent</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9
                md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4  border-[#5F6FFF]' : ''}`}
            >
                <img className='w-10' src={assets.people} alt=''/>
                <p>All Students</p>
            </NavLink>
            
        </ul>

    </div>
  )
}

export default Sidebar