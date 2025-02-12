import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { dataQuiz } from "../../../dataQuiz";

const HalamanQuiz = () => {
    return (
        <div className="w-full h-auto min-h-screen bg-gradient-to-br from-sky-200 to-purple-300">
            <NavBar />
            <h1 className="flex items-center justify-start pl-10 pt-16 font-bold text-3xl text-gray-700 shadow-md pb-3">Daftar Quiz</h1>
            <div className="grid justify-center gap-10 pt-10 grid-cols-3 pb-10" >
                {dataQuiz.map((quiz) => (
                    <Link to="/dashboard/quiz/1">
                        <div className="h-auto hover:scale-110 hover:animate-none transition-all duration-400 rounded-md bg-sky-100 w-72 mt-10 m-auto   shadow-lg">
                            <img className="h-50 w-full rounded-t-md" src={quiz.gambar} alt="" />
                            <h2 className="text-gray-800 font-bold flex pt-4 justify-center">{quiz.nama}</h2>
                            <h2 className="text-gray-800 flex text-xs pt-1 w-full px-10 text-center">"{quiz.deskripsi}"</h2>
                            <hr className="mt-5" />
                            <div className="w-full flex justify-between px-5 pt-2 pb-4 text-md">
                                <p>Soal : {quiz.jumlahSoal}</p>
                            </div>

                        </div>
                    </Link>
                ))}






            </div>


        </div>
    );
};

export default HalamanQuiz;
