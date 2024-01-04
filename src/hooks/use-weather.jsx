"use client"
import axios from "axios"
import { useEffect, useState } from "react"

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5"
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export default function useWeather({endpoint, lat, lon, city, coords}) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    async function getData() {
        if (!coords) return
        try {
            const response = await axios.get(`/${endpoint}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(function() {
        getData()
    }, [coords])

    return { loading, error, data }
}