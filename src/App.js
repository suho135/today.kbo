import React from "react";
import Reservation from "./Reservation";


function App() {
  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#fff8f0", color: "#333" }}>
      <header style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>수호 카페</h1>
        <p style={{ fontSize: "1.5rem" }}>따뜻한 한 잔의 여유</p>
      </header>

      <section style={{ padding: "40px 20px", maxWidth: "800px", margin: "auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>🍵 소개</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          수호 카페는 신선한 원두와 따뜻한 분위기로 여러분을 맞이합니다.  
          편안한 휴식과 함께 특별한 커피 한 잔을 즐겨보세요.
        </p>
      </section>

      <section style={{ padding: "40px 20px", backgroundColor: "#fff3e0" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>☕ 주요 메뉴</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <h3>아메리카노</h3>
            <p>₩4,000</p>
          </div>
          <div style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <h3>카페라떼</h3>
            <p>₩4,500</p>
          </div>
          <div style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <h3>녹차라떼</h3>
            <p>₩5,000</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "800px", margin: "auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>📍 위치 및 문의</h2>
        <p style={{ marginBottom: "10px" }}>서울시 강남구 행복로 77</p>
        <p style={{ marginBottom: "20px" }}>전화: 010-5678-1234</p>
        <a href="https://open.kakao.com/o/yourlink" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#ff8a65",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none"
        }}>
          카톡 문의하기
        </a>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#ffe0b2", fontSize: "0.9rem" }}>
        ⓒ 2025 수호 카페. All Rights Reserved.
      </footer>
   <Reservation /> 
          </div>
  );
}

export default App;


