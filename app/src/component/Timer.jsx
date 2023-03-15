import React, { useEffect } from "react";

const Timer = ({
    setQuestionNumber,
    setSeconds,
    seconds,
    questionNumber,
    quizQuestions,
    setDisplayScore,
}) => {
    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((seconds) => seconds - 1);
            }

            if (seconds === 0) {
                if (questionNumber < quizQuestions.length - 1) {
                    setQuestionNumber((questionNumber) => questionNumber + 1);
                    setSeconds(10);
                } else {
                    setDisplayScore(true);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    return (
    <p className="text-right">
        00 : {seconds < 0 ? `0${seconds}` : seconds}
    </p>
    );
};

export default Timer;
