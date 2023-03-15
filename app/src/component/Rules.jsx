import React from "react";
import { useNavigate } from "react-router-dom";

const Instructions = ({ setStartTimer, name }) => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate("/quiz");
        setStartTimer(true);
        };
    return (
    <div className="flex-wrap justify-center text-center content-center max-w-md m-2 p-14 bg-BF6B04 border border-gray-200 rounded-lg shadow dark:bg-mydarkpink dark:bg-opacity-90 dark:border-mydarkpink">
        <h1 className="justify-center text-center content-center mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Welcome<p className="text-myyellow">{name}</p></h1>
            <p className=" text-sm text-gray-200 mb-2">Please read the instructions carefully.</p>
            <p className=" text-base text-gray-200 mb-2">This quiz consists of 10 questions. You will be given 10 seconds for each question.
            BE CAREFUL ! You can't go back and the longer your take the smaller your score will be</p>   
            <p className="mt-3 text-xs text-gray-300 text-opacity-50">To start the Quiz, click the “Start Quiz” button.</p>        
        <button onClick={startQuiz} className=" text-myyellow hover:text-white border border-myyellow hover:bg-myyellow focus:ring-4 focus:outline-none focus:ring-myyellow font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-myyellow dark:text-myyellow dark:hover:text-white dark:hover:bg-myyellow dark:focus:ring-yellow-900">Start Quiz</button>
    </div>
);
};

export default Instructions;
