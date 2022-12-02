import React from 'react';
import { Link } from 'react-router-dom';
function Login(props) {
    return (
        <div>
            <h1>Esta va a ser la página de Login</h1>
            <Link className='ms-2' to={'/'}>Index</Link>
            <Link className='ms-2' to={'/register'}>Registrarse</Link>
            <Link className='ms-2' to={'/login'}>Iniciar sesión</Link>
            <Link className='ms-2' to={'/dashboard'}>Dashboard</Link>
            <Link className='ms-2' to={'/add-event'}>Añadir evento</Link>
        </div>
    );
}

export default Login;