import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'



const Library = () => {

    let [daftarBuku, setDaftarBuku] = useState([]);

    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=ilmupengetahuanalamkelas3sd&&maxResults=40')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("gagal memuat data");
                }
                return response.json();
            })
            .then((json) => setDaftarBuku(json.items || []))
            .catch((error) => console.log('Error', error))

    }, [])

    return (
        <div className='h-auto min-h-screen w-full bg-gradient-to-br from-sky-200 to-purple-300'>
            <NavBar />
            <h1 className="flex items-center justify-start pl-10 pt-16 font-bold text-3xl text-gray-700 shadow-md pb-3">Daftar Quiz</h1>
            <div className='grid place-items-center grid-cols-3 gap-20 pt-16'>
                {daftarBuku.map((item, index) => (
                    <div key={index} >
                        <div className='w-60 h-80 bg-blue-600'>
                            {item.volumeInfo.imageLinks?.thumbnail && (
                                <img src={item.volumeInfo.imageLinks.thumbnail} alt="" className='w-full h-60' />
                            )};
                            {item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : "kategori tidak ada "}
                            {item.volumeInfo.title}
                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default Library
