import React, { useState } from "react";



function ToDoItem(props){

    const [isDone, setIsDone] = useState(false);
    function handleClick(){
        setIsDone((prevValue) => {
            return !prevValue;
         });
    }
    



    <div onClick={handleClick}>
    return <li style={{textDecoration: isDone ? 'line-through' : "none" }}>{props.text}</li>;
    </div>
}



export default ToDoItem;