import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from './Qzone';
import rbg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='my-4'>
            <div className='my-4'>
                <h3 className='mb-3'>Login With</h3>
                <Button className='mb-2' variant="outline-danger"> <FaGoogle /> move with Google</Button>
                <Button className='mb-2' variant="outline-dark"> <FaGithub /> move with GitHub</Button>
            </div>
            <div className='my-4'>
                <h3 className='mb-3'>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item className='text-secondary'><FaFacebook className='text-primary'/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='text-secondary'><FaTwitter className='text-info'/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-secondary'><FaInstagram className='text-danger'/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='position-relative'>
                <div>
                    <img src={rbg} alt="" />
                </div>
                <div className='text-center position-absolute top-0 text-white p-3 my-4'>
                    <h2>Create an Amazing Newspaper</h2>
                    <h5 className='my-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h5>
                    <button className='btn btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;