import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import PageRender from "./CustomRouter/PageRender"
import Home from './Pages/Home';
import Notify from './Components/Notify/Notify'
import Login from './Pages/login';
function App() {
  return (
   <Router>
     <input type= "checkbox" id = "theme" />
    <div className="App">
      <Notify />
   {/* <div className='blur' style={{top :"-18px" ,right : 0}}></div>
   {/* <div className='blur' style={{top :"36%" ,left : '-8rem'}}></div> */}
    {/* <div className="main">     */}
    <Route exact path="/" component={Login} />
    <Route exact path="/:page" component={PageRender} />
    <Route exact path="/:page/:id" component={PageRender} />
        
    </div>
    {/* </div> */}
    </Router>
  );
}
export default App;
