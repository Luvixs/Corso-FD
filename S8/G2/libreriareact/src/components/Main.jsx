import {Container, Row} from 'react-bootstrap'
import Jumbotron from './Jumbotron'
import LibriCard from './LibriCard'

const Main = () => {
    return(
        <Container>
            <Row>
            <Jumbotron/>
            </Row>
            <Row>
              <LibriCard />
            </Row>
        </Container>
    )
}

export default Main