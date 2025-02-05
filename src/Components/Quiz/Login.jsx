import React, { useRef, useState } from 'react'

const Login = ({ setNama, setQuiz }) => {

    const [inputNama, setInputNama] = useState('')
    const inputRef = useRef(null)

    const handleSubmit = () => {
        if (inputNama.trim() === "") {
            inputRef.current.classList.add("kosong")
            alert("Nama Tidak Boleh Kosong")
            return;
        }

        setNama(inputNama)
        setInputNama('')
        setQuiz(true)

    }

    const handleChange = (e) => {
        setInputNama(e.target.value);
        inputRef.current.classList.remove('kosong'); // Hapus border merah saat mulai mengetik
    };

    return (
        <div className=' bg-amber-500 h-60 m-auto rounded-2xl shadow-gray-200 shadow-sm'>
            <div className='h-60 px-10 gap-5 bg-blue-200 justify-center items-center flex flex-col rounded-2xl font-bold'>
                <h1 className='text-sky-500 text-xl '>Sebelum Memulai, Silahkan Login!</h1>
                <hr className='h-0.5 -mt-2 mb-3 bg-gray-500 w-full' />
                <div className='flex flex-row gap-5'>
                    <h1 className='py-1 text-sky-500'>Masukkan Namamu :</h1>
                    <input
                        ref={inputRef}
                        className='border-2 border-blue-400 outline-none rounded-md px-2 py-1 transition-all duration-300'
                        type='text'
                        value={inputNama}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit} className='px-8 mt-4 rounded-lg py-2 bg-sky-500 text-white'>Sumbit</button>
            </div>

        </div>
    )
}

export default Login
