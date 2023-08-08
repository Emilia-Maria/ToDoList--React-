export function TodoItem({ completed, id, title, toggleTodo, deleteTodo}){
    return (
        <li>
          <label>
            <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}></input>
            {title}
          </label>
          {/* we write '() => deleteTodo' and not simply 'deleteTodo()' because the latter would call itself, instantly deleting the item; with the arrow we create a function 
          that has the return of deleteTodo when the event is triggered  */}
          <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}