import React from 'react';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-primary my-4 py-4 rounded text-center'>
            <h3 className='text-white text-start ms-3'>Q-Zone</h3>
            <div>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;