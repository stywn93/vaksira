import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { getProvinces, getRegionsByParent } from "../api/Wilayah.js"

const loadRegions = (load, setRegions) => {
    let cancelled = false

    load()
        .then((regions) => !cancelled && setRegions(regions))
        .catch((error) => !cancelled && toast.error(error.message))

    return () => { cancelled = true }
}

export function useWilayah() {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [subdistricts, setSubdistricts] = useState([])
    const [villages, setVillages] = useState([])
    const [province, setProvince] = useState("")
    const [district, setDistrict] = useState("")
    const [subdistrict, setSubdistrict] = useState("")
    const [village, setVillage] = useState("")

    useEffect(() => loadRegions(getProvinces, setProvinces), [])

    useEffect(() => {
        if (!province) return
        return loadRegions(() => getRegionsByParent(province), setDistricts)
    }, [province])

    useEffect(() => {
        if (!district) return
        return loadRegions(() => getRegionsByParent(district), setSubdistricts)
    }, [district])

    useEffect(() => {
        if (!subdistrict) return
        return loadRegions(() => getRegionsByParent(subdistrict), setVillages)
    }, [subdistrict])

    const handleProvinceChange = (event) => {
        setProvince(event.target.value)
        setDistrict("")
        setSubdistrict("")
        setVillage("")
        setDistricts([])
        setSubdistricts([])
        setVillages([])
    }

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value)
        setSubdistrict("")
        setVillage("")
        setSubdistricts([])
        setVillages([])
    }

    const handleSubdistrictChange = (event) => {
        setSubdistrict(event.target.value)
        setVillage("")
        setVillages([])
    }

    return {
        provinces, districts, subdistricts, villages,
        province, district, subdistrict, village,
        handleProvinceChange, handleDistrictChange, handleSubdistrictChange,
        setVillage,
    }
}
