import React,{useState} from 'react'
import {useNavigate,Link}  from 'react-router-dom'
import { Form,Alert,Row,Col,Button } from 'react-bootstrap';



const Login = () => {

  const INITIAL_STATE = {
    email: '',
    password: '',
    role:''
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [mensajes, setMensajes] = useState(null);
  const [tipomensajes, setTipoMensajes] = useState(null);
  const navigate = useNavigate();


  const submitForm = async (ev)  => {
    ev.preventDefault();

    // TODO: Validations

    const body = {
      email: formData.email,
      password: formData.password,
    }
    const request = await fetch('http://localhost:3001/usuarios/signin', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const response = await request.json();
        if (response.token){
          console.log("existe Token")
          localStorage.setItem('token', response.token);
          var hoy = new Date();
          localStorage.setItem('tokendate', hoy);
          localStorage.setItem('tokenid', response._id);
          setMensajes("Logueado Correctamente.")
          setTipoMensajes("success")
          console.log(response)
          
          navigate("/profile");
          


        }
        else{
          console.log("No existe");
          setMensajes("Este usuario no existe en la base de datos")
          setTipoMensajes("danger")
        }
  }

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    setFormData({ ...formData, [name]: value });
  };



  return (
    <>
    
    <Row>
      <Col>
      {mensajes!=null ? <Alert variant={tipomensajes}> {mensajes}   </Alert>: ""}
      </Col>
    </Row>
    <Form className="mt-3" onSubmit={submitForm}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={changeInput} value={formData.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
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
</>
  )
}

export default Login