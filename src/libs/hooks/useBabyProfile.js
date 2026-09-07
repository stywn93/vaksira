import {insertBaby} from "../api/Baby.js"
import { toast } from 'react-hot-toast'

export async function submitBabyProfile({ data }) {
    const payload = {
        motherName: data.namaIbu,
        dobBaby: data.tanggalLahirBayi,
        genderBaby: data.jenisKelaminBayi,
        district: data.kabupaten,
        subdistrict: data.kecamatan,
        village: data.desa,
        whatsapp: data.nomorWhatsapp,
        email: data.email,
    }

    // console.log("payload:", payload)

    const response = await insertBaby(payload)
    const body = await response.json()
    console.log(body)

    if(body.status == "success"){
        toast.success("Profil bayi berhasil disimpan.")
    } else {
        toast.error("Gagal menyimpan profil bayi.")
    }
}