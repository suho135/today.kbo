import { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  useEffect(() => {
    fetch(`/data/${selectedDate}.json`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch(() => setGames([]));
  }, [selectedDate]);

  return (
    <div style={{ padding: 20 }}>
      <h1>오늘의 KBO 요약</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{ padding: 8, fontSize: 16, marginBottom: 20 }}
      />
      {games.length === 0 ? (
        <p>해당 날짜의 경기 데이터가 없습니다.</p>
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
            <p>
              {game.away} vs {game.home} - <strong>{game.score}</strong>
            </p>
            <p>{game.summary}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
