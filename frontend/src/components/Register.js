import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();
let emailValid;
let passwordValid;
    const Register = async (e) => {
        e.preventDefault();
        try {
            if (name!=='' && email!=='' && password!==''){
                emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                passwordValid = password.length >= 6;
                if (!emailValid && passwordValid){
                    setMsg('Enter valid email');
                }
               else if (emailValid && !passwordValid){
                    setMsg('Password must be greater than 6 characters');
                }
                else if (!emailValid && !passwordValid){
                    setMsg('Enter valid email ,Password must be greater than 6 characters');
                }
                else if(emailValid && passwordValid){
                    await axios.post('http://localhost:5000/users', {
                        name: name,
                        email: email,
                        password: password,
                        confPassword: confPassword
                    });
                    history.push("/");  
                }
                     
                    
            }
            else{
                setMsg('Empty fields are not allowed');
            }
           
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-primary-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
