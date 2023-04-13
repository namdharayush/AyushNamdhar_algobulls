import React, { useState } from "react";
import TodoModel from "./TodoModel";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "./Reducer/Todoreducer";

const Header = () => {

    const [modelOpen  , setModelOpen] = useState(false)
    const filterStatus = useSelector((state) => state.todo.filterStatus)
    const dispatch = useDispatch()

    const buttonClick =() =>{
        setModelOpen(true)
    }

    const updateFilter = (e) =>{
        
        dispatch(updateFilterStatus(e.target.value))
    }

  return (
    <div>
      <div className="d-flex justify-content-between ms-5 me-5">
        <Button type="submit" onClick={buttonClick} >Add Task</Button>
        <select id="status" value={filterStatus} onChange={updateFilter}>
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
      </div>
      <TodoModel type='add' modelOpen={modelOpen} setModelOpen = {setModelOpen} />
    </div>
  );
};

export default Header;
