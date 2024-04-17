import { useState } from "react"
import useDispatchContext from "../../context/TodoDispatchContext"

function AddTodo(){
    const[inputText,setInputText] = useState('')
    const {dispatch} = useDispatchContext()
    return(
        <form onSubmit={(e) => e.preventDefault()}>
        <input type="text"
        placeholder="add your todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={() =>(
            inputText&&dispatch({type: 'add_todo', payload: {todoText: inputText}}),
            setInputText('')
        )}>Add</button>
        </form>
    )
}
export default AddTodo