import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


function Register(props) {
    
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Assistant, setAssistant] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorRegister, setErrorsRegister] = useState({});
    
    const navigate = useNavigate();
    let name = "nombre"
    const register = e => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/register',{
            FirstName:name,
            LastName,
            Email,
            MobileNumber,
            Assistant,
            Password,
            confirmPassword

        }, {withCredentials: true})
            .then(res => navigate('/'))
            .catch(err => setErrorsRegister(err.response.data.errors));
            
    }        
    return (

    <div className="formulario">
            <div className="col-6">
                <h2>Registration</h2>
                <form onSubmit={register}>
                    {/* <div className="form-group">
                        <label htmlFor="FirstName">Nombre</label>
                        <input  type="text" 
                                name="FirstName" 
                                id="FirstName" 
                                className="form-control" 
                                value={FirstName} 
                                onChange={e=> setFirstName(e.target.value)}  />
                        {errorRegister.FirstName ? <span className="text-danger">{errorRegister.FirstName.message}</span> : null}
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="LastName">Apellido</label>
                        <input type="text" name="LastName" id="LastName" className="form-control"  onChange={e=> setLastName(e.target.value)}  />
                        {errorRegister.LastName ? <span className="text-danger">{errorRegister.LastName.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" className="form-control" value={Email} onChange={e=> setEmail(e.target.value)}  />
                        {errorRegister.Email ? <span className="text-danger">{errorRegister.Email.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input type="MobileNumber" name="MobileNumber" id="MobileNumber" className="form-control" value={MobileNumber} onChange={e=> setMobileNumber(e.target.value)}  />
                        {errorRegister.MobileNumber ? <span className="text-danger">{errorRegister.MobileNumber.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="assistant">Assistant</label>
                        <input type="Assistant" name="Assistant" id="Assistant" className="form-control" value={Assistant} onChange={e=> setAssistant(e.target.value)}  />
                        {errorRegister.Assistant ? <span className="text-danger">{errorRegister.Assistant.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="Password" name="Password" id="Password" className="form-control" value={Password} onChange={e=> setPassword(e.target.value)}  />
                        {errorRegister.Password ? <span className="text-danger">{errorRegister.Password.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmación</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}  />
                        {errorRegister.confirmPassword ? <span className="text-danger">{errorRegister.confirmPassword.message}</span> : null}
                    </div>
                    <input type="submit" value="Registarme" className="btn btn-primary" />
                </form>
            </div>

            </div>
    )
}

export default Register;