import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import ToDo from './components/ToDo';
import noTasksGif from './components/pulp-fiction-john-travolta.gif';

function App() {
  // tasks toDo List
  const [toDo, setToDo] = useState([]);

  // fetch the initial tasks from the API
  useEffect(() => {
    fetchTasks();
  }, []);

// fetch tasks from the API
const fetchTasks = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
      const limitedTasks = data.splice(0, 10);
      setToDo(limitedTasks);
    })
    .catch((error) => console.log(error));
};

  // add task function
  const addTask = (newTaskTitle) => {
    if (newTaskTitle) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        completed: false,
      };

      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setToDo([...toDo, data]);
        })
        .catch((error) => console.log(error));
    }
  };

  // delete task function
  const deleteTask = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedTasks = toDo.filter((task) => task.id !== id);
        setToDo(updatedTasks);
      })
      .catch((error) => console.log(error));
  };

  // mark task as completed
  const markDone = (id) => {
    const updatedTasks = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTasks.find((task) => task.id === id)),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        setToDo(updatedTasks);
      })
      .catch((error) => console.log(error));
  };

  // delete all tasks function
  const deleteAllTasks = () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'DELETE',
    })
      .then(() => {
        setToDo([]);
      })
      .catch((error) => console.log(error));
  };

  // Display the To-do App
  return (
    <div className="container App">
      <h2>ToDos with React</h2>

      {/* add task */}
      <AddTaskForm addTask={addTask} />

      {/* display no tasks */}
      {toDo.length === 0 && (
        <div>
          <p>There are no tasks...</p>
          <img src={noTasksGif} alt="No tasks GIF" />
        </div>
      )}

      {/* To Do tasks */}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        deleteTask={deleteTask}
        deleteAllTasks={deleteAllTasks}
      />
    </div>
  );
}

export default App;
