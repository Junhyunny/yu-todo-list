import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState<string>("")
  const [todoList, setTodoList] = useState<string[]>([])
  const onClickAddList = () => {
    setTodoList([...todoList, text])
  }
  const onClickDelete = (index: number) => {
    const newTodos = [...todoList]
    newTodos.splice(index, 1)
    setTodoList(newTodos)
  }

  return (
      <div className="App">
        <header>TodoList</header>
        <div>
          <input
              onChange={(element) => setText(element.target.value)}
              type="text"
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
  );
}

export default App;
