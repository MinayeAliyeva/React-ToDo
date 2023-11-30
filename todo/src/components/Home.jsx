import React, { useState } from "react";

const Home = () => {
  const initialState = {
    name: "",
    age: 0,
  };
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevs) => ({
      ...prevs,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Name</label>
      <input value={user.name} onChange={(e) => handleChange(e)} name="name" />
      <label>Age</label>
      <input
        value={user.age}
        onChange={(e) => handleChange(e)}
        name="age"
        type="number"
      />
      <button>Add</button>
    </form>
  );
};

export default Home;
