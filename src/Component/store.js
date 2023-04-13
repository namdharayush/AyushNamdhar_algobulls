 import { configureStore } from "@reduxjs/toolkit";
 import todoReducer from "../Reducer/Todoreducer";

 export const store = configureStore({
    reducer : {
        todo : todoReducer , 
    }
 })