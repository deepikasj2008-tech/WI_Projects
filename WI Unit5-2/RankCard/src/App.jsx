import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const students = [
  {
    rank: 1,
    name: "Deepika S",
    regNo: "23AD101",
    department: "AI & Data Science",
    marks: {
      Java: 95,
      Python: 92,
      DBMS: 90,
      "Data Structures": 94,
      "Web Technology": 96
    }
  },
  {
    rank: 2,
    name: "Anitha R",
    regNo: "23AD102",
    department: "AI & Data Science",
    marks: {
      Java: 91,
      Python: 89,
      DBMS: 88,
      "Data Structures": 92,
      "Web Technology": 90
    }
  }
];

function Home() {
  return (
    <div className="home">
      <h1>Student Rank Card</h1>
      <p>View student academic performance and rank details.</p>

      <Link to="/rankcard" className="main-btn">
        View Rank Card
      </Link>
    </div>
  );
}

function RankCard() {
  const student = students[0];

  const marks = Object.values(student.marks);
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = (total / marks.length).toFixed(2);

  const getGrade = () => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    return "D";
  };

  return (
    <div className="rank-container">
      <div className="rank-card">

        <div className="college-header">
          <h1>PRINCE DR. K VASUDEVAN</h1>
          <h2>COLLEGE OF ENGINEERING AND TECHNOLOGY</h2>
          <p>Student Academic Rank Card</p>
        </div>

        <div className="student-details">
          <div>
            <strong>Name:</strong> {student.name}
          </div>

          <div>
            <strong>Register No:</strong> {student.regNo}
          </div>

          <div>
            <strong>Department:</strong> {student.department}
          </div>

          <div>
            <strong>Academic Year:</strong> 2026-2027
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(student.marks).map(
              ([subject, mark], index) => (
                <tr key={subject}>
                  <td>{index + 1}</td>
                  <td>{subject}</td>
                  <td>{mark}</td>
                  <td className="pass">PASS</td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <div className="result-section">

          <div className="result-box">
            <span>Total</span>
            <strong>{total} / 500</strong>
          </div>

          <div className="result-box">
            <span>Percentage</span>
            <strong>{percentage}%</strong>
          </div>

          <div className="result-box">
            <span>Grade</span>
            <strong>{getGrade()}</strong>
          </div>

          <div className="result-box rank">
            <span>Rank</span>
            <strong>#{student.rank}</strong>
          </div>

        </div>

        <div className="footer">
          <p>Congratulations on your achievement!</p>
        </div>

      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h1>About Rank Card</h1>

      <p>
        This Student Rank Card application is developed using
        React and React Router DOM.
      </p>

      <p>
        It displays student details, subject marks, total,
        percentage, grade and academic rank.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <nav>
        <h2>Rank Card</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/rankcard">Rank Card</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankcard" element={<RankCard />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;