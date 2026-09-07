import {apiBaseUrl} from "./BaseURL.js"


export const insertBaby = async (payload) => {
    console.log("inserBaby Called")
    return await fetch(`${apiBaseUrl}/registrations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer`
        },
        body: JSON.stringify(payload)
    })
}