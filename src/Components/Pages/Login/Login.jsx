import React, { useRef, useContext, useState } from 'react';
import { userContext } from '../../../context/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputNama, setInputNama] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const { setNama } = useContext(userContext);  // Ambil setNama dari Context

    const handleSubmit = () => {
        if (inputNama.trim() === '') {
            inputRef.current.classList.add('kosong');
            alert('Nama Tidak Boleh Kosong');
            return;
        }

        localStorage.setItem('nama', inputNama)
        setNama(inputNama);  // Simpan nama ke Context API
        setInputNama('');
        navigate('/dashboard');  // Pindah ke Dashboard setelah lo

    };

    const handleChange = (e) => {
        setInputNama(e.target.value);
        inputRef.current.classList.remove('kosong');
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-sky-200 to-purple-300">
            <div className='bg-amber-500 min-h-60 m-auto rounded-2xl w-92  shadow-md mx-3 flex justify-center items-center overflow-hidden'>
                <div className='w-96 px-10 gap-5 bg-gradient-to-br to-sky-200 from-purple-300 flex flex-col items-center rounded-2xl font-bold py-6'>
                    <h1 className='text-gray-700 text-xl text-center'>Sebelum Memulai, Masukan Namamu!</h1>
                    <hr className='h-[2px] -mt-2 mb-3 bg-gray-500 w-full' />
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-gray-600 text-lg m-auto'>Nama:</label>
                        <input
                            required
                            ref={inputRef}
                            className='border-2 border-sky-500 outline-none rounded-md px-2 py-1 w-full text-center'
                            type='text'
                            value={inputNama}
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={handleSubmit} className='px-8 mt-4 rounded-lg py-2 bg-sky-500 text-white cursor-pointer'>
                        Submit
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Login;
