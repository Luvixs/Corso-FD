import {Container, Row} from 'react-bootstrap'
import TvShow from '../Molecole/TvShow'
import Gallery from '../Molecole/Gallery'



const Main = () => {
    return(
        <Container fluid>
            <Row>
                <TvShow/>
            </Row>
            
            <Row>
                <h2 className='text-light mt-5'>Attack on Titan</h2>
                    <div >
                        <Gallery url= "http://www.omdbapi.com/?apikey=cf9516cd&s=attack+on+titan"/>
                    </div>
                    <br/>
                <h2 className='text-light mt-5'>Doctor Who</h2>
                    <div >
                        <Gallery url="http://www.omdbapi.com/?apikey=d6252bd&s=Doctor%20Who"/>
                    </div>
                    <br/>
                <h2 className='text-light mt-5'>My Hero Academia</h2>
                    <div >
                        <Gallery url="http://www.omdbapi.com/?apikey=f0a20f4e&s=my%20hero%20academia"/>
                    </div>
            </Row>
            
        </Container>
    )
}

export default Main