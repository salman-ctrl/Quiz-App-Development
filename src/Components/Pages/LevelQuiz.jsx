import React from 'react'

const LevelQuiz = () => {



    return (
        <div>
            <h1>Pilih Level</h1>
            <div className='w-52 h-36 bg-sky-500'>
                <button className='bg-green-400 px-4 py-2' >Easy</button>
                <button className='bg-orange-300 px-4 py-2'>Medium</button>
                <button className='bg-red-600 px-4 py-2'>Hard</button>
            </div>
        </div>
    )
}

export default LevelQuiz
