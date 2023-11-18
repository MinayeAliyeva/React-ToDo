import { uid } from "uid";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editTodo, setEditTodo] = useState("");
  const addEditToDo = (e) => {
    e.preventDefault();
    if (editMode) {
      const updatedData = [...toDos];
      updatedData[editIndex] = editTodo;
      setToDos(updatedData);
      setEditIndex(null);
      setEditMode(false);
    } else {
      setToDos([...toDos, todo]);
    }
    setTodo("");
  };

  const updateData = (task, index) => {
    setEditMode(true);
    setEditIndex(index);
    setEditTodo(task);
  };
  return (
    <>
      <h1>ToDo app</h1>
      <form>
        <input
          value={editMode ? editTodo : todo}
          onChange={(e) =>
            editMode ? setEditTodo(e.target.value) : setTodo(e.target.value)
          }
        />
        <button onClick={addEditToDo}>Add</button>
      </form>
      <div>
        <h3>Lists</h3>
        {toDos.map((task, index) => {
          return (
            <div key={index}>
              {task}
              <button>delete</button>
              <button onClick={() => updateData(task, index)}>update</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
