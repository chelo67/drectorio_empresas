import React, { useState, useEffect } from "react";
import Config from "../Config";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";
import axios from 'axios';

const Login = () => {

    const {setToken, getToken } = AuthUser();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (getToken()) {
            navigate("/");
        }
    }, []);

    const submitLogin = async(e) => {
            e.preventDefault();
            await axios.get('/sanctum/csrf-cookie').then((response) => {
                Config.getLogin({email,password})
                .then(({data})=>{
                    if(data.success) {
                        setToken(
                            data.user,
                            data.token,
                            data.user.roles[0].name
                    );     
                } else {
                    console.log(data.message)
                }
            })
        });
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-sm-6'>
                    <div className='card mt-5 mb-5'>
                        <div className='card-body'>
                            <h1 className='text-center fw-bolder'>LOGIN</h1>

                            <input type="email" className='form-control mt-3' placeholder='Email:' value={email} 
                            onChange={(e)=>setEmail(e.target.value)} required />
                            
                            <input type="password" className='form-control mt-3' placeholder='Password:' value={password} 
                            onChange={(e)=>setPassword(e.target.value)} required />

                            <button className='btn btn-primary w-100 mt-4' onClick={submitLogin} >Enviar</button>
                            <p className='text-center mt-3'>{message}</p>
                            <hr />
                            <a href="/register" className="btn btn-primary w-100 mt-4">Registro</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 
export default Login;
