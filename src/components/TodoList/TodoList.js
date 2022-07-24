import cx from 'classnames';
import { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: '',
        };
    }

    render() {
        const { todos, newTodo } = this.state;

        return (
            <>
                <div>
                    <input
                        type='text'
                        placeholder='Add a todo'
                        value={newTodo}
                        onChange={(e) => this.setState({ newTodo: e.target.value })}
                    />
                    <button onClick={() => {
                        const newValue = newTodo.trim();
                        if (newValue) {
                            this.setState({
                                todos: [...todos, { value: newTodo, done: false }],
                                newTodo: '',
                            });
                        }
                    }}>Add</button>
                </div>

                <div className='task-counter'>
                    {todos.filter((item) => {
                        return !item.done;
                    }).length} remaining out of {todos.length} tasks
                </div>

                <ul>
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className={cx({
                                'is-done': todo.done,
                            })}
                            onClick={() => {
                                this.setState({
                                    todos: [...todos.slice(0, index), { ...todo, done: !todo.done }, ...todos.slice(index + 1)],
                                });
                            }}>{todo.value}</li>
                    ))}
                </ul>

                <style>{`
                    .task-counter {
                        font-size: 0.8rem;
                        margin-top: 1rem;
                    }
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}
