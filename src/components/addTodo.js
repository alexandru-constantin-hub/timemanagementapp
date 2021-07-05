import React from "react";
import Button from '@material-ui/core/Button';


function AddTodo({ addTodo }) {
    const [taskText, setTaskText] = React.useState("");
    const [taskType, setTaskType] = React.useState("");
   
   

    const handleSubmit = e => {
     e.preventDefault();
     if(taskType!=="error") {
     addTodo(taskText, taskType)
     };
     setTaskText("");
     setTaskType(""); 
    };

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        
        type="text"
        name="text"
        id={taskText}
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
     
     <select id={taskType} value={taskType} onChange={(e) => (setTaskType(e.target.value))}>
            <option value="error">Please select the type</option>
            <option value="IU">Important and Urgent</option>
            <option value="NIU">Non Important and Urgent</option>
            <option value="INU">Important and Non Urgent</option>
            <option value="NINU">Non Important and Non Urgent</option>
      </select>
        
   
      

       <Button type="sumit">Add task</Button>
    </form>
        

  
  )
}

export default AddTodo;
