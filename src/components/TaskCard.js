import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskCard = ({ task, handleDelete, handleEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleStartEdit = () => {
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    handleEdit(task.id, editedTaskName);
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedTaskName(task.name);
  };

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>
      {editMode ? (
        <>
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
            onKeyDown={handleEditKeyDown}
          />
          <button onClick={handleSaveEdit} type="button">
            Save
          </button>
          <button onClick={handleCancelEdit} type="button">
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>
            {task.id}
            {' '}
            -
            {task.name}
          </span>
          <div className="icons">
            <button
              className="bi bi-pencil"
              onClick={handleStartEdit}
              type="button"
              aria-label="Edit"
            />
            <button
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
              type="button"
              aria-label="Delete"
            />
          </div>
        </>
      )}
    </li>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default TaskCard;
