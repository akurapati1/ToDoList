import './CSS/Todo.css';
import {useState} from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import TodoItems from './TodoItems';

let count=0;
let noCount=0;
const Todo = () => {
  const [todos, setTodos]=useState([]);
  const inputRef=useRef(null);
  
  const add=()=>{
    if(inputRef.current.value.length<3){
      alert("You just entered "+inputRef.current.value.length+" characters. Please enter atleast 3 Characters to add a task");
    }
    else{
      let data=JSON.parse(localStorage.getItem("todos"));
      setTodos([...todos, {no:noCount, text: inputRef.current.value, display: ""}]);
      noCount++;
      inputRef.current.value="";
      localStorage.setItem("todos_count", data.length+1);
    }
    
  }

  useEffect(()=>{
    
    setTimeout(()=>{
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));

    },100)
  },[todos]) 

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count=localStorage.getItem("todos_count");
  },[])
  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text"    placeholder="Type Your Task Here" className="todo-input"/>
            <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
            {todos.map((item, index)=>{
              return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
            })}
        </div> 
    </div>
  )
}

export default Todo
