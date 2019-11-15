import React from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
} from 'reactstrap';

const Aluno = () => (
    <div className="App">
    <Form>
        <FormGroup>
          <Label for="nome">Nome</Label>
          <Input type="text" name="nome" id="nome" placeholder="Coloque aqui seu nome" />
        </FormGroup>
        <FormGroup>
          <Label for="matrícula">Matrícula</Label>
          <Input type="matrícula" name="matrícula" id="matrícula" placeholder="Coloque aqui sua matrícula" />
        </FormGroup>
        <FormGroup>
          <Label for="semestre">Semestre</Label>
          <Input type="semestre" name="semestre" id="semestre" placeholder="Coloque aqui seu semestre" />
        </FormGroup>
        <FormGroup>
          <Label for="materias">Matérias</Label>
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
        <Button color="info">Enviar</Button>
      </Form>
  </div> 
)

export default Aluno;