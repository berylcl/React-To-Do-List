import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasklist from './components/Tasklist';
import Footer from './components/Footer';
import AddTask from './components/AddTask';

function App() {
  const storedTasks = localStorage.getItem('tasks');

  let parsedTasks = [];
  try {
    parsedTasks = JSON.parse(storedTasks) || [];
  } catch (error) {
    // Handle the error gracefully, e.g., show a notification to the user
  }

  const [tasks, setTasks] = useState(parsedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <Tasklist tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
