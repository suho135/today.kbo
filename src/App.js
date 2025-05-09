import { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    fetch(`/data/${today}.json`)
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(() => setGames([]));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>오늘의 KBO 요약</h1>
      {games.length === 0 ? (
        <p>오늘 경기 데이터가 없습니다.</p>
      ) : (
        games.map((game, idx) => (
          <div
            key={idx}
            style={{
              background: "white",
              padding: 10,
              marginTop: 10,
              borderRadius: 10,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{game.date}</h2>
            <p>{game.away} vs {game.home} - <strong>{game.score}</strong></p>
            <p>{game.summary}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
