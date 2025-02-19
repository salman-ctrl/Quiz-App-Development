import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Pages/Login/Login";
import Dashboard from "../Components/Pages/Dashboard";
import HalamanMapel from "../Components/Pages/Mapels/HalamanMapel";
import HalamanQuiz from "../Components/Pages/Quiz/HalamanQuiz";
import Quiz from "../Components/Pages/Quiz/Quiz";
import LevelQuiz from "../Components/Pages/LevelQuiz";
import Library from "../Components/Pages/Perpustakaan/Library"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />, // Halaman Login sebagai halaman utama
    },
    {
        path: "/dashboard",
        element: <Dashboard />, // Dashboard setelah login
        children: [
            {
                index: true,
                element: <HalamanMapel />
            },
            {
                path: "mapel",
                element: <HalamanMapel />
            },
            {
                path: "library",
                element: <Library />

            },
            {
                path: "quiz",
                element: <HalamanQuiz />
            },
            {
                path: "quiz/:id/detail",
                element: <Quiz />
            },
            {
                path: "quiz/:id",
                element: <LevelQuiz />
            }
        ]
    }
]);
