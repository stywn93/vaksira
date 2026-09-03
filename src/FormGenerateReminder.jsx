import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import FormBabyProfile from './components/FormBabyProfile'

function FormGenerateReminder() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormBabyProfile />
    </>
  )
}

export default FormGenerateReminder
