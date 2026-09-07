import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import FormGenerateReminder from './FormGenerateReminder.jsx'
import FormBabyProfile from './components/FormBabyProfile'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormGenerateReminder />
  </StrictMode>
)
