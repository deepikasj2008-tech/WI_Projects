import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>To-Do List</h1>
      <p>Welcome to my React To-Do List application.</p>
      <Link to="/tasks" className="btn">
        Go to Tasks
      </Link>
    </div>
  );
}

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false
      }
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  return (
    <div className="page">
      <h1>My Tasks</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <div className="tasks">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((item) => (
            <div className="task" key={item.id}>
              <span
                className={item.completed ? "completed" : ""}
                onClick={() => completeTask(item.id)}
              >
                {item.text}
              </span>

              <button onClick={() => deleteTask(item.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About</h1>
      <p>
        This To-Do List application is created using React,
        React Router DOM and React Hooks.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h2>My To-Do App</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;