import './TodoItem.css';

export function TodoItem({completed, id, title, toggleItemCompleted, deleteTodo}) {
    return <li className={`todo-item ${completed ? 'completed' : ''}`}>
            <label>
              <input type="checkbox" 
              onChange={e => toggleItemCompleted(id)} checked={completed} />
              <span className="todo-title">{title}</span>
            </label>
            <button className="delete-btn" onClick={() => deleteTodo(id)} type="button">Delete</button>
          </li>
}