import React from 'react';
import './App.css';
import { Route , Switch , BrowserRouter } from "react-router-dom";
import Main from './pages/Main/Main'
import Admin from './pages/admin/Pages/Index/Index'
import Login from './pages/admin/Pages/Login/Login'
import Logout from './pages/admin/Pages/Logout/logout'
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path={["/admin", "/admin/:pages","/admin/update/:id"]}  component={Admin} />
          <Route exact path="/login"  component={Login} />
          <Route exact path="/logout"  component={Logout} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
