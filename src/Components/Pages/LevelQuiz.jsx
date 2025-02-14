import React, { useContext, useEffect, useState } from 'react'
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
                <button onClick={() => setLevel('easy')} className='bg-green-400 w-24 rounded-md'>Easy</button>
                <button onClick={() => setLevel('medium')} className='bg-orange-500 w-24 rounded-md '>Medium</button>
                <button onClick={() => setLevel('hard')} className='bg-red-600 w-24 py-2 rounded-md' >Hard</button>
            </div>

        </div>
    )
}

export default LevelQuiz;
