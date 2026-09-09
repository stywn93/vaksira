const MONTHS_ID = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
]

export const GENDER_LABEL = {
  L: "Laki-laki",
  P: "Perempuan",
}

export function formatTanggal(dateInput) {
  if (!dateInput) return null

  const date = dateInput instanceof Date ? dateInput : new Date(dateInput)
  if (Number.isNaN(date.getTime())) return null

  const day = String(date.getDate()).padStart(2, "0")
  return `${day} ${MONTHS_ID[date.getMonth()]} ${date.getFullYear()}`
}

export function formatRentang(start, end) {
  const formattedStart = formatTanggal(start)
  const formattedEnd = formatTanggal(end)

  if (!formattedStart && !formattedEnd) return "-"
  if (formattedStart && !formattedEnd) return `Mulai ${formattedStart}`
  if (!formattedStart && formattedEnd) return `Sampai ${formattedEnd}`

  return `${formattedStart} - ${formattedEnd}`
}

export function createBabyInfoItems(data) {
  return [
    ["Nama Bayi", `Bayi Ibu ${data.mother_name ?? "-"}`],
    ["Nama Ibu", data.mother_name],
    ["Tanggal Lahir", formatTanggal(data.dob_baby)],
    ["Jenis Kelamin", GENDER_LABEL[data.gender_baby] ?? data.gender_baby],
    ["Provinsi", data.province_name],
    ["Kabupaten", data.district_name],
    ["Kecamatan", data.subdistrict_name],
    ["Desa", data.village_name],
    ["Nomor WhatsApp", data.whatsapp],
    ["Email", data.email],
  ]
}