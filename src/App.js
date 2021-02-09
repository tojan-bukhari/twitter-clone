import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Register from './components/register.js' ;
import Signup from './components/register.js' ;


function App() {
  return (
  <div className='app'>
  <BrowserRouter>
   <Switch>
     <Route exact path="/signup" component={Signup}/>
     <Route exact path="/" component={Register}/>
     <Route exact path="/home" component={Home} />
     <Route exact path='/profile' component={Profile}/>
   </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
