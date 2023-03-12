export default function Homepage() {
    const Homepage = ({setShowStartingPage,
    setShowQuestionsPage,
    topScore,
    username,
    setUsername)}
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
}
