import { Link } from "react-router-dom";
import NavBar from "../NavBar";

const HalamanQuiz = () => {
    return (
        <div className="w-full h-auto min-h-screen bg-gradient-to-br from-sky-200 to-purple-300">
            <NavBar />
            <h1 className="flex items-center justify-start pl-10 pt-16 font-bold text-3xl">Daftar Quiz</h1>
            <div className="grid justify-center gap-10 pt-10 grid-cols-3">
                <Link to="/dashboard/quiz/1" className="hover:scale-110 hover:animate-none transition-all duration-400 ">
                    <div className="h-64 rounded-md bg-sky-100 w-72 mt-10 m-auto  shadow shadow-lg">
                        <img className="h-50 w-full rounded-t-md" src="/src/assets/foto.png" alt="" />
                        <h2 className="text-gray-800 font-bold flex pt-4 justify-center">Quiz level 2</h2>
                    </div>
                </Link>
                <Link to="/dashboard/quiz/2">
                    <div className="h-64 rounded-md bg-blue-800 w-72 mt-10 m-auto">
                        <img className="h-50 w-full rounded-md" src="/src/assets/foto.png" alt="" />
                        <h2 className="text-white flex pt-4 justify-center">Quiz level 2</h2>
                    </div>
                </Link>
                <Link to="/dashboard/quiz/3">
                    <div className="h-64 rounded-md bg-blue-800 w-72 mt-10 m-auto">
                        <img className="h-50 w-full rounded-md" src="/src/assets/foto.png" alt="" />
                        <h2 className="text-white font-bold flex pt-4 justify-center">Quiz level 2</h2>
                    </div>
                </Link>

            </div>


        </div>
    );
};

export default HalamanQuiz;
