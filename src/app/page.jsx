"use client"
import React, { useEffect, useState } from "react"
import Forecast from "@/components/forecast"
import Navigation from "@/components/navigation"
import Pile from "@/components/pile"
import WeatherWidget from "@/components/weatherwidgets"
import CurrentWeather from "@/components/currentWeather"
import Image from "next/image"
import WeatherFront from "@/components/weather-front"


import "@/style/main.scss"
import "@/style/weatherwidget.scss"
import "@/style/forecast.scss"
import "@/style/pile.scss"
import House from "@/images/House.svg"


export default function Home() {
  return (
    <main>
      <WeatherFront />
    </main>
  )
}

