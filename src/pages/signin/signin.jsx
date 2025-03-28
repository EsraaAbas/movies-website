import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function Signin() {

    const [user, setUser] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({
        emailError: null,
        passwordError: null,
        nameError: null,
        userNameError: null,
        confirmPasswordError: null
    })



    const handleChange = (evt) => {

        let emailRegex = /^[a-zA-Z]{4,100}(@)(gmail|yahoo)(.com)$/
        // name valitation
        if (evt.target.name == "name") {
            setUser({ ...user, name: evt.target.value })
            setErrors({ ...errors, nameError: (evt.target.value.length == 0) ? 'this field is required' : '' })
        }
        // email valition
        else if (evt.target.name == "email") {
            setUser({ ...user, email: evt.target.value })
            setErrors({ ...errors, emailError: (evt.target.value.length == 0) ? 'this field is required' 
                                             : (emailRegex.test(evt.target.value)) ? '' : 'invalid Email' 
            })
        }
        // user name valition
        else if (evt.target.name == "username") {
            setUser({ ...user, userName: evt.target.value })
            setErrors({ ...errors, userNameError: (evt.target.value.length == 0) ? 'this field is required'
                                                : (evt.target.value.includes(' ')) ? 'user name should hasnt space' : '' })
        }

        // password valition
        else if (evt.target.name == "passwrod") {
            setUser({ ...user, password: evt.target.value })

             const value = evt.target.value;
    
                setErrors({
                    ...errors,
                    passwordError: 
                        value.length === 0? 'This field is required'
                            : value.length < 8? 'Password must be at least 8 characters'
                                : !/[a-z]/.test(value)? 'Password must contain at least one lowercase letter'
                                    : !/[A-Z]/.test(value)? 'Password must contain at least one uppercase letter'
                                        : !/[!@#$%^&*(),.?":{}|<>]/.test(value)? 'Password must contain at least one special character'
                                            : ''
                })
            }

        // confirm password valition
        else if (evt.target.name == "confirmpasswrod") {
            setUser({ ...user, confirmPassword: evt.target.value })
            setErrors({ ...errors, confirmPasswordError: (evt.target.value.length == 0) ? 'this field is required'
                                                       : (evt.target.value != user.password) ? 'password not match' : '' })
        }
    }


return (
    <div className='container'>

        <Form className='w-50 m-auto mt-5'>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' onChange={(e) => { handleChange(e) }} placeholder="name" />
            </Form.Group>
            <p className="text-danger">{errors.nameError}</p>

            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' onChange={(e) => { handleChange(e) }} placeholder="Enter email" />
            </Form.Group>
            <p className="text-danger">{errors.emailError}</p>

            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type='text' name='username' onChange={(e) => { handleChange(e) }} placeholder="Enter uername" />
            </Form.Group>
            <p className="text-danger">{errors.userNameError}</p>


            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='passwrod' onChange={(e) => { handleChange(e) }} placeholder="Password" />
            </Form.Group>
            <p className="text-danger">{errors.passwordError}</p>


            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='confirmpasswrod' onChange={(e) => { handleChange(e) }} placeholder="confirm Password" />
            </Form.Group>
            <p className="text-danger">{errors.confirmPasswordError}</p>

            <button className='btn btn-success'>Sign in</button>

        </Form>

    </div>
);
}

export default Signin;