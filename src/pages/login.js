import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/login.css";
import BackgroundImage from "../images/1.png";

function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleSubmit = async (event) => {
    
  };


//   const handlePassword = () => {

//   };


  return (
    <div className="sign-in__wrapper" style={{ backgroundImage: `url(${BackgroundImage})`}}>
        <Form className="shadow p-5 bg-white rounded" onSubmit={handleSubmit}>

            <div className="h3 text-center p-4 pt-0">Sign In</div>

            <Form.Group className="mb-3" controlId="username">
                <Form.Control
                    type="text"
                    value={inputUsername}
                    placeholder="Username"
                    onChange={(e) => setInputUsername(e.target.value)}
                    required
                />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Control
                    type="password"
                    value={inputPassword}
                    placeholder="Password"
                    onChange={(e) => setInputPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <div className="d-inline">
                <Form.Group className="float-start" controlId="checkbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <a className="text-muted float-end" href="/forgotpassword"> Forgot password? </a>

            </div>
           
           <div className="loginbtn">
                <Button className="w-100 mt-3" variant="primary" type="submit"> Log In </Button> 
           </div>
            
            <Button className="w-100 mt-3" variant="secondary" type="submit"> Log In with Google </Button>
            <Button className="w-100 mt-3" variant="secondary" type="submit"> Log In with Github </Button>

            <div className="mt-2 text-center">
                <a className="text-muted" href="/signup"> New User? Create an Account </a>
            </div>
     
        </Form>

        
      
    </div>
  );
};

export default Login;
