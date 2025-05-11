import React, { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    people: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 카톡 메시지처럼 구성 (나중에 API 연동 가능)
    const message = \`[예약 신청]\n
    이름: \${formData.name}\n
    전화번호: \${formData.phone}\n
    날짜: \${formData.date}\n
    시간: \${formData.time}\n
    인원: \${formData.people}명
    \`;

    alert("예약 신청 완료!\n\n" + message);

    // 여기서 나중에 카카오톡 API로 전송 가능
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📅 예약하기</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="tel"
          name="phone"
          placeholder="전화번호"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="people"
          placeholder="예약 인원 수"
          value={formData.people}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>예약 신청하기</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "1rem"
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  cursor: "pointer"
};

export default Reservation;
