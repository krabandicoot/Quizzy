import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ setName, name }) => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    //onclick of start button ====> Go to instructions page
    const start = () => {
        if (name === "") {
            setError(true);
        } else {
            setError(false);
            navigate("/rules");
        }
        };

    const handleNameChange = (e) => {
        const { value } = e.target;
        const re = /^[A-Za-z]+$/;
        if (re.test(value) || value === "") {
            setName(value);
            if (value.length > 0) {
            setError(false);
            } else {
            setError(true);
            }
        }
};
    return (
    <div className="flex-wrap justify-center text-center content-center max-w-md m-2 p-28 bg-BF6B04 border border-gray-200 rounded-lg shadow dark:bg-mydarkpink dark:bg-opacity-90 dark:border-mydarkpink">
        <h2 className= " text-left justify-center content-center mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">Easy peasy...</h2>
        <h1 className="justify-center text-center content-center mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"> Lemon Quizzy !</h1>
        <input
            className=" text-center mt-4  bg-transparent text-white placeholder:text-white placeholder:text-opacity-30"
            type="text"
            value={name}
            name="name"
            placeholder="Enter your name here"
            autoComplete="off"
            onChange={(e) => handleNameChange(e)}
        />
        {error && <p className="mb-1 font-normal text-sm text-red-600 dark:text-red-200">Enter the name to start the game</p>}
        <button onClick={start} className="mt-3 text-myyellow hover:text-white border border-myyellow hover:bg-myyellow focus:ring-4 focus:outline-none focus:ring-myyellow font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-myyellow dark:text-myyellow dark:hover:text-white dark:hover:bg-myyellow dark:focus:ring-yellow-900">Click here to start</button>
    </div>
    );
};
export default HomePage;
