// import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from 'reactstrap'
import perfil from '../../../assets/imghome/pngtree-user-vector-avatar-png-image_1541962.jpg'
import style from './editarperfilview.module.css'

const EditarPerfilView = () => {
  const { id, profilePic, userName, mail } = JSON.parse(
    localStorage.getItem('user')
  )

  return (
    <div>
      <Row>
        <Col md="8" style={{ width: '95%', marginTop: '17px' }}>
          <Card>
            <CardHeader>
              <h5 className="title">Editar Perfil</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row className={style.containerImagen}>
                  <Col
                    md="12"
                    className="d-flex justify-content-center align-items-center "
                  >
                    <h1 className={style.firma}>{userName}</h1>
                    <FormGroup>
                      <img
                        src={profilePic}
                        alt=""
                        style={{
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '10px  #ccc',
                          // background: "rgba(169, 181, 197, 0.562)",
                          margin: `15px 15px`,
                          textAlign: 'center',
                          width: '200px',
                          top: '40px',
                          height: '200px',
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1 justify-content-center d-flex" md="12">
                    <FormGroup>
                      <Input
                        name="userName"
                        placeholder="Nombre Usuario"
                        type="text"
                        disabled
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Nombre</label>
                      <Input
                        name="fullName"
                        placeholder="Nombre Completo"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Correo</label>
                      <Input
                        name="nationality"
                        placeholder="Correo"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Número Teléfono</label>
                      <Input
                        name="phoneNumber"
                        placeholder="Número Teléfono"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="6">
                    <FormGroup>
                      <label>Fecha Cumpleaños</label>
                      <Input
                        name="birthDate"
                        placeholder="Fecha Cumpleaños"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12 d-flex justify-content-center align-items-center">
                    <FormGroup>
                      <button type="submit" className={style.buttons}>
                        Editar
                      </button>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default EditarPerfilView
