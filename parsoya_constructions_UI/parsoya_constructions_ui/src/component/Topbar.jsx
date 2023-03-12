import { Button, Container, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/engineer-g1a7c155a7_1280.png';
import '../App.css';
import { Link } from "react-router-dom";
export const Topbar = () => {
    return (
        <>
            <Navbar className="background-dark"  expand="lg"> 
                <Container>
                    <Navbar.Brand > <Link to="/" className="color-primary underline-none"> <img src={logo} style={{width:'50px', height:'50px'}}></img> Parasoya Construction </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <Link to="/we" className="color-primary border-right underline-none me-3 ">We |</Link>
                            <Link to="/services" className="color-primary border-right underline-none me-3">Services |</Link>
                            <Link to="/portfolio" className="color-primary border-right underline-none me-3">Portfolio |</Link>
                            <Link to="/career" className="color-primary underline-none me-3">Career |</Link>
                            <Link to="/contact" className="color-primary underline-none me-3">Contact</Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

