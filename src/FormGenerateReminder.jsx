import { toast } from 'react-hot-toast'
import FormBabyProfile from './components/FormBabyProfile'
import { submitBabyProfile } from './libs/hooks/useBabyProfile'

function FormGenerateReminder() {
  const handleSubmit = async (event) => {
    // console.log("handleSubmit called")
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    console.log(data)
    try {
      await submitBabyProfile({
        data
       })
      //  toast.success("Profil bayi berhasil disimpan.")
    } catch(submitError) {
      toast.error(submitError.message)
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
