import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import logo from '../img/invitation/logo.jpeg'
import * as mdicon from "react-icons/md";


function Login(props) {

    //Para Formulario de Inicio de Sesión
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const [errorLogin, setErrorLogin] = useState("");
    const navigate = useNavigate();

    const login = e => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/login', {
            Email: emailLogin,
            Password: passwordLogin
        }, { withCredentials: true })
            .then(res => {
                if (res.data.error) {
                    setErrorLogin(res.data.message);
                } else {
                    navigate('/dashboard');
                }
            })
            .catch(err => console.log(err));
    }



    return (
        <div>
            <div className='row'>
                <div className='col-5 cont1'>
                    <img src={logo} alt='logo' className='logo2'></img>
                    <div className='buton'>
                        <Link className='ms-2 btn2 b' to={'/register'}>Registrarse</Link>
                    </div>
                </div>
                <div className='col-7 color'>
                    <div >
                        <div className='cont3'>
                            <h1 className='sesion'><mdicon.MdLogin /> Iniciar Sesion 🚀</h1>
                            <form onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="emailLogin" className='white'><mdicon.MdEmail style={{ fontSize: "25px" }}/> E-mail</label>
                        <input type="email" name="emailLogin" id="emailLogin" className="form-control" value={emailLogin} onChange={e => setEmailLogin(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordLogin" className='white'><mdicon.MdPassword style={{ fontSize: "25px" }}/> Password</label>
                        <input type="password" name="passwordLogin" id="passwordLogin" className="form-control" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} />
                    </div>
                    <div>
                        {errorLogin !== "" ? <span className="text-danger">{errorLogin}</span> : null}
                    </div>
                    <div class="d-grid gap-2 col-3 mx-auto">
                    <input type="submit" value="Iniciar Sesión" className="ms-2 btn1 " />
                    </div>
                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;