import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [text, setText] = useState<string>("")
  const [todoList, setTodoList] = useState<string[]>([])
  const [typing, setTyping] = useState<boolean>(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !typing) {
      onClickAddList();
    }
  }

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/todos';

    axios.get(apiUrl)
        .then(response => {
          setTodoList(response.data)
        })
        .catch(error => {
          console.error('error todos:', error);
        })
  }, []);


  return (
      <div className="App">
        <header>TodoList</header>
        <div>
          <input
              value={text}
              onChange={handleChange}
              type="text"
              onCompositionStart={() => setTyping(true)}
              onCompositionEnd={() => setTyping(false)}
              onKeyDown={handleKeyDown}
          />
          <button onClick={onClickAddList}>Add to List</button>
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
