import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';


const LogIn = () => {
    const { push } = useHistory();
    const [credentials, setCredentials ] = useState({
        username:"",
        password:"",
        error:""
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axios
            .post("https://african-marketplace-03.herokuapp.com/api/auth/login",credentials)
            .then(resp => {
                localStorage.setItem("token", resp.data.token);
                push('/listings');
            })
            .catch(err=> {
                console.log(err);
            })
    }
    return (
        <ComponentContainer>
        <ModalContainer>
            <Label>Welcome to African Marketplace</Label>
            <Label>Please enter your account information.</Label>
            <div>
            <FormGroup onSubmit={login}>
            <Input
                id="username"
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <Input
                id="password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <Button id="submit">Log in</Button>
            </FormGroup>
            <p id="error">{credentials.error}</p>
        </div>
        </ModalContainer>
    </ComponentContainer>);

}

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    font-size: 1.5rem;
    color: #003566;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`


export default LogIn;