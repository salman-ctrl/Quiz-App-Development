import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'



const Library = () => {

    let [daftarBuku, setDaftarBuku] = useState([]);
    let [searchBuku, setSearchBuku] = useState('')

    useEffect(() => {
        if (searchBuku.trim() === '') return;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBuku}&&maxResults=40`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("gagal memuat data");
                }
                return response.json();
            })
            .then((json) => setDaftarBuku(json.items || []))
            .catch((error) => console.log('Error', error))

    }, [searchBuku]);



    return (
        <div className='h-auto min-h-screen w-full bg-gradient-to-br from-sky-200 to-purple-300'>
            <NavBar />
            <h1 className="flex items-center justify-start pl-10 pt-16 font-bold text-3xl text-gray-700 shadow-md pb-3">Daftar Buku</h1>
            <div className='flex pt-5'>
                <h2 className='flex basis-1/7 items-center  justify-center'>Cari Buku :</h2>
                <input
                    type="text"
                    placeholder='Cari Buku..'
                    className="p-2 border flex-1 border-gray-400 rounded-md  mr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    value={searchBuku}
                    onChange={(e) => setSearchBuku(e.target.value)}


                />
            </div>

            <div className='grid place-items-center grid-cols-3 gap-20 pt-16'>
                {daftarBuku.map((item, index) => (
                    <a href={item.volumeInfo.previewLink}
                        className='cursor-pointer'
                        rel='noopener noreferrer'

                    >
                        <div key={index} >
                            <div className='w-70 h-90 bg-gradient-to-br rounded-t-md overflow-hidden rounded-b-md   bg-sky-100 shadow-xl'>
                                {item.volumeInfo.imageLinks?.thumbnail && (
                                    <img src={item.volumeInfo.imageLinks.thumbnail} alt="" className='w-full h-60' />
                                )}
                                <div className='text-center  '>
                                    {item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : "kategori tidak ada "}
                                    {item.volumeInfo.title}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Library
