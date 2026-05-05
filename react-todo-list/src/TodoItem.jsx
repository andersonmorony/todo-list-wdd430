export function TodoItem({completed, id, title, toggleItemCompleted, deleteTodo}) {
    return <li>
            <label>
              <input type="checkbox" 
              onChange={e => toggleItemCompleted(id)} checked={completed} />
              {title}
            </label>
            <button onClick={() => deleteTodo(id)} type="button">Delete</button>
          </li>
}