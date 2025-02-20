import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import NavBar from "../NavBar";
import { daftarPembelajaran } from "../../../dataMapel";
import { userContext } from "../../../Context/userContext";

const HalamanMapel = () => {
    const { kategori, setKategori } = useContext(userContext);

    useEffect(() => {
        if (kategori) {
            console.log(`Kategori pembelajaran yang dipilih: ${kategori}`);
        }
    }, [kategori]);

    return (
        <div className="w-full h-auto min-h-screen bg-gradient-to-br from-sky-200 to-purple-300">
            <NavBar />
            <h1 className="flex items-center justify-start pl-10 pt-16 font-bold text-3xl text-gray-700 shadow-md pb-3">
                Daftar Pembelajaran
            </h1>
            <div className="grid justify-center gap-10 pt-10 grid-cols-3 pb-10">
                {daftarPembelajaran.map((materi) => (
                    <Link key={materi.id} to={`/dashboard/pembelajaran/${materi.id}`}>
                        <div
                            onClick={() => setKategori(materi.kategori)}
                            className="h-80 min-h-72 hover:scale-110 hover:animate-none transition-all duration-400 rounded-md bg-sky-100 w-60 mt-10 m-auto shadow-lg"
                        >
                            <img className="h-50 w-full rounded-t-md" src={materi.gambar} alt="" />
                            <h2 className="text-gray-800 font-bold flex pt-4 justify-center">{materi.nama}</h2>
                            <h2 className="text-gray-800 flex text-xs pt-1 w-full px-10 text-center">
                                "{materi.deskripsi}"
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HalamanMapel;
