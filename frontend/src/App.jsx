import React, { useContext } from 'react'

import { ToastContainer, toast } from 'react-toastify';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes} from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import AllStudents from './pages/AllStudents';

const App = () => {

 
  return (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/add-student' element={<AddStudent/>}/> {/*Route for AddStudent.jsx file */}
          <Route path='/all-students' element={<AllStudents/>}/> {/*Route for AllStudent.jsx file */}
                             
        </Routes>
      </div>
    </div>
  )
}

export default App
