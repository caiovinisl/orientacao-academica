import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import ResetPassword from './components/ResetPassword';
import Professor from './components/Professor';
import Aluno from './components/Aluno';
import Solicitacao from './components/Aluno/solicitacao.js';
import { 
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Navbar color="info" info expand="md">
        <NavbarBrand href="/">Orientação Acadêmica</NavbarBrand>
         <Nav className="ml-auto" navbar>
            <NavItem>
                <Link className="navbarLink" to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link className="navbarLink" to="/login">Login</Link>
            </NavItem>
         </Nav>   
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <div id="content">
          <Switch>
            <Route exact path="/professor">
              <Professor />
            </Route>
            <Route exact path="/aluno">
              <Aluno />
            </Route>
            <Route exact path="/solicitacao">
              <Solicitacao />
            </Route>
            <Route exact path="/cadastro">
              <Cadastro />
            </Route>
            <Route exact path="/resetPassword">
              <ResetPassword />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    </div>
  </Router>
  );
}

export default App;
