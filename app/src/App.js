import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState("");

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  
  return (
   <>
    <Header />
    {showStartingPage &&
    (<Homepage 
      setShowStartingPage = {setShowStartingPage}
      setShowQuestionsPage = {setShowQuestionPage}
      topScore = {topScore}
      username = {username}
      setUsername = {setUsername}
    />
    )}
    {(<QuestionCard 
      score = {score}
      setScore={setScore}
      setShowQuestionsPage={setShowQuestionsPage}
      setShowFinalPage={setShowFinalPage}
    />
    )}
    {(<Leaderboard 
      setShowStartingPage = {setShowStartingPage}
      setShowFinalPage = {setShowFinalPage}
      topScore = {topScore}
      setTopScore = {setTopScore}
      setScore = {setScore}
      score = {score}
      username = {username}
      setUsername = {setUsername}
    />
    )}
    <Footer />
   </>
  );
}

export default App;
