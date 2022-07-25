import { useState } from 'react';
import cx from 'classnames';

export default function TodoList2() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={() => {
          const v = newTodo.trim();
          if (v) {
            setTodos([...todos, { value: v, done: false }]);
            setNewTodo('');
          }
        }}>Add</button>
      </div>

      <div>{todos.filter((item) => !item.done).length} remaining out of {todos.length} tasks</div>

      <ul>{todos.map((item, index) => {
        return <li key={index}
          className={cx({
            'is-done': item.done,
          })}
          onClick={() => {
            const newTodos = [].concat(todos);
            newTodos[index].done = !newTodos[index].done;
            setTodos(newTodos);
          }}>{item.value}</li>
      })}</ul>

      <style>{`
        .is-done {
          text-decoration: line-through;
        }
      `}</style>
    </>
  );
}