import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { getSchedule } from "../api/Baby.js"

export function useSchedule(id) {
    const [schedules, setSchedules] = useState([])
    const [loading, setLoading] = useState(Boolean(id))

    useEffect(() => {
        if (!id) return

        let cancelled = false

        getSchedule(id)
            .then(async (response) => {
                const body = await response.json()
                if (!response.ok || body.status !== "success") {
                    throw new Error(body.message || "Gagal mengambil jadwal imunisasi.")
                }
                if (!cancelled) setSchedules(body.data?.schedules ?? [])
            })
            .catch((error) => {
                if (!cancelled) toast.error(error.message)
            })
            .finally(() => {
                if (!cancelled) setLoading(false)
            })

        return () => { cancelled = true }
    }, [id])

    return { schedules, loading }
}