import React from 'react';
import { 
    Button, 
    Jumbotron,
    Card,
    CardTitle,
    CardBody,
    Badge
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
        <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
          <div className="solicitacaoItems">     
              <CardTitle className="solicitacaoTitle"><b>2019.2</b></CardTitle>
              <Badge href="#" color="info" pill>Enviada</Badge>
          </div>
          <CardBody className="simpleCard">
          </CardBody>
        </Card>
        <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
          <div className="solicitacaoItems">     
              <CardTitle className="solicitacaoTitle"><b>2018.2</b></CardTitle>
              <Badge href="#" color="success" pill>Revisada</Badge>
          </div>
          <CardBody className="simpleCard">
          </CardBody>
        </Card>
        <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
          <div className="solicitacaoItems">     
              <CardTitle className="solicitacaoTitle"><b>2017.1</b></CardTitle>
              <Badge href="#" color="success" pill>Revisada</Badge>
          </div>
          <CardBody className="simpleCard">
          </CardBody>
        </Card>
        <p className="lead">
          <Button color="info"><Link to="/solicitacao">Nova solicitação</Link></Button>
        </p>
      </Jumbotron>
  </div> 
)

export default Aluno;