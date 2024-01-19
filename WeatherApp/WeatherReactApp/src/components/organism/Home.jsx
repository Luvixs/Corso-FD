import { useState, useEffect  } from "react"
import CardCity from "../molecole/CardCity"
import Search from "../molecole/Search"


const Home = () => {
    const [weather, setWeather] = useState({})
    const [searched, setSearched] = useState(false)

    useEffect(() => {
      }, [weather]);

   async function searchWeather (city) {
            const ress= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8f942c83cf2538b04985fd4b816d50ae&units=metric`)
            const jsondata = await ress.json()
            setWeather(jsondata)  
            if(jsondata.cod == 200){
                setSearched(true);
            }else{
                setSearched(false);
            }
    }

    return (
        <>
        <Search searchWeather={searchWeather}/>
        
        { searched ? <CardCity weather={weather} /> : <></>}
        </>
    )
}

export default Home