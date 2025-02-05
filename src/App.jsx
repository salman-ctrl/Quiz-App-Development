import React, { useState } from 'react'
import Quiz from './Components/Quiz/Quiz'
import Login from './Components/Quiz/Login'


const App = () => {

  const [nama, setNama] = useState("")
  const [quiz, setQuiz] = useState(false)

  return (
    <div className='h-screen flex justify-center w-full bg-gradient-to-br from-sky-200 to-purple-800 '>
      {quiz ? <Quiz nama={nama} setQuiz={setQuiz} /> : <Login setNama={setNama} setQuiz={setQuiz} />}


    </div>
  )
}

export default App
