import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err.message))
    },[]);
    return (
        <div>
            <h3 className=''>This is left nav</h3>
            <div className='my-4'>
                {
                    data.map(dt => <p className='ms-4' key={dt.id}>
                        <Link to={`/categories/${dt.id}`} className='text-decoration-none text-secondary'>{dt.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;