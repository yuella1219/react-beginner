import {BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom";//순서대로 router 형식 선언(hashrouter도 있음. 단 #이 항상 붙는다.) as 컴포넌트 렌더링, route별로 렌더링, 컴포넌트 렌더링?
import Home from './routes/Home';
import Detail from './routes/Detail';

function App(){
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/Movie/:id">
                    <Detail/>
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/`} element={Home} >
                    <Home/>
                </Route>
            </Switch>
        </Router>

    )
}

export default App;