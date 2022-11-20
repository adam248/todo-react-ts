import React, { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const CHECK = "✔️"
const TRASH = "🗑️"
const PEN = "🖊️"

function App() {

  // Tasks (Todo List) State

  const [toDo, setToDo] = useState([
    {"id": 1, "title": "Task 1", "status": true},
    {"id": 2, "title": "Task 2", "status": false}
  ]);
  
  // Temp State
  const [newTask, setNewTask] = useState('');
  const [changedTask, setChangedTask] = useState('');

  // Add Task
  const addTask = () => {
    //
  }
  // Delete Task
  const deleteTask = () => {
    //
  }
  // Marktask as done or completed
  const markDone = () => {
    //
  }
  // Cancel update
  const cancelUpdate = () => {
    //
  }
  // Change Task
  const changeTask = () => {
    //
  }
  // Update task
  const updateTask = () => {
    //
  }

  return (
    <div className="container App">
      <br></br>
      <h2>To Do List App</h2>
      <br></br>
    {/* Update Task*/}
    <div className="row">
      <div className="col">
        <input className="form-control form-control-lg"/>
      </div>
      <div className="col-auto">
        <button className="btn btn-lg btn-success">Update Task</button>
        <button className="btn btn-lg btn-warning">Cancel</button>
      </div>
    </div>


    {/* Add Task*/}
    <div className="row">
      <div className="col">
        <input className="form-control form-control-lg"/>
      </div>
      <div className="col-auto">
        <button className="btn btn-lg btn-success">Add Task</button>
      </div>
    </div>
<br />
    {/* Display ToDos*/}
    {toDo && toDo.length ? '' : 'No Tasks...'}

    {toDo && toDo
    .sort((a, b) => a.id > b.id ? 1 : -1)
    .map((task, index) => {
      return (
      <React.Fragment key={task.id}>
        <div className="col taskBg">
          <div className={task.status ? 'done' : ''}>
            <span className="taskNumber">{task.id}</span>
            <span className="taskText">{task.title}</span>
          </div>
          <div className="iconsWrap">
            <span title="Completed / Not Completed">
              {CHECK}
            </span>
            <span title="Edit">
              {PEN}
            </span>
            <span title="Delete">{TRASH}</span>
          </div>
        </div>
       </React.Fragment> 
        )
    })}
    </div>
 );
}

export default App;
