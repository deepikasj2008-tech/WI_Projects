
import React, { useState } from "react";

function App() {
  const [student] = useState({
    name: "Deepika S",
    registerNo: "23AIDS001"
  });

  const [subjects, setSubjects] = useState([
    { name: "Java", total: 30, present: 25 },
    { name: "Python", total: 30, present: 27 },
    { name: "DBMS", total: 30, present: 22 },
    { name: "React", total: 30, present: 26 },
    { name: "Data Structures", total: 30, present: 24 }
  ]);

  const markPresent = (index) => {
    const updated = [...subjects];
    updated[index].total += 1;
    updated[index].present += 1;
    setSubjects(updated);
  };

  const markAbsent = (index) => {
    const updated = [...subjects];
    updated[index].total += 1;
    setSubjects(updated);
  };

  const percentage = (present, total) => {
    return total === 0 ? 0 : ((present / total) * 100).toFixed(2);
  };

  return (
    <div>
      <h1>College Attendance Tracker</h1>

      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Register No: {student.registerNo}</p>

      <table border="1">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Total Classes</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Percentage</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((subject, index) => {
            const absent = subject.total - subject.present;
            const percent = percentage(subject.present, subject.total);

            return (
              <tr key={index}>
                <td>{subject.name}</td>
                <td>{subject.total}</td>
                <td>{subject.present}</td>
                <td>{absent}</td>
                <td>{percent}%</td>

                <td>
                  <button onClick={() => markPresent(index)}>
                    Present
                  </button>

                  <button onClick={() => markAbsent(index)}>
                    Absent
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Attendance Status</h2>

      {subjects.map((subject, index) => {
        const percent = percentage(subject.present, subject.total);

        return (
          <p key={index}>
            {subject.name}:{" "}
            {percent >= 75 ? "Eligible" : "Not Eligible"}
          </p>
        );
      })}
    </div>
  );
}

export default App;

