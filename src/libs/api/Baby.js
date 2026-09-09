import {apiBaseUrl} from "./BaseURL.js"


export const insertBaby = async (payload) => {

    return await fetch(`${apiBaseUrl}/registrations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer`
        },
        body: JSON.stringify(payload)
    })
}

export const getSchedule = async (id) => {

    return await fetch(`${apiBaseUrl}/get-schedule/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer`
        }
    })
}