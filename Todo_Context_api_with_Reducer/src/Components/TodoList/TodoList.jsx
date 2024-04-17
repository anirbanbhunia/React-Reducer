import useTodoList from "../../context/TodoContext"
import useDispatchContext from "../../context/TodoDispatchContext"
import Todo from "../Todo/Todo"
import React from "react"

function TodoList(){
      const {list} = useTodoList()
      const {dispatch} = useDispatchContext()

      function onFinished(chekedVal,e){
        dispatch({type:"finished_todo",payload:{checkVal:chekedVal,todo:e}})
      }
      function onDelete(e){
        dispatch({type:'delete_todo', payload:{todo:e}})
      }
      function onEdit(todotext,e){
        dispatch({type: 'edit_todo' ,payload:{todo:e,todoText:todotext}})
      }

    return(
        <div>
            {list.length > 0 && list.map(e => <Todo key={e.id} todoData={e.todoData} isFinished={e.finished} id={e.id} changeFinished={(chekedVal) => onFinished(chekedVal,e)}
        onDelete = {() => onDelete(e)}
        onEdit = {(todotext) => onEdit(todotext,e)}
        />
        )}
        </div>
    )
}
export default TodoList