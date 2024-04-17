import { createContext, useContext } from "react";

export const TodoContext = createContext(null)

export const TodoProv = TodoContext.Provider

export default function useTodoList(){
    return useContext(TodoContext)
}