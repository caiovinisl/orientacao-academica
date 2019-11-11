import React from 'react';
import Header from './components/Header';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Content">
        <Form>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input type="text" name="nome" id="nome" placeholder="Coloque aqui seu Nome" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Coloque aqui seu Email" />
          </FormGroup>
          <FormGroup>
            <Label for="semestre">Semestre</Label>
            <Input type="semestre" name="semestre" id="semestre" placeholder="Coloque aqui seu semestre" />
          </FormGroup>
          <FormGroup>
            <Label for="materias">Selecione suas matérias</Label>
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
          <Button>Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
