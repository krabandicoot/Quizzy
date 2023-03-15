import React, { useState } from "react";
import { quizQuestions } from "../db/quizdata";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

const QuizCard = ({ startTimer, setName }) => {

    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [displayScore, setDisplayScore] = useState(false);
    const [clickedAnswer, setclickedAnswer] = useState(0);
    const [seconds, setSeconds] = useState(20);

    const navigate = useNavigate();

    const selectedAnswer = (selected, id) => {
        setclickedAnswer(id);
        setTimeout(() => {
            const nextQ = questionNumber + 1;
            setclickedAnswer(0);
            if (nextQ < quizQuestions.length) {
            setQuestionNumber(nextQ);
            }
            if (nextQ === quizQuestions.length) {
            setDisplayScore(true);
            }
            if (selected === true) {
            setScore((score) => score + 1);
            }
            setSeconds(20);
    }, 600);
    };

    return (
    <div className="flex justify-between content-center max-w-md m-2 p-5 border border-gray-200 rounded-lg shadow dark:bg-mydarkpink dark:bg-opacity-90 dark:border-mydarkpink">
        <div className="">
        {displayScore ? (
            <>
            <p className="text-2xl font-bold m-4 text-white">
                Your score : {score} / {quizQuestions.length}
            </p>
            <div className="grid grid-cols-2">
                <button
                className="mt-3 text-myyellow hover:text-white border border-myyellow hover:bg-myyellow focus:ring-4 focus:outline-none focus:ring-myyellow font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-myyellow dark:text-myyellow dark:hover:text-white dark:hover:bg-myyellow dark:focus:ring-yellow-900"
                onClick={() => {
                    navigate(-1);
                    setName("");
                }}
                >
                Retry
                </button>
                <button
                className="mt-3 text-myyellow hover:text-white border border-myyellow hover:bg-myyellow focus:ring-4 focus:outline-none focus:ring-myyellow font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-myyellow dark:text-myyellow dark:hover:text-white dark:hover:bg-myyellow dark:focus:ring-yellow-900"
                onClick={() => {
                    navigate("/");
                    setName("");
                }}
                >
                Exit
                </button>
            </div>
            </>
        ) : (
            <>
            <div className="grid grid-cols-2 text-white">
                <h2 className="">
                {questionNumber + 1} of {quizQuestions.length}
                </h2>
                {startTimer && (
                <Timer
                    setDisplayScore={setDisplayScore}
                    setQuestionNumber={setQuestionNumber}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    questionNumber={questionNumber}
                    quizQuestions={quizQuestions}
                />
                )}
            </div>

            <h2 className="text-2xl font-bold m-4 text-white">{quizQuestions[questionNumber].question}</h2>
            <div className="grid grid-cols-2 mt-5 items-center pl-4 rounded dark:border-gray-700">
                {quizQuestions[questionNumber].answers.map((answer) => (
                <button
                    className="text-mybrightpink hover:text-white border mx-4 border-mybrightpink hover:bg-mybrightpink focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    name={clickedAnswer === answer.id ? `answerCss` : null}
                    key={answer.id}
                    onClick={() => selectedAnswer(answer.isCorrect, answer.id)}
                >
                    {answer.ans}
                </button>
                ))}
            </div>
            </>
        )}
        </div>
    </div>
    );
};
export default QuizCard;