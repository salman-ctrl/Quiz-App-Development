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
                <h2 className='flex basis-1/7 items-center  justify-center font-bold text-xl'>Cari Buku :</h2>
                <input
                    type="text"
                    placeholder='Cari Buku..'
                    className="p-2 pl-5 border flex-1 border-gray-400 rounded-md  mr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    value={searchBuku}
                    onChange={(e) => setSearchBuku(e.target.value)}


                />
            </div>

            <div className='grid place-items-center grid-cols-3 gap-20 pt-16 pb-10'>
                {daftarBuku.map((item, index) => (
                    <a href={item.volumeInfo.previewLink}
                        className='cursor-pointer'
                        rel='noopener noreferrer'
                        target='_blank'

                    >
                        <div key={index} >
                            <div className='w-70 h-94 bg-gradient-to-br rounded-t-md overflow-hidden rounded-b-md   bg-sky-100 shadow-xl'>
                                <img src={item.volumeInfo.imageLinks.thumbnail} alt="" className='w-full h-60' />
                                <p className='text-center pt-4 font-bold text-sm px-3'>{item.volumeInfo.title}</p>
                                <p className='text-gray-600 text-xs text-center pt-2'>{item.volumeInfo.authors ? item.volumeInfo.authors : "tidak ada penulis"}</p>
                                <hr />
                                <div className='flex justify-evenly pt-2  items-center'>
                                    <div>
                                        <p className='font-bold text-sm'>Tahun Terbit</p>
                                        <p className='text-gray-600 text-xs text-center'>{item.volumeInfo.publishedDate}</p>
                                    </div>

                                    <div>
                                        <p className='font-bold text-sm'>Kategori</p>
                                        <p className='text-gray-800 text-xs flex  '>{item.volumeInfo.categories}</p>
                                    </div>

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
