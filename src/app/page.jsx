"use client"
import React, { useEffect, useState } from "react"
import WeatherFront from "@/components/weather-front"
import Image from "next/image"


import "@/style/main.scss"
import "@/style/weatherwidget.scss"
import "@/style/forecast.scss"
import "@/style/pile.scss"


export default function Home() {
  return (
    <main>
      <WeatherFront />
    </main>
  )
}

