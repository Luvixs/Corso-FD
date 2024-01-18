import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomDropdown from '../Molecole/CustomDropdown';
import IconNavbar from '../Molecole/IconNavbar';
import {Link} from 'react-router-dom'
const CustomNavbar =() =>{
    return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container fluid>
            
                <Navbar.Brand href="#home">
                    <img
                    src="../src/assets/netflix_logo.png"
                    width="100px"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            
            <Nav className="me-auto">
              <Link to="/" className='nav-link text-light'>Home</Link>
              <Link href="#"  className='nav-link text-light'>TV Show</Link>
              <Link href="#"  className='nav-link text-light'>Movies</Link>
              <Link href="#"  className='nav-link text-light'>Recently Added</Link>
              <Link href="#" className='nav-link text-light'>My List</Link>
            </Nav>
          </Container>
          <IconNavbar/>
          <CustomDropdown/>
        </Navbar>
    </>
    )
}

export default CustomNavbar