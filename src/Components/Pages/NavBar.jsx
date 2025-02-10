import React from 'react'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { userContext } from '../../context/userContext'


const NavBar = () => {
    const { nama } = useContext(userContext)

    return (
        <div className='w-full h-20 bg-gray-600 flex justify-between bg-gray-600/80 backdrop-blur-md transition-all shadow-md gap-x-5 items-center pr-10 px-20 text-xl  font-semibold sticky top-0 z-30 text-white'>

            <div className='flex gap-x-10 '>
                <p>Home</p>
                <p>Elearning</p>
            </div>
            <div className='flex gap-x-10'>
                <p>Kontak</p>
                <div className='flex gap-x-3 cursor-pointer'>
                    <p>hai, {nama}!</p>
                    <FontAwesomeIcon icon={faUser} size='lg' className=' cursor-pointer text-7xl' />

                </div>

            </div>

        </div>
    )
}

export default NavBar
