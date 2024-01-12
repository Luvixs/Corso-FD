import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomDropdown from '../Molecole/CustomDropdown';
import IconNavbar from '../Molecole/IconNavbar';
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#">TV Show</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
          </Container>
          <IconNavbar/>
          <CustomDropdown/>
        </Navbar>
    </>
    )
}

export default CustomNavbar