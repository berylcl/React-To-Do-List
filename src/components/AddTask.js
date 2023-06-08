import './AddTask.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState('');
  const [taskStatus, setTaskStatus] = useState('pending');

  const handleInput = (event) => {
    setTaskValue(event.target.value);
    setTaskStatus('pending');
  };

  const handleStatusChange = (event) => {
    setTaskStatus(event.target.value);
  };

  const handleReset = () => {
    setTaskValue('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: taskStatus === 'completed',
    };

    setTasks([...tasks, newTask]);
    handleReset();
  };

  return (
    <section className="addtask">
      <p>{taskValue}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          id="task"
          name="task"
          placeholder="Enter your task"
          autoComplete="off"
          value={taskValue}
        />
        <select
          id="status"
          name="status"
          value={taskStatus}
          onChange={handleStatusChange}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};

AddTask.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default AddTask;
