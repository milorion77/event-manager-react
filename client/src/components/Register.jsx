import React, { useState } from 'react';
import axios from 'axios';
import logo from '../img/invitation/logo.jpeg'
import { useNavigate, Link } from 'react-router-dom';
import female from "../img/avatars/female.png";
import male from "../img/avatars/male.png";
import cat from "../img/avatars/cat.png";
import dog from "../img/avatars/dog.png";
import * as icon from "react-icons/io5"
import * as mdicon from "react-icons/md";
import * as iconn from "react-icons/bi";


function Register(props) {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Assistant, setAssistant] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



    const [errorRegister, setErrorsRegister] = useState({});

    const Assistants = ["female", "male", "cat", "dog",]

    const navigate = useNavigate();


    const changeAvatar = (value) => {
        setAssistant(value)

    }


    const register = e => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/register', {
            FirstName,
            LastName,
            Email,
            MobileNumber,
            Assistant,
            Password,
            confirmPassword

        }, { withCredentials: true })
            .then(res => navigate('/dashboard?'))
            .catch(err => setErrorsRegister(err.response.data.errors));

    }
    return (
        <div className='row'>
        <div className='col-7 color2'>
                <div>
                    <div className='cont3'>
                        <h1 className='white'> <iconn.BiUserPlus /> Registrarse</h1>
                        <div className="col-6">
                        <form onSubmit={register}>
                    <div className="form-group">
                        <label htmlFor="FirstName" className='white'><icon.IoPersonCircleSharp style={{ fontSize: "25px" }}/> Nombre</label>
                        <input  type="text" name="FirstName" id="FirstName" className="form-control" value={FirstName} onChange={e=> setFirstName(e.target.value)}  />
                        {errorRegister.FirstName ? <span className="text-danger">{errorRegister.FirstName.message}</span> : null}
                    </div> 
                    <div className="form-group">
                        <label htmlFor="LastName" className='white'><icon.IoPersonCircleSharp style={{ fontSize: "25px" }}/> Apellido</label>
                        <input type="text" name="LastName" id="LastName" className="form-control"  onChange={e=> setLastName(e.target.value)}  />
                        {errorRegister.LastName ? <span className="text-danger">{errorRegister.LastName.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email" className='white'><mdicon.MdEmail style={{ fontSize: "25px" }}/> E-mail</label>
                        <input type="Email" name="Email" id="Email" className="form-control" value={Email} onChange={e=> setEmail(e.target.value)}  />
                        {errorRegister.Email ? <span className="text-danger">{errorRegister.Email.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNumber" className='white'><mdicon.MdSettingsCell style={{ fontSize: "25px" }}/>Celular</label>
                        <input type="MobileNumber" name="MobileNumber" id="MobileNumber" className="form-control" value={MobileNumber} onChange={e=> setMobileNumber(e.target.value)}  />
                        {errorRegister.MobileNumber ? <span className="text-danger">{errorRegister.MobileNumber.message}</span> : null}
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="Password" className='white'><mdicon.MdPassword style={{ fontSize: "25px" }}/> Contraseña</label>
                        <input type="Password" name="Password" id="Password" className="form-control" value={Password} onChange={e=> setPassword(e.target.value)}  />
                        {errorRegister.Password ? <span className="text-danger">{errorRegister.Password.message}</span> : null}
                </div>    
                    <div className="form-group">
                        <label htmlFor="confirmPassword" className='white'><mdicon.MdPassword style={{ fontSize: "25px" }}/> Confirmar Contraseña</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}  />
                        {errorRegister.confirmPassword ? <span className="text-danger">{errorRegister.confirmPassword.message}</span> : null}
                    </div>
                    <label className='white'>Elije un Asisente</label>
                    <div className='row align-items-end'>
                    {Assistants.map(elemento =>(  
                    <div className="form-group col-3  ">
                        <input  id={"Assistant"+elemento} type="radio" name="Assistant"  value={elemento} onChange={e=>changeAvatar(e.target.value)}  />       
                        
                        <label classname=" " htmlFor="Assistant">
                        <img    src= {elemento === "female" ? female: elemento === "male" ? male: elemento === "cat" ? cat: dog } 
                        className="img-responsive " alt="avatar" width="80px" /> 

                    </label>
                    {errorRegister.Assistant ? <span className="text-danger">{errorRegister.Assistant.message}</span> : null}
                    </div>
                    ))}
                    </div>
                    <div class="d-grid gap-2 col-3 mx-auto">
                    <input type="submit" value="Registrarme" className="ms-2 btn1 " />
                    </div>
                    
                </form>
            </div>
                    </div>
                </div>
            </div>
            <div className='col-5 cont1'>
                <img src={logo} alt='logo' className='logo3'></img>
                <div className='buton'>
                <Link className='ms-2 btn2 b' to={'/login'}>Iniciar sesión</Link>
                </div>
            </div>
        </div>

    )
}

export default Register;