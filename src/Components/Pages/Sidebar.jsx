import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/logo putih.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faBrain, faBook, faLandmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <nav className='flex h-auto flex-col  '>
            <img src={Logo} alt="" className='w-lg h-md pt-2 pr-2 ' />
            <div className="pl-5 pt-3">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-x-3 cursor-pointer">
                    <FontAwesomeIcon icon={faLayerGroup} size="lg" className="text-white" />
                    Menu
                </h2>
                <ul className="flex flex-col gap-y-3 pt-2 text-xl">
                    <li>
                        <Link to="mapel" className="text-blue-300 flex items-center gap-x-4">
                            <FontAwesomeIcon icon={faBook} size="lg" className="text-blue-300" />
                            Pembelajaran
                        </Link>
                    </li>
                    <li>
                        <Link to="quiz" className="text-blue-300 flex items-center gap-x-3">
                            <FontAwesomeIcon icon={faBrain} size="lg" className="text-blue-300" />
                            Daftar Quiz
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="text-blue-300 flex items-center gap-x-3">
                            <FontAwesomeIcon icon={faLandmark} size="lg" className="text-blue-300" />
                            Perpustakaan
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='text-blue-300 flex items-end gap-x-3' >
                            <FontAwesomeIcon icon={faRightFromBracket} size="lg" className="text-blue-300" />
                            Logout
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='text-blue-300 flex items-end gap-x-3' >
                            <FontAwesomeIcon icon={faRightFromBracket} size="lg" className="text-blue-300" />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>


        </nav>
    );
};

export default Sidebar;
