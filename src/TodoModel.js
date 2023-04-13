import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "./Reducer/Todoreducer";
import {v4 as uuid} from 'uuid'
import { toast } from "react-hot-toast";

const TodoModel = ({type , modelOpen , setModelOpen , todo}) => {

    const [title , setTitle] = useState("")
    const [discription, setDiscription] = useState("")
    const [status , setStatus] = useState("incomplete")
    const dispatch = useDispatch()

    useEffect(()=>{
        if(type === 'update'  && todo){
            setTitle(todo.title)
            setStatus(todo.status)
            setDiscription(todo.discription)
        }
        else{
            setTitle('')
            setDiscription('')
            setStatus('incomplete')
        }
    } ,[todo,type ,modelOpen]);

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        if(title && status && discription) {
            if(type === 'add' && title.length <= 100 && discription.length <= 1000 ){

                dispatch(addTodo({
                    id : uuid(),
                    title,
                    status,
                    discription,
                    time : new Date().toLocaleString()  
                }));
                toast.success('Task added successfully')
                setModelOpen(false)
            }
            else if(title.length > 100 && discription.length > 1000){
              toast.error("Max lenght Exceed")
            }
            else if(type === 'update'){
                if(todo.title !== title || todo.discription !==discription || todo.status !== status){
                    dispatch(updateTodo({
                        ...todo,
                        title,
                        discription,
                        status,
                    }))
                    setModelOpen(false)
                }
                else{
                    toast.error("No  Changes")
                }
            }
        }
        else if(title === ""){
            toast.error('Title Should Not Empty')
        }
        else if(discription === ""){
          toast.error('Discription Should Not Empty')
        }
        
    }

  return (
    <>
    {modelOpen && (<div className="wrapper">
      <div className="todo_container">
        <div className="closeButton">
          <MdOutlineClose 
            onClick={()=>setModelOpen(false)}
            tabIndex={0}
            role="button"
           />
        </div>
        <form className="form" onSubmit={(e)=>handleSubmit(e)}>
          <h4 className="formTitle">{type === 'update' ? 'Update' : 'Add'} Task</h4>
          <label htmlFor="title">
            Title
            <input id="title" type="text"  value={title
            } onChange={(e)=>setTitle(e.target.value)} />
          </label>
          <label htmlFor="discription">
            Discription
            <textarea rows={5} cols={32} style={{width:"100%"}} id="discription" value={discription} onChange={(e)=>setDiscription(e.target.value)} />
            
          </label>
          <label htmlFor="status">
            Status
            <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </label>
          <div className="buttonContainer">
            <Button type="submit">{type === 'update' ? 'Update' : 'Add'} Task</Button>
            <Button type="button" 
            onClick={()=>setModelOpen(false)}
            tabIndex={0} 
            role="button">Cancel</Button>
          </div>
        </form>
      </div>
    </div>)}
    
    </>
  );
};

export default TodoModel;
