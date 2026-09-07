const rawApiPath = import.meta.env.VITE_API_PATH

export const apiBaseUrl = rawApiPath.replace(/\/+$/, "")