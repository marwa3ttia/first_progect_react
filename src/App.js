
import Action_counter from './component/Counter/Action_counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar/Navbar';
import ProductDetails from './component/product details/ProductDetails';
import Home from './component/home/Home';
import TodoList from "./views/todo/Todo";
import Register from './component/forms/Register'; 
import Shop from './component/Shop/Shop';
import Login from './component/forms/Login';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'

function App() {
  
  return (
    <Router>
        <Navbar/>
    <div className="App">
      <header >

      <Switch>
      <Route component = {Action_counter} path = "/count"/>
      <Route component = {Home} path = "/" exact />
      <Route component = {Shop} path = "/shop" exact/>
      <Route component = {ProductDetails} path = "/shop/:id"/>
      <Route component={TodoList} path="/todo" />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/reg" />
      </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
   





