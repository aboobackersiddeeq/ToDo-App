import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import "./Todo.css";
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [evalue,setevalue]=useState('')
  const [id,setid]=useState('')
  useEffect(()=>{
    document.title=`You have ${tasks.length} pending task(s)`
  });
  const addTask=(title)=>{
    const newTask=[...tasks,{title}]
    setTasks(newTask)
  }
  const update=(title)=>{
    if (title==='' || /^\s*$/.test(title)) {
    }else{
      const obj={
        title :title
      }
      const task=[...tasks]
      task.splice(id,1,obj);
      setTasks(task)
    }
   
    setevalue('')
  };

  const removeTask=(index)=>{
    const task=[...tasks]
    task.splice(index,1);
    setTasks(task)
  }
  const editTask=(index)=>{
    const task=[...tasks] 
    const evalue=task[index].title
     setevalue(evalue) 
     setid(index)
    // setTimeout(() => {
    //   setevalue('')
    // }, 2000);
  }
  
  return (
    <> 
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
          <AddTask addTask={addTask}  evalue={evalue} update={update} />
        </div>
        <div className="tasks">
          {tasks.map((task,index) => (
            <ListTask task={task} removeTask={removeTask} editTask={editTask}
            index={index}  key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
