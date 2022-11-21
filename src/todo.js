import { useState } from "react";

function App(){

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const valueSet = (event) => {
        setTodo(event.target.value);
        //console.log(event.target.value);
    }
    const formSuBmit = (event)=>{
        event.preventDefault();
        console.log(todo);
        if(todo === ""){
            return;
        }
        setTodo("");
        setTodos((currentArray) => [...currentArray, todo]);
        //todo는 새로운 todo array 객체를, ...currentArray는 todos는 기존 array를 반환한다.
        // [todo, todos] 는 [todo, array](배열 안의 배열)를 반환하지만, 배열 앞에 ...를 써 주면 기존 배열에 새로운 배열을 합친다. vjs의 push() 기능.
        console.log(todos);
    }
    
    return (
        <div>
            <form onSubmit={formSuBmit}>
                <h1>What I Have To Do {todos.length}</h1>
                <input onChange={valueSet} value={todo} type="text" placeholder="Write your to do..."/>
                <button type="button">Add To Do</button>
            </form>
            <hr/>
            <ul>
                {todos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default App;