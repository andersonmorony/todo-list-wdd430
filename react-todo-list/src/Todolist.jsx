import { TodoItem } from './TodoItem';

export function Todolist({todoList, toggleItemCompleted, deleteTodo}) {
    return <>
     <h1>Todo List</h1>

      <ul className='list'>
        {todoList.length === 0 && <p>No items</p>}
        {todoList.map(item => {
          return <TodoItem 
          key={item.id} 
          {...item} 
          toggleItemCompleted={toggleItemCompleted} 
          deleteTodo={deleteTodo} />
        })}
      </ul>
    </>
}