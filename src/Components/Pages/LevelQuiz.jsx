import React from 'react'

const LevelQuiz = () => {



    return (
        <div className='w-96 h-36 bg-sky-500 m-auto rounded-md '>
            <h1 className='text-center pt-3'>Pilih Level</h1>
            <div className='flex justify-evenly mt-7 font-bold text-gray-700'>
                <button className='bg-green-400 w-24 rounded-md' >Easy</button>
                <button className='bg-orange-500 w-24 rounded-md '>Medium</button>
                <button className='bg-red-600 w-24 py-2 rounded-md'>Hard</button>
            </div>
        </div>
    )
}

export default LevelQuiz
