import './CSS/TodoItems.css';
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

const TodoItems = ({no, display, text, setTodos}) => {
  const toggle=(no)=>{
    let data =JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="line-thorugh";
        }
        else{
          data[i].display="";
        }
        break;
      }
    }
    setTodos(data);

  }

  const deleteTodo =(no)=>{
    let data =JSON.parse(localStorage.getItem("todos"));
    data=data.filter((item)=>item.no!==no);
    localStorage.setItem("todos_count", data.length);
    setTodos(data);
  }
  return (
    <div className='todoitems'>
      <div className='todoitems-container' onClick={()=>{toggle(no)}}>
        {display===""?<img src={not_tick} alt=""/>:<img src={tick} alt=""/>}
        
        <div className="todoitems-text">{text}</div>
       </div>
       <img src={cross} onClick={()=>{deleteTodo(no)}} className="todoitems-crossIcon" alt=""/>
      
    </div>
  )
}

export default TodoItems
