import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";
import {Link} from "react-router-dom";
// import { ThemeProvider } from '@mui/material/styles'
// import { theme } from './theme';

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <Route>
      <div className="App">
        {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
          {/* <Link to="/">Products</Link>

          <Link to="/register">Register</Link>

          <Link to="/login">Login</Link> */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/thanks">
              <Thanks />
            </Route>
          </Switch>
      </div>
    </Route>
  );
}

export default App;
