import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Pages/Login/Login";
import Dashboard from "../Components/Pages/Dashboard";
import HalamanMapel from "../Components/Pages/Mapels/HalamanMapel";
import HalamanQuiz from "../Components/Pages/Quiz/HalamanQuiz";
import Quiz from "../Components/Pages/Quiz/Quiz";

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
                path: "quiz",
                element: <HalamanQuiz />
            },
            {
                path: "quiz/:1",
                element: <Quiz />
            },
            {
                path: "quiz/:2",
                element: <Quiz />
            }
        ]
    }
]);
