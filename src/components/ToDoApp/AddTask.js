// import { Alert } from 'react-bootstrap'

import React, {  useEffect, useRef, useState } from 'react'
const AddTask = ({addTask,a}) => {
     
    const inputRef =useRef(null)
    
    const [values,addvalue]=useState("")
    const additem=()=>{
      
       if (values !== '') {
        addTask(values) 
        addvalue('')
       } 

        
    } 
 
    const changevalue=(e)=>{
 
      if (a!=='') {
        addvalue(a)
       }else{
        addvalue(e)
       }  
   }
   useEffect(()=>{
    inputRef.current.focus()
   })
    
  return (
    <div className='input-container'>
      
        <input ref={inputRef} type="text"  className='input'
         placeholder='Add a new Task'
        //  value={values} 
         value={a===''?values:a }
         
         onChange={(e)=>{changevalue(e.target.value)}}  />
         
        <button onClick={additem} className='add-btn' type="">ADD</button>  
        
    </div>
  )
  
}

export default AddTask