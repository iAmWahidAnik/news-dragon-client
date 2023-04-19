import React from 'react';
import Header from '../paages/shared/Header';
import Footer from '../paages/shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../paages/shared/RightNav';
import LeftNav from '../paages/shared/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}><p className='text-center'>Main content coming soon</p></Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;