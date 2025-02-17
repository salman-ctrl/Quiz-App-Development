import React, { useContext, useEffect, useRef, useState } from 'react'
import { userContext } from '../../../Context/userContext';
import { dataQuiz } from '../../../dataQuiz'

const Quiz = () => {
    const { nama, level, kategori } = useContext(userContext)
    let [index, setIndex] = useState(0);
    let [filteredData, setFilteredData] = useState([])
    let [question, setQuestion] = useState(null);
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(true);
    let [showQuiz, setShowQuiz] = useState(true)
    let [kategoriExists, setKategoriExists] = useState(true);

    let option1 = useRef(null)
    let option2 = useRef(null)
    let option3 = useRef(null)
    let option4 = useRef(null)

    let option_array = [option1, option2, option3, option4]

    // Get the questions for the selected category
    const getCategoryQuestions = () => {
        // Find the quiz object that matches the selected category
        const quizObject = dataQuiz.find(quiz => quiz.kategori === kategori);

        // If found, return its questions, otherwise return empty array and set kategoriExists to false
        if (quizObject && Array.isArray(quizObject.soal)) {
            setKategoriExists(true);
            return quizObject.soal;
        } else {
            setKategoriExists(false);
            return [];
        }
    }

    useEffect(() => {
        // Get questions for this category
        const categoryQuestions = getCategoryQuestions();

        // Pastikan categoryQuestions adalah array sebelum memanggil filter
        if (Array.isArray(categoryQuestions)) {
            // Then filter by level
            const filtered = categoryQuestions.filter(item => item.level === level);
            setFilteredData(filtered);

            if (filtered.length > 0) {
                setQuestion(filtered[0]);
            } else {
                // Reset question if no questions found for this level
                setQuestion(null);
            }
        } else {
            // Jika bukan array, set filtered data sebagai array kosong
            setFilteredData([]);
            setQuestion(null);
        }

        // Reset index and result when level or category changes
        setIndex(0);
        setResult(false);
        setScore(0);
        setLock(false);
    }, [level, kategori]);

    // Show result if no questions found
    useEffect(() => {
        if (filteredData.length === 0 && kategoriExists) {
            setResult(false);
        }
    }, [filteredData, kategoriExists]);

    const checkAns = (e, answer) => {
        if (lock === false && question) {
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
            if (index === filteredData.length - 1) {
                setResult(true);
                return 0;
            }
            const nextIndex = index + 1;
            setIndex(nextIndex);
            setQuestion(filteredData[nextIndex]);
            setLock(false)
            option_array.map((option) => {
                if (option.current) {
                    option.current.classList.remove("correct");
                    option.current.classList.remove("wrong");
                }
                return null;
            })
        } else {
            alert("Silahkan Pilih Jawaban Terlebih Dahulu!")
        }
    };

    const reset = () => {
        setIndex(0);
        if (filteredData.length > 0) {
            setQuestion(filteredData[0]);
        }
        setScore(0);
        setLock(false);
        setResult(false);
        setShowQuiz(true)
    }

    // Determine current category name for display
    const currentCategory = kategori || 'Default Category';

    // Jika kategori tidak ditemukan, tampilkan pesan kategori tidak ada
    if (!kategoriExists) {
        return (
            <div className="h-screen w-full bg-gradient-to-br from-sky-200 to-purple-800 flex">
                <div className="w-150 shadow-gray-600 shadow-md m-auto mt-24 bg-white text-gray-600 p-8 rounded-md">
                    <h1 className="text-2xl font-bold mb-4">Kategori Tidak Ditemukan</h1>
                    <p>Kategori "{kategori}" yang Anda maksud tidak ada dalam daftar quiz.</p>
                    <button
                        onClick={() => setShowQuiz(false)}
                        className="mt-6 px-4 cursor-pointer py-2 bg-sky-500 font-semibold text-white rounded-md transition-all duration-300 ease-in-out hover:bg-sky-600 hover:scale-105"
                    >
                        Kembali
                    </button>
                </div>
            </div>
        );
    }



    return (
        <div className='h-screen w-full bg-gradient-to-br from-sky-200 to-purple-800 flex'>
            <div className='w-150 shadow-gray-600 shadow-md m-auto mt-24 bg-white text-gray-600 flex flex-col gap-6 rounded-md px-8 py-5'>
                <h4 className=''>
                    Selamat Mengerjakan, {nama ? nama : "user!"} sekarang di level {level}
                    {currentCategory && ` - Kategori: ${currentCategory}`}
                </h4>
                <h1 className='flex justify-center -mb-2 font-bold text-4xl'>Quiz App</h1>
                <hr className='h-0.5 border-none bg-gray-500' />

                {result ? <></> : <>
                    <h2 className='text-2xl font-semibold'>{index + 1}. {question.question}</h2>
                    <ul className='list-alpha pl-5'>
                        <li ref={option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                        <li ref={option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                        <li ref={option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                        <li ref={option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button onClick={next} className='px-4 cursor-pointer py-2 bg-sky-500 w-42 font-semibold text-white rounded-md flex justify-center m-auto transition-all duration-300 ease-in-out hover:bg-sky-600 hover:scale-105'>
                        {index === filteredData.length - 1 ? "Finish?" : "Next"} &gt;&gt;
                    </button>
                    <div className='m-auto mt-2'>{index + 1} of {filteredData.length} questions</div>
                </>}

                {result ? <>
                    <h2 className='m-auto text-xl mt-5 mb-2 font-semibold'>
                        Correct {score} out of {filteredData.length}
                    </h2>
                    <h2 className='m-auto text-3xl mb-5 font-bold'>
                        {score * 10}/{filteredData.length * 10}
                    </h2>
                    <h2 className='m-auto text-2xl font-medium'>
                        {((score / (filteredData.length || 1)) * 100) <= 70 ? "Belajar lagi bocil" : "Kamu Hebat"} {nama ? nama : "user"}
                    </h2>
                    <button onClick={reset} className='px-4 cursor-pointer py-2 bg-sky-500 w-42 font-semibold text-white rounded-md m-auto transition-all duration-500 ease-in-out hover:bg-sky-600 hover:scale-105'>

                    </button>
                </> : <> </>}
            </div>
        </div>
    )
}

export default Quiz;