
import Card from 'react-bootstrap/Card';


const CardCity = (weather) => {
 console.log(weather);
    return (
        <Card>
            <Card.Header>Meteo</Card.Header>
                <Card.Body>
                    <Card.Title><div className="location">{weather.weather.name}</div></Card.Title>
                    <Card.Text>
                    <div>
                    <div>Temp: {Math.round(weather.weather.main.temp)}°C</div>
                    <div>Humidity: {weather.weather.main.humidity}%</div>
                    <div>Wind Speed: {weather.weather.wind.speed}km/h</div>
                    <div> <img src= {`https://openweathermap.org/img/wn/${weather.weather.weather[0].icon}@2x.png`} alt="" /></div>
                    </div>
                    </Card.Text>
                    
                </Card.Body>
        </Card>
    )
}

export default CardCity