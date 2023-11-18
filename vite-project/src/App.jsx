import { uid } from "uid";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editTodo, setEditTodo] = useState("");
  const [isCheckedList, setIsCheckedList] = useState(
    Array(toDos.length).fill(false)
  );
  
  const addEditToDo = (e) => {
    e.preventDefault();
    if (editMode) {
      const updatedData = [...toDos];
      updatedData[editIndex] = {
        text: editTodo,
        isChecked: isCheckedList[editIndex],
      };
      setToDos(updatedData);
      setEditIndex(null);
      setEditMode(false);
    } else {
      setToDos([...toDos, { text: todo, isChecked: false }]);
    }
    setTodo("");
    setIsCheckedList([...isCheckedList, false]);
  };

  const updateData = (task, index) => {
    setEditMode(true);
    setEditIndex(index);
    setEditTodo(task.text);
  };
  const deleteData = (index) => {
    const afterDeleting = [...toDos];
    afterDeleting.splice(index, 1);
    setToDos(afterDeleting);
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
              <input
                type="checkbox"
                checked={isCheckedList[index]}
                onChange={() => {
                  const updatedIsCheckedList = [...isCheckedList];
                  updatedIsCheckedList[index] = !isCheckedList[index];
                  setIsCheckedList(updatedIsCheckedList);
                }}
              />
              <span
                style={{
                  textDecoration: isCheckedList[index] ? "line-through" : "",
                }}
              >
                {task.text}
              </span>

              <button onClick={() => deleteData(index)}>delete</button>
              <button onClick={() => updateData(task, index)}>update</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
