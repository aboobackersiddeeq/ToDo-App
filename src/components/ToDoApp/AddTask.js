// import { Alert } from 'react-bootstrap'

import React, { useEffect, useRef, useState } from "react";
const AddTask = ({ addTask, evalue,update }) => {
  const inputRef = useRef(null);

  const [values, addvalue] = useState(evalue !== "" ? evalue : "");
  const additem = () => {
    if (!values || /^\s*$/.test(values)) {
      return;
    } else {
      addTask(values);
      addvalue("");
    }
  };
  const edititem = (e) => {
    e.preventDefault();
      update(values);
      addvalue("");
  };

  const changevalue = (e) => {
      addvalue(e);
  };
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value=evalue
  });

  return (
    <div className="input-container">
      {evalue === "" ? (
        <>
          <input
            ref={inputRef}
            type="text"
            className="input"
            placeholder="Add a new Task"
            //  value={values}
            value={values}
            onChange={(e) => {
              changevalue(e.target.value);
            }}
          />

          <button onClick={additem} className="add-btn" type="">
            ADD
          </button>
        </>
      ) : (
        <>
          <input
            ref={inputRef}
            type="text"
            className="input"
            placeholder="Update your item"
            //  value={values}
            value={values}
            onChange={(e) => {
              changevalue(e.target.value);
            }}
          />

          <button onClick={edititem} className="add-btn" type="">
            EDIT
          </button>
        </>
      )}
    </div>
  );
};

export default AddTask;
