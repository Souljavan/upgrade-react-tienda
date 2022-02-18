import React,{useState} from 'react'
import {useNavigate,Link}  from 'react-router-dom'
import { Form,Alert,Row,Col,Button,Modal } from 'react-bootstrap';



const NewUser = () => {

  const INITIAL_STATE = {
    name: '',
    email: '',
    password:'',
    role:'usaurio'
  };
  
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [mensajes, setMensajes] = useState(null);
  const [tipomensajes, setTipoMensajes] = useState(null);
  const [disabled, setDisabled] = useState(false);
  
  const changeInput = (ev) => {
    const { name, value } = ev.target;
  
    setFormData({ ...formData, [name]: value });
  };
  
  const submitForm = async (ev)  => {
    ev.preventDefault();
    console.log(formData)
    const body = {
      name:formData.name,
      email: formData.email,
      password: formData.password,
      role:formData.role
    }
    const request = await fetch('http://localhost:3001/usuarios/register-user', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const response = await request.json();
        console.log(response)
        setDisabled(true)
        setMensajes("Usaurio Creado correctamente.")
        setTipoMensajes("success")
  }
  

  return (
    <>
    <Row>
      <Col>
      {mensajes!=null ? <Alert variant={tipomensajes}> {mensajes}   </Alert>: ""}
      <Link to={"/login/"}> <Button variant="success">Login Now</Button></Link>
      </Col>
    </Row>
    <Form className="mt-3" onSubmit={submitForm}>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control disabled={disabled} type="name" name="name" placeholder="Enter name" onChange={changeInput} value={formData.name} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control disabled={disabled} type="email" name="email" placeholder="Enter email" onChange={changeInput} value={formData.email} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control disabled={disabled} type="password" name="password" placeholder="Password" onChange={changeInput} value={formData.password} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    <Button disabled={disabled} variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </>
  )
}

export default NewUser