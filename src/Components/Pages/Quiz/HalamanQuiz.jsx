import { Link } from "react-router-dom";

const HalamanQuiz = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-br from-sky-200 to-purple-800">
            <h1 className="flex items-center justify-center pt-16 font-bold text-3xl">Daftar Quiz</h1>

            <div className="flex flex-wrap justify-center gap-10 pt-10">
                <Link to="/quiz/1">
                    <div className="h-64 rounded-md bg-blue-800 w-72 mt-10 m-auto">
                        <img className="h-50 w-full rounded-md" src="/src/assets/foto.png" alt="" />
                        <h2 className="text-white flex pt-4 justify-center">Quiz level 2</h2>
                    </div>
                </Link>


            </div>


        </div>
    );
};

export default HalamanQuiz;
