import React from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormText,
  Table
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Orientação Acadêmica</NavbarBrand>
         <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">
                <Link to="/login">Login</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/creditos">
                <Link to="/creditos">Créditos</Link>
              </NavLink>
            </NavItem>
         </Nav>   
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <div id="content">
          <Switch>
            <Route path="/creditos">
              <Creditos />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
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
      <h4>Bem-vindo ao sistema de Orientação Acadêmica.</h4>
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
      <Router>
        <div>
          <Link to="/aluno">Aluno</Link>
          <Link to="/professor">Professor</Link>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <div id="content">
              <Switch>
                <Route path="/professor">
                  <Professor />
                </Route>
                <Route path="/aluno">
                  <Aluno />
                </Route>
              </Switch>
            </div>
        </div>
      </Router>
    </div>
  );  
}

function Professor() {
  return (
    <div className="Professor">
        <h4>Solicitações</h4>
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>Comentário</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Exemplo</td>
            <td>Ciência da Computação</td>
            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</td>
            <td><a>Vizualizar</a></td>
          </tr>
        </tbody>
        </Table>
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

function Creditos() {
  return (
    <div className="Creditos">
    </div>
  );  
}

export default App;
