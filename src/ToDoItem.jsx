import React, { useState } from "react";



function ToDoItem(props){

    const [isDone, setIsDone] = useState(false);


    function handleClick(){
        setIsDone(prevValue => {
            return !prevValue;
         });
    }
    
    function deleteItem(){
            const newItems = props.items.filter((ele, index) => index !== props.id); 
            props.setItems(newItems);
            //return newItems;   
        }
       
   
    return ( 
        <div className="listRow">
           
                <li style={{textDecoration: isDone ? 'line-through' : "none" }}>{props.text}</li>
           
        
            <div className="allButtons"> 
                <button className="button2" onClick={handleClick}>
                    <span>Mark/Unmark</span>
                </button>

                <button className="button3" onClick={deleteItem}>
                    <span>Delete</span>
                    
                 </button>

                
            </div>
           

        </div>
    );
}



export default ToDoItem;