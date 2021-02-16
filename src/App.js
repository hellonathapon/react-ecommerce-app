import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './views/Home';
import Item from './views/Item';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
