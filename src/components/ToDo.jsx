import React from "react";

const ToDo = ({ toDo, markDone, deleteTask }) => {
    return (
        <>
        {toDo && toDo.map( (task, index) => {
        
        return(
          
          
          <React.Fragment key={task.id}>

          <div className="col taskBackG">
            <div className={task.status ? 'done' : ''}>
              <span className="taskNumber">{index + 1}</span>
              <span className="taskText">{task.title}</span>
            </div>


            {/* Iconos */}
            
            <div className="icons">

              <span title="Completed"
              onClick={ (e) => markDone(task.id)}>
                <i class="lni lni-checkmark-circle"></i></span>
              <span title="Delete"
              onClick={() => deleteTask(task.id)}>
                <i class="lni lni-trash-can"></i></span>
            </div>
          </div>

          </React.Fragment>
        )
      })}
        </>
    )
}

export default ToDo;