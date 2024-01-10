import Container from "react-bootstrap/esm/Container"

const FooterDark = () => {
    return(
        <>
            <Container className="bg-dark text-white fixed-bottom text-center" fluid>
                <span>Copyright Libreria di Libri.</span>
            </Container>
        </>
    )
}

export default FooterDark