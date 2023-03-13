import React, { useState } from "react";
import ToDoItem from "./ToDoItem";


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

      <div className="container" style ={{backgroundImage: `url("note.png")`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover"
}}>

        <div className="header">
            <h1>To-Do List</h1>
        </div>

        <div className="formButton">
            <div className="form">
                <input onChange={handleChange} type="text" placeholder="Type Your Items Here..." value={input} />
            </div>

            <div>
                <button class="button1" onClick={addItem}>
                        <span>Add</span>
                </button>
            </div>
        </div>

        <div className="list">
            <ol>
                {items.map(todoItem => <ToDoItem text = {todoItem}/> )}
            </ol>
        </div>
        
      </div>
    );
  }
  
  export default List;
  