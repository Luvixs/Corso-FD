import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarDark from './components/NavBarDark'
import Jumbotron from  './components/Jumbotron'
import FooterDark from './components/FooterDark'
import {Container, Row} from 'react-bootstrap'
import LibriCard from './components/LibriCard'
import './App.css'

function App() {
 
  return (
    <>
      <NavBarDark />
        <Container>
            <Row>
              <Jumbotron/>
            </Row>
            <Row>
              <LibriCard />
            </Row>
        </Container>
      <FooterDark />
    </>
  )
}

export default App
