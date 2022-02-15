import React,{useState} from 'react'
import {useNavigate,Link}  from 'react-router-dom'
import { Form,Alert,Row,Col,Button } from 'react-bootstrap';


const [formData, setFormData] = useState(INITIAL_STATE);

const changeInput = (ev) => {
  const { name, value } = ev.target;

  setFormData({ ...formData, [name]: value });
};


const NewUser = () => {
  return (
    <Form className="mt-3" onSubmit={submitForm}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" onChange={changeInput} value={formData.email} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="password" placeholder="Password" onChange={changeInput} value={formData.password} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <Link to={"/newuser/"}> <Button variant="success">Registro</Button></Link>
  </Form>
  )
}

export default NewUser