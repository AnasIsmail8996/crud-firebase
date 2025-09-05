
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const navigate = useNavigate();


  const handleSignUpUser=async(event)=>{
    event.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)

       navigate("./dashboard");
    } catch (error) {
      console.log(error.message);
      
    }
  }
  return (
    <>
 <Form className='p-5' onClick={handleSignUpUser}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
         placeholder="Enter email"
         value={email}
         onChange={(e)=> setEmail(e.target.value)}
         />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
         placeholder="Password"
          value={password}
         onChange={(e)=> setPassword(e.target.value)}
         />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default SignUp;