import React,{ useReducer} from "react"
import AddTodo from "./Components/AddTodo/AddTodo"
import TodoList from "./Components/TodoList/TodoList"
import { TodoProv } from "./context/TodoContext"
import todoReducer from "./reducers/todoReducer"
import { DispatchProvider } from "./context/TodoDispatchContext"

function App() {
//   const [list,setList] = useState([
//     {id:1,todoData:"todo1",finished:false},
//     {id:2,todoData:"todo2",finished:true}
// ])

const [list,dispatch] = useReducer(todoReducer,[]) //this hook used for reducer

  return (
   <TodoProv value={{list}}>
    <DispatchProvider value={{dispatch}}>
      <div>
        <AddTodo/>
        <TodoList/>
      </div>
    </DispatchProvider>
   </TodoProv>
  )
}

export default App
