import React from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormText,
  Table,
  Badge,
  Jumbotron,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { IoMdEye } from "react-icons/io";

function App() {
  return (
    <Router>
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Orientação Acadêmica</NavbarBrand>
         <Nav className="ml-auto" navbar>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/login">Login</Link>
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

function Home() {
  return (
    <div className="App">
      <Jumbotron>
        <h1 className="display-3">Orientação Acadêmica</h1>
        <p className="lead">Sistema criado para a matéria MATC84 para facilitar o processo de Orientação Acadêmica.</p>
        <hr className="my-2" />
        <p>Efetue o login para acessar o sistema.</p>
        <p className="lead">
          <Button color="primary"><Link to="/login">Login</Link></Button>
        </p>
      </Jumbotron>
    </div>
  );
}

function Aluno() {
  return (
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
          <Button>Submit</Button>
        </Form>
    </div>
  );
}

function Login() {
  return (
    <div className="Login">
      <div className="authenticationForm">
        <h4>Log in</h4>
        <Form>
          <div className="formItems">
            <FormGroup>
              <Input type="text" name="user" id="user" placeholder="Usuário" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="password" placeholder="Senha" />
            </FormGroup>
            <Button>Log in</Button>
            <div className="formLinks">
                <FormText>
                  <Link to="/cadastro">Cadastrar-se</Link>
                </FormText>
                <FormText>
                  <Link to="/resetPassword">Esqueceu sua senha?</Link>
                </FormText>
            </div>
          </div>
        </Form>
      </div>
      
    </div>
  );  
}

function Cadastro() {
  return (
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
            <Button>Cadastrar-se</Button>
          </div>
        </Form>
      </div>
      
    </div>
  );
}

function ResetPassword() {
  return (
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
            <Button>Enviar</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

function Professor() {
  return (
    <div className="Professor">
        <h4>Solicitações</h4>
        <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height:'70px' }}>
          <div className="solicitacao">     
            <CardTitle><b>Exemple</b></CardTitle>
            <Badge href="#" color="warning">Warning</Badge>
            <Button><IoMdEye /></Button>
          </div>
          <CardBody className="simpleCard">
          </CardBody>
        </Card>

        </div>
        <Form>
          <FormGroup>
            <Label for="materias">Editar a grade do aluno</Label>
            <Input type="select" name="materias" id="materias" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <FormText color="muted">
              Avalie a grade montada pelo aluno.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="comentario">Comentário</Label>
            <Input type="textarea" name="comentario" id="comentario" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
  );  
}

export default App;
