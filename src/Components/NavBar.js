
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function  NavBar() {
    return (
     
        <Navbar expand="lg" bg="primary" variant="dark">

            <Container>
                <Nav className="mx-auto">
                <Navbar.Brand href="/">Movies List</Navbar.Brand>

                     <Nav.Link href="/">Home</Nav.Link>
                    
                    
                     <Nav.Link href="/FavList">FavList</Nav.Link>
  
                </Nav>
            </Container>
        </Navbar>
    )

}

export default NavBar;

