import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import LevelQuiz from '../LevelQuiz';



const HalamanMapel = () => {
    return (
        <div className='h-screen bg-blue-200 w-full '>
            <NavBar />
            <Link to='QUIZ'>Ini Halaman Belajarnya</Link>
            <LevelQuiz />
        </div>
    )
}

export default HalamanMapel;
