import {insertBaby} from "../api/Baby.js"

export async function submitBabyProfile({ data }) {
    // console.log("submitBabyProfile called")
    // console.log(data)
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

    console.log("payload:", payload)

    const response = await insertBaby(payload)
    const body = await response.json()

    if(!response.ok || body?.status!== "success"){
        throw new Error(body?.message ?? "Gagal menyimpan profil bayi.")
    }
}