"use client"

export default function CurrentWeather() {
    return (
        <section>
            <div className="weatherBox">
                <div className="weatherWidgetHeaderBox">
                    <h2 className="weatherWidgetDegrees">19°</h2>
                </div>

                <div className="weatherDiv1">
                    <p className="weatherHighest">H:24°</p> <p className="weatherLowest">L:18°</p>
                </div>

                <div className="weatherDiv2">
                    <p className="weatherLocation">Montreal, Canada</p>
                    <p className="weatherType">Mid Rain</p>
                </div>
            </div>
        </section>
    )
}