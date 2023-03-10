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

      <div className="container" style ={{backgroundImage: `url("note.png")`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover"
}}>

        <div className="header">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
           
            <input onChange={handleChange} type="text" placeholder="Type Your Items Here..." value={input} />
            <button class="button1" onClick={addItem}>
                <span>Add</span>
            </button>
        </div>

        <div className="list">
            <ol>
                {items.map(todoItem => <li>{todoItem}</li> )}
            </ol>
        </div>
        
      </div>
    );
  }
  
  export default List;
  