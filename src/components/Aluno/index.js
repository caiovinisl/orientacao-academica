import React from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Jumbotron
} from 'reactstrap';
import {
  Link
} from "react-router-dom";

const Aluno = () => (
    <div className="App">
    <Jumbotron fluid>
        <h1 className="display-3">Bem-vindo</h1>
        <p className="lead">Sistema de Orientação Acadêmica | Universidade Federal da Bahia.</p>
        <hr className="my-2" />
        <p>Acompanhe as suas solicitações de orientação.</p>
        <p className="lead">
          <Button color="info"><Link to="/solicitacao">Nova solicitação</Link></Button>
        </p>
      </Jumbotron>
  </div> 
)

export default Aluno;