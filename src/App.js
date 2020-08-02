import React,{useState} from "react";
import { Button ,Input,List,ListItemText,ListItem} from '@material-ui/core';


function App(){
    const [newtodo,setnewtodo]=useState('')
    const[todos,settodos]=useState([])

    function addtask(e){
      e.preventDefault()
      setnewtodo(e.target.value)
    }
  function addtodo(e){
    e.preventDefault()
      settodos([...todos,{id:Date.now(),text:newtodo}])
        setnewtodo('');
  }
    function del(id){
        settodos(todos.filter((it)=>it.id!==id))
    }
    return(
      <>
        <form onSubmit={addtodo}>
        <Input value={newtodo} type="text" onChange={addtask}/>
        <Button disabled={!newtodo} size="small" variant="contained"  type="submit" color='primary' >Add</Button>
        <List>
          {todos.map(todo=>(
            <ListItem key={todo.id}> <ListItemText primary="Todo" secondary={todo.text}/>
              <Button onClick={()=>del(todo.id)} size="small" color="secondary">Delete</Button>
            </ListItem>
            ))}
      </List>
        </form>
      </>  
  )}


export default App
