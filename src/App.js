import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home'


function App() {
  return (
  <div className='app'>
  <BrowserRouter>
   <Switch>
     <Route path="/" component={Home} />
   </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
