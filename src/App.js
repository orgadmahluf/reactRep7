import logo from './logo.svg';
import {HashRouter as Router , Switch,Route,Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Link to='/'>Home</Link>
        <Link to='/page2'>2</Link>
        <Switch>
          <Route exact path='/' component={()=>{return <h1>HomePage</h1>}}/>
          <Route exact path='/page2' component={()=>{return <h3>Page2</h3>}}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
