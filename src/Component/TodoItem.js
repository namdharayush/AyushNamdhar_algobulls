import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Reducer/Todoreducer";
import { toast } from "react-hot-toast";
import TodoModel from "../TodoModel";
import { Table } from "antd";
import "antd/dist/antd.min.js.map";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [UpdatemodelOpen, setUpdateModelOpen] = useState(false);
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete ?")) {
      dispatch(deleteTodo(todo.id));
      toast.success("Todo Delete Successfully");
    }
  };
  const handleUpdate = () => {
    setUpdateModelOpen(true);
  };
  return (
    <>
      <div
        className={`item ${
          todo.status === "complete" ? "todoComplete" : "todoPending"
        }`}
      >
        <div className="todoDetails">
          <div className={`texts `}>
            <p ><span style={{ fontWeight: "1000" }}>Title : </span>{todo.title}</p>
            <p><span style={{ fontWeight: "1000" }}>Discription : </span>{todo.discription}</p>
            <p><span style={{ fontWeight: "1000" }}>Status : </span> {todo.status}</p>
            <p><span style={{ fontWeight: "1000" }}>Time : </span>{todo.time}</p>
          </div>
        </div>
        <div className="todoActions">
          <div className={`icon ${
          todo.status === "complete" ? "todoCompleteicon" : "todoPendingicon"
        }`} onClick={handleDelete}>
            <MdDelete />
          </div>
          <div className={`icon ${
          todo.status === "complete" ? "todoCompleteicon" : "todoPendingicon"
        }`} onClick={handleUpdate}>
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModel
        type="update"
        todo={todo}
        modelOpen={UpdatemodelOpen}
        setModelOpen={setUpdateModelOpen}
      />
    </>
  );
};

export default TodoItem;
