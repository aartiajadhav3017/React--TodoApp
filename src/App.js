import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./component/TodoInput";
import { useState } from "react";
import TodoList from "./component/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };

  const deleteItem = (key)=>{
    let newListTodo = listTodo.filter((_, index)=> index != key);
    setListTodo(newListTodo)
  }
  console.log(listTodo);
  return (
    <div className="App">
      <TodoInput addList={addList} />
      <h1 className="app-heading">TODO</h1>
      <hr></hr>
      {listTodo.map((itemList, index) => (
         <TodoList key={index} index={index} item={itemList} delete={deleteItem}/>
      ))}
    </div>
  );
}

export default App;
