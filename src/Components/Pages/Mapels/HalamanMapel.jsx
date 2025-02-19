import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';



const HalamanMapel = () => {
    return (
        <div className='h-screen bg-blue-200 w-full '>
            <NavBar />
            <h1 className="flex items-center justify-start pl-10 pt-16 font-bold text-3xl text-gray-700 shadow-md pb-3">Daftar Pelajaran</h1>
            
        </div>
    )
}

export default HalamanMapel;
