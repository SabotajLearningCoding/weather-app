"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function useLocation(coords) {
    const [location, setLocation] = useState(null)

    async function getLocation() {
        if (!coords) return
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`)
        console.log(response.data)
        setLocation(response.data.address)
    }

    useEffect(function() {
        getLocation()
    }, [coords])

    return location
}