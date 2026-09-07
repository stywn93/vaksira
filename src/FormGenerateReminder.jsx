import { useState } from 'react'
import FormBabyProfile from './components/FormBabyProfile'
import { submitBabyProfile } from './libs/hooks/useBabyProfile'

function FormGenerateReminder() {
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    // console.log("handleSubmit called")
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    // console.log(data)
    try {
      await submitBabyProfile({
        data
       })

       event.currentTarget.reset()
       alert("Profil bayi berhasil disimpan. ")
    } catch(submitError) {
      setError(submitError.message)
    }
  }

  return (
    <>
      <FormBabyProfile 
        onSubmit = {handleSubmit}
      />
    </>
  )
}

export default FormGenerateReminder
