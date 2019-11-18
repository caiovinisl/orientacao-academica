import React, {useState} from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    FormText,
    Label, 
    Input,
    Badge,
    Card, CardBody,
    CardTitle,
    Modal, ModalHeader, ModalBody, ModalFooter,
    TabContent, TabPane,
    Nav, NavItem, NavLink, CardText, Row, Col,
    Jumbotron
} from 'reactstrap';
import { FaRegEye } from "react-icons/fa";
import classnames from 'classnames';
  

const Professor = (props) => {
  const {
    buttonLabel,
    className,
    name,
    matricula,
    semestre,
    cr,
    trabalho,
    extensao,
    materias
  
   } = props;
  
  const [modal, setModal] = useState(false);
  
  const toggle = () => setModal(!modal);

  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="Professor">
        <Jumbotron fluid>
          <h1 className="display-3">Bem-vindo</h1>
          <p className="lead">Sistema de Orientação Acadêmica | Universidade Federal da Bahia.</p>
          <hr className="my-2" />
          <p>Acompanhe as suas solicitações de orientação.</p>
          <Button className="solicitacaoButton" color="info" outline>Solicitações <Badge color="info">3</Badge></Button>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggleTab('1'); }}
                >
                  <Badge href="#" color="secondary" pill>Todas</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggleTab('2'); }}
                >
                  <Badge href="#" color="info" pill>Novas</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => { toggleTab('3'); }}
                >
                  <Badge href="#" color="warning" pill>Vizualizadas</Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '4' })}
                  onClick={() => { toggleTab('4'); }}
                >
                  <Badge href="#" color="success" pill>Revisadas</Badge>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
                      <div className="solicitacaoItems">     
                        <CardTitle><b>Caio Vinícius Santos Lopes</b></CardTitle>
                        <Button color="warning" onClick={toggle}><FaRegEye/></Button>
                      </div>
                      <CardBody className="simpleCard">
                      </CardBody>
                    </Card>
                    <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
                      <div className="solicitacaoItems">     
                        <CardTitle className="solicitacaoTitle"><b>Daniele Freire Santos</b></CardTitle>
                        <Button color="info" onClick={toggle}><FaRegEye/></Button>
                      </div>
                      <CardBody className="simpleCard">
                      </CardBody>
                    </Card>
                    <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
                      <div className="solicitacaoItems">     
                        <CardTitle className="solicitacaoTitle"><b>Luan Lemos</b></CardTitle>
                        <Button color="success" onClick={toggle}><FaRegEye/></Button>
                      </div>
                      <CardBody className="simpleCard">
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
                      <div className="solicitacaoItems">     
                        <CardTitle className="solicitacaoTitle"><b>Daniele Freire Santos</b></CardTitle> 
                        <Button color="info" onClick={toggle}><FaRegEye/></Button>
                      </div>
                      <CardBody className="simpleCard">
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
                      <div className="solicitacaoItems">     
                        <CardTitle><b>Caio Vinícius Santos Lopes</b></CardTitle>                
                        <Button color="warning" onClick={toggle}><FaRegEye/></Button>
                      </div>
                      <CardBody className="simpleCard">
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col sm="12">
                    <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
                      <div className="solicitacaoItems">     
                        <CardTitle className="solicitacaoTitle"><b>Luan Lemos</b></CardTitle>
                      <Button color="success" onClick={toggle}><FaRegEye/></Button>
                      </div>
                      <CardBody className="simpleCard">
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
          <div>
          <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>{name}</ModalHeader>
              <ModalBody>
                <p>Matrícula: {matricula}</p>
                <p>Semestre de Ingresso: {semestre}</p>
                <p>CR:{cr}</p>
                <p>Estágia ou trabalha?: {trabalho}</p>
                <p>Participa de alguma IC ou extensão?: {extensao}</p>
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
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="info" onClick={toggle}>Confirmar</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancelar</Button>
              </ModalFooter>
            </Modal>
          </div>
          </div>
        </Jumbotron>
      </div>
);

}

export default Professor;