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
      {
        date: "2025-05-10",
        home: "KIA",
        away: "SSG",
        score: "2:1",
        summary: "이의리 7이닝 1실점, 박찬호 결승타!",
      },
      {
        date: "2025-05-10",
        home: "NC",
        away: "키움",
        score: "6:4",
        summary: "손아섭 멀티히트, 김주원 쐐기타!",
      },
      {
        date: "2025-05-10",
        home: "롯데",
        away: "KT",
        score: "3:0",
        summary: "나균안 완봉승! 안치홍 멀티타점!",
      },
    ]);
  }, []); // 변경 유도용 주석 추가

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
