import React from 'react';
import { 
  Button,
  Jumbotron,
} from 'reactstrap';
import {
  Link
} from "react-router-dom";

const Home = () => (
    <div className="App">
      <Jumbotron fluid>
        <h1 className="display-3">Orientação Acadêmica</h1>
        <p className="lead">Sistema criado na matéria MATC84 para facilitar o processo de Orientação Acadêmica na Universidade Federal da Bahia.</p>
        <hr className="my-2" />
        <p>Efetue o login para acessar as funcionalidades do sistema.</p>
        <p className="lead">
          <Button color="info"><Link to="/login">Login</Link></Button>
        </p>
      </Jumbotron>
    </div>
);

export default Home;