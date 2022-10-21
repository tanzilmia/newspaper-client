import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image'
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const {user,logout} = useContext(AuthContext)
  const handleLogout = () =>{
    logout()
    .then(()=>{
      console.log('Log Out sucessfulll');
    })
    .catch(e => console.error(e))
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="ligth" variant="light">
      <Container>
        <Navbar.Brand> <Link to ='/'>NewsPaper App</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              
               {
               user?.uid ?
               <>
                {user?.displayName}
                <button className='btn btn-info ms-2 me-2' onClick={handleLogout}>Logout</button>
               </>
               :
               <>
               <Link className='btn btn-primary text-white me-2' to ='/login'>Login </Link>
               <Link className='btn btn-primary text-white' to= '/register'>Register </Link>
               </>
               
               }
               
                </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.photoURL ?
                <Image roundedCircle style={{heigth: '30px', width : '30px'}} src= {user.photoURL} />
                :
                <FaUserAlt/>
              }
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
           <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container> 
    </Navbar>
      
        </div>
    );
};

export default Header;