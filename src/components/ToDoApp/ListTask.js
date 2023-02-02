import React, { useState } from "react";
import { FaEdit } from 'react-icons/fa';
const ListTask = ({task ,removeTask,editTask ,index}) => {
  const[toggle,usetoggle]=useState(0)
  const complete=()=>{
    usetoggle(toggle+1)
  }
  return (
    < >
      <div className="list-tasks">
      <div  className={toggle%2===1 ? "strike" : ""} >
      <p onClick={()=>complete()}>{task.title}</p>
       </div>
            
           <button  onClick={()=> editTask(index)} className="edit-btn"><FaEdit/></button>
           <button onClick={()=>removeTask(index)} className="delete-btn">Delete</button>
      
      </div>
    </>
  );
};

export default ListTask;
