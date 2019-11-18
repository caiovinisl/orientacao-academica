import React from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    FormText,
    Input,
  } from 'reactstrap';
  import {
    Link
  } from "react-router-dom";

const Login = () => (
    <div className="Login">
      <div className="authenticationForm">
        <h4>Log in</h4>
        <Form>
          <div className="formItems">
            <FormGroup>
              <Input type="text" name="cpf" id="cpf" placeholder="CPF" />
            </FormGroup>
            <FormGroup className="passwordFormGroup">
              <Input type="password" name="password" id="password" placeholder="Senha" />
            </FormGroup>
            <FormGroup>
              <div className="formLinks">
                <FormText color="muted">
                  <Link to="/resetPassword">Esqueceu sua senha?</Link>
                </FormText>
              </div>
            </FormGroup>
            <div className="loginFormButtons">
              <Button color="info">Log in</Button>
              <Button className="registerButton" color="info" outline><Link to="/cadastro">Cadastre-se</Link></Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
)

export default Login;