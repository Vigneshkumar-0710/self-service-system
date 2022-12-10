import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// import "./Login.css";

export default function Login() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return username.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div class="row mt-4 pb-3 justify-content-center">
        <div class="col-3">
        <div className="Login">
            <h4 className="mb-2">Login Page</h4>

<Form onSubmit={handleSubmit}>

  <Form.Group size="lg" controlId="username">

    <Form.Label>Username</Form.Label>

    <Form.Control

      autoFocus

      type="username"

      value={username}

      onChange={(e) => setUsername(e.target.value)}

    />

  </Form.Group>

  

  <Button block size="lg" type="submit" className="mt-2" disabled={!validateForm()}>

    Login

  </Button>

</Form>

<Link to="/bot">Forgot username!</Link>

</div>
        </div>
    </div>

    

  );

}