import { createBrowserRouter } from "react-router-dom"
import HalamanMapel from "../Components/Pages/Mapels/HalamanMapel"
import HalamanQuiz from "../Components/Pages/Quiz/HalamanQuiz"
import RootLayout from "../Layout/RootLayout"
import Dashboard from "../Components/Pages/Dashboard"
import Quiz from "../Components/Pages/Quiz/Quiz"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <HalamanMapel />
            },
            {
                path: "/quiz",
                element: <HalamanQuiz />
            },
            {
                path: "quiz/:1",
                element: <Quiz />
            }
        ]
    }

])