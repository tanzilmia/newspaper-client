import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGofore,FaGithub,FaFacebook,FaTwitter,FaTwitch,FaInstagram,FaWhatsapp } from "react-icons/fa";
import Caresol from '../Caresol/Caresol';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const provider = new GoogleAuthProvider()
const Rigthsidenav = () => {
    const {providerLogin} = useContext(AuthContext)
    const handleGoogleLogin =() =>{
        providerLogin(provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(e => console.error(e)) 
    }
    return (
        <div>
             <ButtonGroup vertical>
            <Button onClick={handleGoogleLogin} variant="outline-primary"> <FaGofore></FaGofore> Login with Google</Button>
            <Button variant='outline-dark'> <FaGithub></FaGithub> Login With GitHub</Button>
            </ButtonGroup>

            <div>
                <h2>Find On Us</h2>
                <ListGroup>
                  <ListGroup.Item className = 'mb-2'><FaFacebook/> Facebook </ListGroup.Item>
                  <ListGroup.Item className = 'mb-2'> <FaTwitter/> Twitter </ListGroup.Item>
                  <ListGroup.Item className = 'mb-2'> <FaWhatsapp/> WhatsApp  </ListGroup.Item>
                  <ListGroup.Item className = 'mb-2'> <FaInstagram/> Instragram </ListGroup.Item>
                  <ListGroup.Item className = 'mb-2'> <FaTwitch/> Twitch </ListGroup.Item>
              </ListGroup>
            </div>

            {/* caresol */}

            <div>
                <Caresol></Caresol>
            </div>
        </div>
    );
};

export default Rigthsidenav;