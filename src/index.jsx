import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout/index.jsx";
import Home from "./views/home/index.jsx";
import Goods from "./views/goods/index.jsx";
import Order from "./views/order/index.jsx";
import User from "./views/user/index.jsx";
import './index.scss';

class App extends PureComponent {
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route>
            <Layout>
              <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/goods" component={Goods}></Route>
                <Route path="/order" component={Order}></Route>
                <Route path="/user" component={User}></Route>
                <Redirect to="/home"></Redirect> 
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);