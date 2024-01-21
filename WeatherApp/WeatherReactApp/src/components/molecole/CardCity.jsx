import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CardCity = (prop) => {
 console.log(prop);
const forecastList = prop.forecast.list;

  function getTemperatureAndHour(){
    const data = [];
    let daysTaked = 0;
    for(let i = 0; i< forecastList.length; i++){
        console.log(`https://openweathermap.org/img/wn/${forecastList[i].weather[0].icon}@2x.png`)
        if(new Date(forecastList[i].dt_txt).getHours().toString() == "6"){    
            data.push({ 
                time: new Date(forecastList[i].dt_txt).getDate().toString() + "-" + (new Date(forecastList[i].dt_txt).getMonth()+1).toString(),
                temperature: Math.round(forecastList[i].main.temp),
                imgForecast:`https://openweathermap.org/img/wn/${forecastList[i].weather[0].icon}@2x.png`
            });
            daysTaked++
            if(daysTaked >= 5){
                break;
            }
        }
    }
    return data;
  }

    return (
    
        <Card className='Card'>
            <Card.Header className='fs-1'>{prop.weather.name}</Card.Header>
                <Card.Body className='d-flex justify-content-center '> 
                    {/* <Container> */}
                        <div >
                            <div className='fs-4 mt-2'>    
                                <div> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"  fill="currentColor" className="bi bi-thermometer-half" viewBox="0 0 16 16">
                                        <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
                                        <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
                                    </svg> {Math.round(prop.weather.main.temp)} °C
                                </div>

                                <div> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"  fill="currentColor" className="bi bi-droplet-fill my-3" viewBox="0 0 16 16">
                                        <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                                    </svg> {prop.weather.main.humidity} %
                                </div>

                                <div> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"  fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                                    </svg> {prop.weather.wind.speed} km/h
                                </div>

                                <div> 
                                    <img src= {`https://openweathermap.org/img/wn/${prop.weather.weather[0].icon}@2x.png`} alt="" />
                                    {prop.weather.weather[0].description}
                                </div>    
                            </div>    

                            <h2>Forecast</h2>
                            {/* grafico */}
                            <div>
                            <LineChart width={600} height={300} data={getTemperatureAndHour()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <Line type="monotone" dataKey="temperature"  alt="" stroke="#8884d8" />
                                {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                                 <XAxis dataKey="time"  tick={"https://openweathermap.org/img/wn/03n@2x.png"}/>
                                <YAxis dataKey="temperature"/>
                                <Tooltip />
                            </LineChart>
                            </div>
                        </div>
                    
                    {/* </Card.Text> */}
                    {/* </Container> */}
                    
                </Card.Body>
        </Card>
    )
}

export default CardCity