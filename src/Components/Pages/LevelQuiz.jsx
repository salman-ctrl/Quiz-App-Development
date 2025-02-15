import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { userContext } from '../../Context/userContext';

const LevelQuiz = () => {

    const { level, setLevel } = useContext(userContext)

    useEffect(() => {
        if (level) {
            console.log(`kamu sekarang di level ${level}`)
        }
    }, [level]);

    return (
        <div className='w-96 h-36 bg-sky-500 m-auto rounded-md '>
            <h1 className='text-center pt-3'>Pilih Level</h1>
            <div className='flex justify-evenly mt-7 font-bold text-gray-700'>
                <Link to='/dashboard/quiz/:id/detail' ><button onClick={() => setLevel('easy')} className='bg-green-400 py-2 w-24 rounded-md'>Easy</button> </Link>
                <Link to='/dashboard/quiz/:id/detail'  > <button onClick={() => setLevel('medium')} className='bg-orange-500 py-2 w-24 rounded-md '>Medium</button> </Link>
                <Link to='/dashboard/quiz/:id/detail' > <button onClick={() => setLevel('hard')} className='bg-red-600 w-24 py-2 rounded-md' >Hard</button> </Link>
            </div>
        </div>
    )
}

export default LevelQuiz;
