import React, { useEffect, useRef, useState } from 'react'
import { data } from '../../../../public/data'



const Quiz = ({ nama, setQuiz }) => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false);

    let option1 = useRef(null)
    let option2 = useRef(null)
    let option3 = useRef(null)
    let option4 = useRef(null)

    let option_array = [option1, option2, option3, option4]

    const checkAns = (e, answer) => {
        if (lock === false) {
            if (question.answer === answer) {
                e.target.classList.add("correct");
                setLock(true)
                setScore(prev => prev + 1)
            }
            else {
                e.target.classList.add("wrong");
                setLock(true)
                option_array[question.answer - 1].current.classList.add("correct")
            }
        }
    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false)
            option_array.map((option) => {
                option.current.classList.remove("correct");
                option.current.classList.remove("wrong");
                return null;
            })
        } else {
            alert("Silahkan Pilih Jawaban Terlebih Dahulu!")
        }

    };
    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        setQuiz(false)

    }

    return (
        <div className='h-screen w-full bg-gradient-to-br from-sky-200 to-purple-800 flex'>
            <div className='w-150 shadow-gray-600 shadow-md  m-auto mt-24 bg-white text-gray-600 flex flex-col gap-6 rounded-md px-8 py-5 '>
                <h4 className=''>Hai, {nama ? `${nama}!` : "user!"}</h4>
                <h1 className='flex justify-center -mb-2 font-bold text-4xl'>Quiz App</h1>
                <hr className='h-0.5 border-none bg-gray-500' />
                {result ? <></> : <> <h2 className='text-2xl font-semibold'>{index + 1}. {question.question}</h2>
                    <ul className='list-alpha pl-5'>
                        <li ref={option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                        <li ref={option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                        <li ref={option3} onClick={(e) => { checkAns(e, 3) }}>{s.option3}</li>
                        <li ref={option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button onClick={next} className='px-4 cursor-pointer py-2 bg-sky-500 w-42 font-semibold text-white rounded-md flex justify-center m-auto transition-all duration-300 ease-in-out hover:bg-sky-600 hover:scale-105'>{index === data.length - 1 ? "Finish?" : "Next"} &gt;&gt;</button>
                    <div className='m-auto mt-2 '>{index + 1} of {data.length} questions</div></>}
                {result ? <>
                    <h2 className='m-auto text-xl mt-5 mb-2 font-semibold' >Correct {score} out of {data.length}</h2>
                    <h2 className='m-auto text-3xl mb-5 font-bold'> {score * 10}/{data.length * 10} </h2>
                    <h2 className='m-auto text-2xl font-medium'> {((score / data.length) * 100) <= 70 ? "Belajar lagi bocil" : "Kamu Hebat"}  {nama ? nama : "user"}</h2>
                    <button onClick={reset} className='px-4 cursor-pointer py-2 bg-sky-500  w-42 font-semibold text-white rounded-md m-auto transition-all duration-500 ease-in-out hover:bg-sky-600 hover:scale-105'> Reset </button>
                </> : <> </>}
            </div>
        </div>

    )
}

export default Quiz;
