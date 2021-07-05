import React from "react";

import ListItemText from '@material-ui/core/ListItemText';


function Todo(props) {
  

  return (
    
    
        <ListItemText>
            {props.index}{props.text}
        </ListItemText>
        

  
  );
}

export default Todo;
