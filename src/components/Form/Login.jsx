import Form from 'react-bootstrap/Form';
import mystyle from './Login.module.css'
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
export default function Login() {
    const [user, setUser] = useState({ name: "", email: "", password: "", phone: "" })
    const handleValid = (event) => {
        // let f=event.target.value
        if (event.target.name == "name") {
            setUser({ ...user, name: event.target.value })
            console.log(user)
        }

        else if (event.target.name == "email") {
            setUser({ ...user, email: event.target.value })
            console.log(user)

        }
        else if (event.target.name == "password") {
            setUser({ ...user, password: event.target.value })
            console.log(user)

        }
        else {
            setUser({ ...user, phone: event.target.value })
            console.log(user)

        }


    }



    return <>
        <div className={mystyle.test}>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => {
                        handleValid(e)

                    }} name='name' value={user.name} type="text" placeholder="Enter the name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => {
                        handleValid(e)

                    }} name='email' value={user.email} type="email" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => {
                        handleValid(e)

                    }} name='password' value={user.password} type="password" placeholder="Enter the password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onChange={(e) => {
                        handleValid(e)

                    }} name='phone' value={user.phone} type="number" placeholder="Enter the phone" required />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />{' '}

            </Form>

        </div>

    </>


}