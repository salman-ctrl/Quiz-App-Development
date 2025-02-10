import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';



const HalamanMapel = () => {
    return (
        <div className='h-screen bg-blue-200 w-full '>
            <NavBar />
            <Link to='QUIZ'>ini quiz nya</Link>
        </div>
    )
}

export default HalamanMapel;
