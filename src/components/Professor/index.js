import React from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Badge,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

const Professor = () => (
    <div className="Professor">
        <Button color="info" outline>Solicitações <Badge color="info">3</Badge></Button>
        <div>
        <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
          <div className="solicitacaoItems">     
            <CardTitle><b>Caio Vinícius Santos Lopes</b></CardTitle>
            <Badge href="#" color="warning" pill>Vizualizado</Badge>
          </div>
          <CardBody className="simpleCard">
          </CardBody>
        </Card>
        <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
          <div className="solicitacaoItems">     
            <CardTitle className="solicitacaoTitle"><b>Daniele Freire Santos</b></CardTitle>
            <Badge href="#" color="info" pill>Novo</Badge>
          </div>
          <CardBody className="simpleCard">
          </CardBody>
        </Card>
        <Card className="solicitacao" body inverse style={{ backgroundColor: '#030F11', borderColor: '#030F11', height:'70px' }}>
          <div className="solicitacaoItems">     
            <CardTitle className="solicitacaoTitle"><b>Daniele Freire Santos</b></CardTitle>
            <Badge href="#" color="success" pill>Revisado</Badge>
          </div>
          <CardBody className="simpleCard">
          </CardBody>
        </Card>
      
        </div>
        {/* <Form>
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
        </Form> */}
      </div>
)

export default Professor;