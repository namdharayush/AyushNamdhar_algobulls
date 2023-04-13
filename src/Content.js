import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './Component/TodoItem';
import {Table} from 'antd'


const Content = () => {
    const todoList = useSelector((state) => state.todo.todoList);
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a,b) => new Date(b.time) - new Date(a.time));
    const filterStatus = useSelector((state) => state.todo.filterStatus)

    const filterTodoList = sortedTodoList.filter(item => {
        if(filterStatus === 'all'){
            return true;
        }
        return item.status === filterStatus;
    })

    const [search, setSearch] = useState('');

    return (
        <div>
        <div className="div">
                <input
                  type="text"
                  placeholder="Search ..."
                  value={search}
                  onChange={(e) => {setSearch(e.target.value)}}
                //   onKeyUp={handleRemove}
                  
                />
              </div>
            {
                filterTodoList && filterTodoList.length>0 ? filterTodoList.filter((value) => {
                    if(search == ""){
                        return value
                    }
                    else if(value.title.toLowerCase().includes(search.toLowerCase())){
                        return value
                    }
                })
                .map((e)=> 
                    <>
                    
                    <TodoItem key={e.id} todo={e}></TodoItem>
                    </>
                ) 
                : <h4  style={{
                    textAlign:"center",
                    marginTop : "30px"                 
                }}>No Todo Found</h4>
            }
        </div>
    );
}

export default Content;
