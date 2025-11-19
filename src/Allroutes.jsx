import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FoundationCourse from './Components/Courses/FoundationCourse'
import TargetCourse from './Components/Courses/TargetCourse'

import Home from './Home'

function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/foundationcourse' element={<FoundationCourse/>}/>
        <Route path='/targetbatch' element={<TargetCourse/>}/>
    </Routes>
  )
}

export default Allroutes;