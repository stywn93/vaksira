import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import FormGenerateReminder from './FormGenerateReminder.jsx'
import FormBabyProfile from './components/FormBabyProfile'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FormGenerateReminder /> */}
    <FormBabyProfile />
  </StrictMode>,
)
