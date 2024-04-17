import { createContext, useContext } from "react";

export const TodoDispatchContext = createContext(null)

export const DispatchProvider = TodoDispatchContext.Provider

function useDispatchContext(){
    return useContext(TodoDispatchContext)
}
export default useDispatchContext