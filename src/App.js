import {BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom";//순서대로 router 형식 선언(hashrouter도 있음. 단 #이 항상 붙는다.) as 컴포넌트 렌더링, route별로 렌더링, 컴포넌트 렌더링?
import Home from './routes/Home';
import Detail from './routes/Detail';

function App(){
    return(
        <div>테스트</div>
    )
}

export default App;