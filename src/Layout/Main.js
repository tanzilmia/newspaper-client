import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Sheared/Header/Header';
import LeftSideNav from '../Pages/Sheared/LeftSideNav/LeftSideNav';
import Rigthsidenav from '../Pages/Sheared/RightSidenav/Rigthsidenav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col lg = '2' className='d-none d-lg-block'>
                 <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg = '7'>
                <Outlet></Outlet>
                </Col>
                <Col lg = '3'>
                    <Rigthsidenav></Rigthsidenav>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Main;