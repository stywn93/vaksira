import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast"
import './index.css'

import FormGenerateReminder from './FormGenerateReminder.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ImmunizationSchedule from './components/ImmunizationSchedule.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormGenerateReminder/>} />
        <Route path='/immunization-schedule/:id' element={<ImmunizationSchedule/>}/>
      </Routes>
    </BrowserRouter>
    {/* <FormGenerateReminder /> */}
  </StrictMode>
)
