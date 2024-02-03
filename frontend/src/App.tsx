import React, {FormEventHandler, useEffect, useState} from 'react';
import './App.css';

function App() {
    const [text, setText] = useState<string>("")
    const [todoList, setTodoList] = useState<string[]>([])
    const onClickAddList = () => {
        if (text.length !== 0) {
            setTodoList([...todoList, text])
            setText("")
        }
    }
    const onClickDelete = (index: number) => {
        const newTodos = [...todoList]
        newTodos.splice(index, 1)
        setTodoList(newTodos)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const handleSubmit: FormEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onClickAddList()
        event.preventDefault()
    }

    useEffect(() => {
        fetch("/todos")
            .then(response => response.json())
            .then(data => setTodoList(data))
    }, []);

    return (
        <div className="App">
            <header>TodoList</header>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        value={text}
                        onChange={handleChange}
                        type="text"
                    />
                    <button onClick={onClickAddList}>Add to List</button>
                </form>
                <ul>
                    {todoList.map((todo, index) => {
                        return (
                            <div key={index}>
                                <td>
                                    <li>{todo}</li>
                                </td>
                                <td>
                                    <button onClick={() => onClickDelete(index)}>Delete</button>
                                </td>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
        ;
}

export default App;
