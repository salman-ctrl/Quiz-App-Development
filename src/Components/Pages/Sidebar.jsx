import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className='flex  flex-col '>
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul className='flex flex-col gap-y-3' >
                <li ><Link to="mapel" className="text-blue-300">Mata Pelajaran</Link></li>
                <li><Link to="quiz" className="text-blue-300">Daftar Quiz</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
