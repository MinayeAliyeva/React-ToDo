import { uid } from "uid";
import { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');
  const [checkedState, setCheckedState] = useState([]);

  const addList = (e) => {
    e.preventDefault();
    if (editMode) {
      const updatedTodos = [...toDos];
      updatedTodos[editIndex] = { text: editedTodo.trim(), checked: checkedState[editIndex] };
      setTodos(updatedTodos);
      setEditMode(false);
      setEditIndex(null);
      setEditedTodo('');
    } else {
      setTodos([...toDos, { text: newTodo.trim(), checked: false }]);
      setNewTodo('');
      setCheckedState([...checkedState, false]);
    }
  };
  const deleteTodo = (index) => {
    const afterDeleting = [...toDos];
    afterDeleting.splice(index, 1);
    setTodos(afterDeleting);
    const updatedCheckedState = [...checkedState];
    updatedCheckedState.splice(index, 1);
    setCheckedState(updatedCheckedState);
  };

  const startEdit = (index, todo) => {
    setEditMode(true);
    setEditIndex(index);
    setEditedTodo(todo.text);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = [...checkedState];
    updatedCheckedState[index] = !updatedCheckedState[index];
    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      <h1>ToDo App</h1>
      <div>
        <form>
          <input
            value={editMode ? editedTodo : newTodo}
            onChange={(e) => (editMode ? setEditedTodo(e.target.value) : setNewTodo(e.target.value))}
          />
          <button onClick={addList}>{editMode ? 'Kaydet' : 'Ekle'}</button>
        </form>

        <div>
          <ul>
            {toDos.map((todo, index) => (
              <div key={uid()}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedState[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <p style={{ textDecoration: checkedState[index] ? 'line-through' : 'none' }}>
                    {todo.text}
                  </p>
                </label>
                <button onClick={() => deleteTodo(index)}>Sil</button>
                <button onClick={() => startEdit(index, todo)}>Düzenle</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
