import { apiBaseUrl } from "./BaseURL.js"

const getRegions = async (path) => {
    const response = await fetch(`${apiBaseUrl}${path}`)
    const body = await response.json()

    if (!response.ok) throw new Error(body?.message ?? "Gagal memuat wilayah.")

    return (body.data ?? body).map((region) => ({
        code: region.kode ?? region.code ?? region.id,
        name: region.nama ?? region.name,
    }))
}

export const getProvinces = () => getRegions("/wilayah/provinsi")
export const getRegionsByParent = (code) => getRegions(`/wilayah/anak?kode=${encodeURIComponent(code)}`)
