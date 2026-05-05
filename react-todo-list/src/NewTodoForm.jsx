import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [item, setItem] = useState('');

  function handleAddItem(e) {
    e.preventDefault();
    if (item === '') return;

    onSubmit(item);
    setItem('');
  }

  return (
    <form className='new-item-form' onSubmit={handleAddItem}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
          type="text" 
          value={item} 
          onChange={e => setItem(e.target.value)} 
          id="item" 
        />
      </div>
      <button className='btn'>Add</button>
    </form>
  )
}