
import './App.css';
import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Todo from './components/todo';
import AddTodo from './components/addTodo';

let data = [
];



function App() {
 
  const [todos, setTodos] = useState(data);
  
  const addTodo = (text, type) => {
    const addIndex = todos.length;
    const newTodos = [...todos, { index: addIndex, text, type, completed:"false" }];
    setTodos(newTodos);
    console.log(newTodos);
  };


  const complete = index => {
    const newTodos = [...todos];
    newTodos[index].completed = "true";
    setTodos(newTodos);
  };

  const deleteCompleted = index => {
    const newTodos = [...todos];
    console.log(newTodos)
    newTodos.splice(index,1);
    setTodos(newTodos);
    console.log(newTodos)
  };


  const filterIU = todos.filter(todo => (todo.completed==="false" && todo.type==="IU"));
  const filterNIU = todos.filter(todo => (todo.completed==="false" && todo.type==="NIU"));
  const filterINU = todos.filter(todo => (todo.completed==="false" && todo.type==="INU"));
  const filterNINU = todos.filter(todo => (todo.completed==="false" && todo.type==="NINU"));
  const filterCompleted = todos.filter(todo => todo.completed==="true");


 
  
  

  return (
    
    
    <div className="App">
      <Container maxWidth="md">
        <Grid>
          <AddTodo addTodo={addTodo} />
        </Grid>
        <Grid container spacing={3}>
       
          <Grid item sm={12} md={6}>
            <h2>Important and urgent</h2>
            <List>
            {filterIU.map((filteredTodo, index)=>(
              <ListItem>
                <Todo  key={index} index={filteredTodo.index} text={filteredTodo.text} type={filteredTodo.type} completed={filteredTodo.completed} />
                <Button color="primary" onClick={()=>complete(filteredTodo.index)}>Complete</Button>
              </ListItem>
            ))}
            </List>
          </Grid>
          <Grid item sm={12} md={6}>
            <h2>Non Important and Urgent</h2>
            {filterNIU.map((filteredTodo, index)=>(
              <ListItem>  
                <Todo index={index} text={filteredTodo.text} type={filteredTodo.type} completed={filteredTodo.completed} />
                <Button color="primary" onClick={()=>complete(filteredTodo.index)}>Complete</Button>
              </ListItem>
            ))}
          </Grid>
          <Grid item sm={12} md={6}>
            <h2>Important and Non Urgent</h2>
            {filterINU.map((filteredTodo, index)=>(
              <ListItem>  
                <Todo index={index} text={filteredTodo.text} type={filteredTodo.type} completed={filteredTodo.completed} />
                <Button color="primary" onClick={()=>complete(filteredTodo.index)}>Complete</Button>
              </ListItem>
            ))}
          </Grid>
          <Grid item sm={12} md={6}>
            <h2>Non Important and Non Urgent</h2>
            {filterNINU.map((filteredTodo, index)=>(
              <ListItem>  
                <Todo index={index} text={filteredTodo.text} type={filteredTodo.type} completed={filteredTodo.completed} />
                <Button color="primary" onClick={()=>complete(filteredTodo.index)}>Complete</Button>
              </ListItem>
            ))}
          </Grid>
          <Grid item md={6}>
            <h2>Completed tasks</h2>
            {filterCompleted.map((filteredTodo, index)=>(
            <ListItem>
              <Todo index={index} text={filteredTodo.text} type={filteredTodo.type} completed={filteredTodo.completed} />
               <Button color="primary" onClick={()=>deleteCompleted(filteredTodo.index)}>{filteredTodo.completed ==="false"? "Complete": "Delete"}</Button>
            </ListItem>
            ))}
          </Grid>
          
        </Grid>
      </Container>
      
      
    </div>
  );
}

export default App;
