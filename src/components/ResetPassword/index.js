import React from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Input,
    FormText,
} from 'reactstrap';

const ResetPassword = () => (
    <div className="resetPassword">
      <div className="authenticationForm">
        <h4>Recuperar senha</h4>
        <Form>
          <div className="formItems">
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Email" />
              <FormText color="muted">
                Enviaremos para você um email para restauração da senha.
              </FormText>
            </FormGroup>
            <Button color="info">Enviar</Button>
          </div>
        </Form>
      </div>
    </div>
)

export default ResetPassword;