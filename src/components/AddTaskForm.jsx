import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={handleAddTask} className="btn btn-lg btn-success">
            Add task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
