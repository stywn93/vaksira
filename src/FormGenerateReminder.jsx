import { toast } from 'react-hot-toast'
import FormBabyProfile from './components/FormBabyProfile'
import { submitBabyProfile } from './libs/hooks/useBabyProfile'
import { useNavigate } from 'react-router-dom'

import { useState } from "react"


function FormGenerateReminder() {
  const [token, setToken] = useState(null)
  const [recaptchaKey, setRecaptchaKey] = useState(0)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    if (!token) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    try {
      await submitBabyProfile({
        data,
        token,
        navigate,
        reset: () => {
          form.reset()
          setToken(null)
          setRecaptchaKey((currentKey) => currentKey + 1)
        },
      })
    } catch(submitError) {
      toast.error(submitError.message)
    }
  }

  return (
    <>
      <FormBabyProfile
        onSubmit={handleSubmit}
        onRecaptchaChange={setToken}
        recaptchaKey={recaptchaKey}
      />
    </>
  )
}

export default FormGenerateReminder
