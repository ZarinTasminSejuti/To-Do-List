import React, { useState } from "react";


function List() {

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInput(newValue);
    }


    function addItem(){
        setItems( (prevItems) => {
            return [...prevItems, input];
        });
        setInput("");
    }

    return (
      <div className="container">
        <div className="header">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input onChange={handleChange} type="text" value={input} />
            <button onClick={addItem}>
                <span>Add</span>
            </button>
        </div>

        <div>
            <ul>
                {items.map(todoItem => <li>{todoItem}</li> )}
            </ul>
        </div>
      </div>
    );
  }
  
  export default List;
  