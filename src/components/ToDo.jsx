import React from 'react';

const ToDo = ({ toDo, markDone, deleteTask, deleteAllTasks }) => {
  return (
    <>
      {toDo.map((task, index) => (
        <div className="col taskBackG" key={task.id}>
          <div className={task.completed ? 'done' : ''}>
            <span className="taskNumber">{index + 1}</span>
            <span className="taskText">{task.title}</span>
          </div>

          {/* Iconos */}
          <div className="icons">
            <span title="Completed" onClick={() => markDone(task.id)}>
              <i className="lni lni-checkmark-circle"></i>
            </span>
            <span title="Delete" onClick={() => deleteTask(task.id)}>
              <i className="lni lni-trash-can"></i>
            </span>
          </div>
        </div>
      ))}

      {toDo.length > 0 && (
        <div className="col">
          <button onClick={deleteAllTasks} className="btn btn-danger">
            Clean all tasks
          </button>
        </div>
      )}
    </>
  );
};

export default ToDo;
