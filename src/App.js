import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import AddTaskForm from './components/AddTaskForm.jsx'
import ToDo from './components/ToDo';
import noTasksGif  from './components/pulp-fiction-john-travolta.gif'

function App() {
  
  // tasks toDo List
  const [toDo, setTodo] = useState([
    {id: 1, title: "Example task 1", status: false},
    {id: 2, title: "Example task 2", status: false}
  ]);
  
  // temp state
  const [newTask, setNewTask] = useState('');
  
  // add task function
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false}
      setTodo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // delete task function
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setTodo(newTasks);
  }

  // mark task as completed
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return({...task, status: !task.status})
      }
      return task;
    })
    setTodo(newTask);
  }

  // Display the To-do App
  
  return (
    <div className="container App">

      <h2>To Do List with React</h2>
    
    {/* add task */}
    <AddTaskForm 
      newTask = {newTask}    
      setNewTask = {setNewTask}
      addTask = {addTask}
    />

    {/* display no tasks */}
      {toDo && toDo.length ? '' : 
      <div>
      <p>There are no tasks...</p>
      <img src={noTasksGif} alt="No tasks GIF" />
    </div>
      }

    {/* To Do tasks */}
      <ToDo
        toDo = {toDo}
        markDone = {markDone}
        deleteTask = {deleteTask}
      />

    </div>
  );
}

export default App;
