import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

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
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }



    return (
        <div>
            <header className="layout__navbar">
            <Link className='ms-2' to={'/'}>Index</Link>
            <Link className='ms-2' to={'/register'}>Registrarse</Link>
            <Link className='ms-2' to={'/login'}>Iniciar sesión</Link>
            <Link className='ms-2' to={'/dashboard'}>Dashboard</Link>
            <Link className='ms-2' to={'/add-event'}>Añadir evento</Link>
            </header>

            <div className="col-12">
                <h2>Iniciar Sesión 🚀</h2>
                <form onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="emailLogin">E-mail</label>
                        <input type="email" name="emailLogin" id="emailLogin" className="form-control" value={emailLogin} onChange={e => setEmailLogin(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordLogin">Password</label>
                        <input type="password" name="passwordLogin" id="passwordLogin" className="form-control" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} />
                    </div>
                    <div>
                        {errorLogin !== "" ? <span className="text-danger">{errorLogin}</span> : null}
                    </div>
                    <input type="submit" value="Iniciar Sesión" className="btn btn-info" />
                </form>
            </div>
        </div >
    );
}

export default Login;