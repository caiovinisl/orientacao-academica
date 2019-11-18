import React from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
} from 'reactstrap';
import {
    Link
} from "react-router-dom";

const Solicitacao = () => (
    <div className="App">
    <Form>
        <FormGroup>
          <Label for="nome">Nome</Label>
          <Input type="text" name="nome" id="nome" placeholder="Coloque aqui seu nome" />
        </FormGroup>
        <FormGroup>
          <Label for="matrícula">Matrícula</Label>
          <Input type="text" name="matrícula" id="matrícula" placeholder="Coloque aqui sua matrícula" />
        </FormGroup>
        <FormGroup>
          <Label for="semestre">Semestre de ingressso</Label>
          <Input type="text" name="semestre" id="semestre" placeholder="Coloque aqui seu semestre" />
        </FormGroup>
        <FormGroup>
          <Label for="cr">CR</Label>
          <Input type="text" name="cr" id="cr" placeholder="Coloque aqui seu CR" />
        </FormGroup>
        <FormGroup>
          <Label for="trabalho">Você está estagiando ou trabalhando?</Label>
          <Input type="select" name="trabalho" id="trabalho">
            <option>Sim</option>
            <option>Não</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="trabalho">Você está participando de alguma Iniciação Científica ou extensão?</Label>
          <Input type="select" name="extensao" id="extensao">
            <option>Sim</option>
            <option>Não</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="materias">Monte sua grade do semestre</Label>
          <Input type="select" name="materias" id="materias" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="comentarios">Comentário</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button color="info">Enviar</Button>{' '}
        <Button color="secondary"><Link to="/aluno">Cancelar</Link></Button>
      </Form>
  </div> 
)

export default Solicitacao;