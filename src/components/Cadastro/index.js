import React from 'react';
import { 
    Button, 
    Form, 
    FormGroup,  
    Input,
} from 'reactstrap';

const Cadastro = () => (
    <div className="Cadastro">
      <div className="authenticationForm">
        <h4>Cadastro</h4>
        <Form>
          <div className="formItems">
            <FormGroup>
              <Input type="text" name="user" id="user" placeholder="Nome" />
            </FormGroup>
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="password" placeholder="Senha" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="password" placeholder="Confirmar Senha" />
            </FormGroup>
            <Button color="info">Cadastrar-se</Button>
          </div>
        </Form>
      </div> 
    </div>
)

export default Cadastro;