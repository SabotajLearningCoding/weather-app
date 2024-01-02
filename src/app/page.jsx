"use client"
import React, { useEffect, useState } from "react"
import Forecast from "@/components/forecast"
import Navigation from "@/components/navigation"
import Pile from "@/components/pile"
import WeatherWidget from "@/components/weatherwidgets"
import Image from "next/image"


import "@/style/main.scss"
import "@/style/weatherwidget.scss"
import "@/style/forecast.scss"
import "@/style/pile.scss"
import House from "@/images/house.svg"


export default function Home() {
  return (
    <main>
      <Image className="house" src={House} alt="" />
      <Forecast />
    </main>
  )
}

