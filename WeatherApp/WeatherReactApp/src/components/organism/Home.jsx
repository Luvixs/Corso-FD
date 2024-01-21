import { useState } from "react"
import CardCity from "../molecole/CardCity"
import Search from "../molecole/Search"


const Home = () => {
    const [weather, setWeather] = useState({})
    const [forecast, setForecast] = useState ({})
    const [searched, setSearched] = useState(false)

   async function searchWeather (city) {
            const ress= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8f942c83cf2538b04985fd4b816d50ae&units=metric`)
            const jsondata = await ress.json()

            const ressForecast= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8f942c83cf2538b04985fd4b816d50ae&units=metric`)
            const forecastdata = await ressForecast.json()

            setForecast(forecastdata)
            setWeather(jsondata)  
            if(forecastdata.cod == 200 && jsondata.cod == 200){
                setSearched(true);
            }else{
                setSearched(false);
            }
    }

    return (
        <>
        <Search searchWeather={searchWeather} />
        
        { searched ? <CardCity weather={weather} forecast={forecast}/> : <></>}
        </>
    )
}

export default Home