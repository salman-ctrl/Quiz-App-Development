import React from 'react'

const Quiz = () => {

    return (
        <div className='w-150 shadow-gray-600 shadow-md  m-auto mt-24 bg-white text-gray-600 flex flex-col gap-6 rounded-md px-10 py-16'>
            <h1 className='flex justify-center -mb-2 font-bold text-4xl'>Quiz App</h1>
            <hr className='h-0.5 border-none bg-gray-500' />
            <h2 className='text-2xl font-semibold'> Which Device is required for the Internet connection?</h2>
            <ul className='list-alpha pl-5'>
                <li>Remote</li>
                <li>Router</li>
                <li>LAN Cable</li>
                <li>Pen Drive</li>
            </ul>
            <button className='px-4 py-1 bg-sky-500 w-42 font-semibold text-white rounded-md m-auto transition-all duration-300 ease-in-out hover:bg-sky-600 hover:scale-105'>Next &gt;&gt;</button>
            <div className='m-auto mt-2 '>1 of 5 questions</div>
        </div>
    )
}

export default Quiz
