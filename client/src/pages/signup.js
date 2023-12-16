import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/signup.css";
import BackgroundImage from "../images/1.png";

const Signup = () => {
    const [inputFirstName, setFirstName] = useState("");
    const [inputLastName, setLastName] = useState("");
    const [inputEmail, setEmail] = useState("");
    const [inputPassword, setPassword] = useState("");

    const handleSubmit = async (event) => {
    
    };
  

    return (
      <div className="sign-up__wrapper" style={{ backgroundImage: `url(${BackgroundImage})`}}>
          <Form className="shadow p-5 bg-white rounded" onSubmit={handleSubmit}>
  
              <div className="h3 text-center p-4 pt-0">Sign Up</div>
  
              <Form.Group className="mb-3" controlId="FirstName">
                  <Form.Control
                      type="text"
                      value={inputFirstName}
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                  />
              </Form.Group>
  
  
              <Form.Group className="mb-3" controlId="LastName">
                  <Form.Control
                      type="text"
                      value={inputLastName}
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Email">
                  <Form.Control
                      type="text"
                      value={inputEmail}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Pasword">
                  <Form.Control
                      type="password"
                      value={inputPassword}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
              </Form.Group>
  
             
             <div className="signupbtn">
                  <Button className="w-100 mt-3" variant="primary" type="submit"> Sign Up </Button> 
             </div>
              
              <Button className="w-100 mt-3" variant="secondary" type="submit"> Sign Up with Google </Button>
             
            <div className="mt-2 text-center">
                <a className="text-muted" href="/login"> Already have an Account? Login </a>
            </div>
       
          </Form>
        
    </div>
  )
}

export default Signup