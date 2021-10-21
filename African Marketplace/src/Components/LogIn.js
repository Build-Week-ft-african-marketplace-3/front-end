import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import Banner from '../images/banner.jpg';



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
            <img className='login-img' src={Banner} alt='cartons of figs and strawberries'/>
        <ModalContainer>
            <Title>Welcome to African Marketplace</Title>
            <Title>Please enter your account information.</Title>
            <div>
                    
            <FormGroup onSubmit={login}>
                <Label>Username:
            <Input
                id="username"
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
            </Label>
            <Label>Password:
            <Input
                id="password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
            />
            </Label>
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
    background: #00030B;
    padding: 2rem;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0px 1px 6px -2px rgb(210, 210, 210);
    margin-top: 5%;
    opacity: 0.85;
    
`
const Title = styled.label`
    display: block;
    font-size: 1.8rem;
    color: #FFC300;
    margin-bottom: 3%;
`


const Label = styled.label`
    display: block;
    font-size: 1.5rem;
    color: #FFC300;
    text-align: left;
    margin-bottom: 3%;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 0.5rem 0;
    width:100%;
`

const Button = styled.button`
    background-color: #FFC300;
    color: #000814;
    /* font-weight: bold; */
    font-size: 1em;
    height: 2rem;
    width: 6rem;
    border-radius: 6px;
    margin-top: 5%;
    padding: 1%;
`


export default LogIn;