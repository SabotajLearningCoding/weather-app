"use client"

import { useEffect, useState } from "react"

export default function useCoords() {
    const [coords, setCoords] = useState(null)

    useEffect(function() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                setCoords(position.coords)
                console.log(position.coords)
            })
        }
    }, [])

    return coords
}