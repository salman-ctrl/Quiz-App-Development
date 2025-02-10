import React from 'react'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { userContext } from '../../context/userContext'


const NavBar = () => {
    const { nama } = useContext(userContext)

    return (
        <div className='w-full h-20 bg-gray-500 flex justify-between gap-x-5 items-center pr-10 px-20'>

            <div className='flex gap-x-10 '>
                <p>Home</p>
                <p>Elearning</p>
            </div>
            <div className='flex gap-x-10'>
                <p>Kontak</p>
                <p>Akun Saya</p>
                <div className='flex gap-x-3'>

                    <FontAwesomeIcon icon={faUser} className='pt-1' />
                    <p>hai, {nama}!</p>
                </div>

            </div>

        </div>
    )
}

export default NavBar
