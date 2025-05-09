import { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames([
      {
        date: "2025-05-10",
        home: "삼성",
        away: "두산",
        score: "5:3",
        summary: "뷰캐넌 6이닝 무실점, 구자욱 결승타!",
      },
      {
        date: "2025-05-10",
        home: "LG",
        away: "한화",
        score: "7:6",
        summary: "채은성 끝내기 홈런으로 LG 승리!",
      },
    ]);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>오늘의 KBO 요약</h1>
      {games.map((game, idx) => (
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
      ))}
    </div>
  );
}

export default App;
