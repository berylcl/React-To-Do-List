import React from 'react';
import PropTypes from 'prop-types';
import TaskCard from './TaskCard';

const Tasklist = ({ tasks, setTasks }) => {
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id, editedTaskName) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          name: editedTaskName,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const [show, setShow] = React.useState(false);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        <button
          className="trigger"
          onClick={() => setShow(!show)}
          type="button"
        >
          {show ? 'Hide Tasks' : 'Show Tasks'}
        </button>
        {show
              && tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
      </ul>
    </div>
  );
};

Tasklist.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Tasklist;
