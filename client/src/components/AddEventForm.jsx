import {React , useState} from "react";
import { Link } from "react-router-dom";
// import React, {useState } from "react";
// import axios from "axios";

function AddEventForm(props) {

    // const history = useHistory();

    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Date, setDate] = useState("");
    const [Ubication, setUbication] = useState("");
    const [Food, setFood] = useState([]);
    const [Music, setMusic] = useState([]);
    const [Photos, setPhotos] = useState([]);
    const [Decoration, setDecoration] = useState([]);

//errors
    const [errorRegistro, setErrorRegistro] = useState({});

//agree services
const [Agree, setAgree] = useState(false);


const NewEvent = e => {
    e.preventDefault();

    let data = {
        Name,
        Description,
        Date,
        Ubication,
        Food,
        Music,
        Photos,
        Decoration
    }
    console.log(data);


    // axios.post('http://localhost:8000/event/create', data, { withCredentials: true })
    //     .then(res => history.push('/dashboard'))
    //     .catch(err => setErrorRegistro(err.response.data.errors)); //setErrorRegistro(err.response.data.errors)
}



const AgreeServices = () =>{
    console.log("holi");
    setAgree(true);
}



    return (
        <div>
            <Link className="ms-2 float-right" to={"/"}>
                Index
            </Link>
            <h1>Registra un nuevo Evento </h1>

            <div className="row">
                <form
                    onSubmit={NewEvent}
                    className="my-3 col-8">

                    <div className="form-group">
                        <label htmlFor="firstName">Nombre de tu evento</label>
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                            className="form-control"
                        value={Name} onChange={e => setName(e.target.value)}
                        />
                    {errorRegistro.Name ? <span className="text-danger">{errorRegistro.Name.message}</span> : null} 
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Descripción</label>
                        <textarea className="form-control" id="Description" name="Description" rows="3" cols="33" placeholder="Agrega una breve Descripción..."
                        value={Description} onChange={e => setDescription(e.target.value)}
                        ></textarea>
                        {errorRegistro.Description ? <span className="text-danger">{errorRegistro.Description.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Date">Fecha</label>
                        <input
                            type="date"
                            name="Date"
                            id="Date"
                            className="form-control"
                        value={Date} onChange={e => setDate(e.target.value)}
                        />
                        {errorRegistro.Date ? <span className="text-danger">{errorRegistro.Date.message}</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Ubication">Ubicación</label>
                        <input
                            type="Ubication"
                            name="Ubication"
                            id="Ubication"
                            className="form-control"
                        value={Ubication} onChange={e => setUbication(e.target.value)}
                        />
                        {errorRegistro.Ubication ? <span className="text-danger">{errorRegistro.Ubication.message}</span> : null}
                    </div>

                    <div className="form-group">
                        <label htmlFor="Food">Comida</label>
                        <input type="Food" name="Food" id="Food" className="form-control"
                        value={Food} onChange={e => setFood(e.target.value)}
                        />
                        {errorRegistro.Food ? <span className="text-danger">{errorRegistro.Food.message}</span> : null}
                    </div>
                
                    

                    <input type="submit" value="Registarme" className="btn btn-primary my-3" />
                </form>

                <div className="form-group">
                        <button className="btn btn-success  my-2" onClick={AgreeServices}>Agregar Servicios</button>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default AddEventForm;
