import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/HomePage";
import Rules from "./component/Rules";
import QuizCard from "./component/QuizCard";


function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [name, setName] = useState("");
  return (
    <div className=" mt-36 flex content-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage setName={setName} name={name} />} />
          <Route
            path="/quiz"
            element={<QuizCard startTimer={startTimer} setName={setName} />}
          />
          <Route
            path="/rules"
            element={<Rules setStartTimer={setStartTimer} name={name} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
