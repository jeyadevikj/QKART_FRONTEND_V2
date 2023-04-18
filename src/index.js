import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from '@mui/material/styles'
import theme  from './theme';
import {BrowserRouter} from "react-router-dom";
// import {Route} from "react-router-dom";


// TODO: CRIO_TASK_MODULE_REGISTER - Add Target container ID (refer public/index.html)
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      {/* <Route> */}
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          preventDuplicate
        >
        {/* <Route path="/" component={Products} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} /> */}
        <App />
        </SnackbarProvider>
        {/* </Route> */}
        </BrowserRouter>
        </ThemeProvider>
  </React.StrictMode>,document.getElementById('root')
);
