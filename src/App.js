import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './views/Home';
import Item from './views/Item';
import Cart from './views/Cart';
// import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
      // <CssBaseline/>
    <Router>
      <div>
        <Switch>
          {/* NOTE: Nested component into <Route/> is work but to render but component
              cannot access props, param, history out of the route.
          */}
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/:id">
            <Item />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
