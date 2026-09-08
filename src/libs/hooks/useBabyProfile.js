import {insertBaby} from "../api/Baby.js"
import { toast } from 'react-hot-toast'

export async function submitBabyProfile({ data, token, reset }) {
    const payload = {
        motherName: data.namaIbu,
        dobBaby: data.tanggalLahirBayi,
        genderBaby: data.jenisKelaminBayi,
        district: data.kabupaten,
        province: data.provinsi,
        subdistrict: data.kecamatan,
        village: data.desa,
        whatsapp: data.nomorWhatsapp,
        email: data.email,
        recaptcha: token
    }

    // console.log("payload is : ", payload)

    const response = await insertBaby(payload)
    const body = await response.json()
    console.log(body)
    const id = body.data.id
    const dob_baby = body.data.dob_baby
    console.log("insert ID is : ", id)
    console.log("dob is : ", dob_baby)

    if (body.status === "success") {
        toast.success("Profil bayi berhasil disimpan.")
        if (typeof reset === "function") {
            reset()
        }
    } else {
        toast.error("Gagal menyimpan profil bayi.")
    }
}