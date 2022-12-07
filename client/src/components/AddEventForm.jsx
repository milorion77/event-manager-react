import { React, useState } from "react";
import { Link, } from "react-router-dom";
// import React, {useState } from "react";
import axios from "axios";

function AddEventForm(props) {

    // const history = useHistory();

    const [Name, setName] = useState("");
    const [Type, setType] = useState("");
    const [Description, setDescription] = useState("");
    const [Date, setDate] = useState("");
    const [Ubication, setUbication] = useState("");
    const [Food, setFood] = useState([]);
    const [Music, setMusic] = useState([]);
    const [Photos, setPhotos] = useState([]);
    const [Decoration, setDecoration] = useState([]);
    const [Status, setStatus] = useState([]);
    const [Services, setServices] = useState([]);

    //errors
    const [errorRegistro, setErrorRegistro] = useState({});

    //agree services
    const [Agree, setAgree] = useState(false);

    //select type

    const Events = ["Cumpleaños", "Matrimonio", "Primera Comunión", "Quinceañero", "Graduación"]


    const NewEvent = e => {
        console.log("arriba");
        e.preventDefault();

        let data = {
            Name,
            Type,
            Description,
            Date,
            Ubication,
            Food :[Services.Food,Status[0]],
            Music:[Services.Music,Status[1]],
            Photos:[Services.Photos ,Status[2]],
            Decoration:[Services.Decoration,Status[3]]
        }

        console.log(data);
        
        axios.post('http://127.0.0.1:8000/api/event/create', data, { withCredentials: true })
            .then(res => {
                console.log(res);
                setName("");
                setType("");
                setDescription("");
                setDate("");
                setUbication("");
                setFood([]);
                setMusic("");
                setDecoration("");
                setPhotos("");
                setAgree(false);

                console.log("guardé");

                // history.push('/dashboard')
            })
            .catch(err => {
                // console.log(err.response.data.errors);
                setErrorRegistro(err.response.data.errors)
            });
    }



    const AgreeServices = () => {

        console.log("holi");
        if (Agree) {
            setAgree(false);
        } else {
            setAgree(true);
        }

    }

    const OptionsChange = ({ target }) => {
        console.log(target);
        setServices({
            
            ...Services,
            [target.id]: target.value
        });
    }

    const StatusChange = ({ target }) => {

        setStatus([target.id === "status1", target.id === "status2", target.id === "status3", target.id === "status4"]);

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
                    className="my-3  col-8">

                    <div className="form-group">
                        <label htmlFor="Name">Nombre de tu evento</label>
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
                        <label htmlFor="Type">Selecciona el tipo de evento</label>

                        <select type="text" name="Type" id="Type" className="form-control"
                            value={Type} onChange={e => setType(e.target.value)}
                        >
                            <option value="" hidden>Selecciona una categoria</option>
                            {Events.map(element =>
                                <option   >{element}</option>


                            )}

                        </select>
                        {errorRegistro.Type ? <span classType="text-danger">{errorRegistro.Type.message}</span> : null}
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

                    {Agree ?
                        <>

                            <div className="form-group ">

                                <label htmlFor="Food">Comida</label>
                                <div className="d-flex">
                                    <input type="Food" name="Food" id="Food" className="form-control"
                                        value={Services[0]} onChange={OptionsChange} />
                                    <input className=" m-3" id="status1" type="checkbox" name="status"
                                        value={Status[0]} onChange={StatusChange}
                                    />
                                </div>

                            </div>

                            <div className="form-group ">

                                <label htmlFor="Music">Musicos</label>
                                <div className="d-flex">
                                    <input type="Music" name="Music" id="Music" className="form-control"
                                        value={Services[1]} onChange={OptionsChange} />
                                    <input className=" m-3" id="status1" type="checkbox" name="status"
                                        value={Status[1]} onChange={StatusChange}
                                    />
                                </div>

                            </div>

                            <div className="form-group ">

                                <label htmlFor="Photos">Fotografo</label>
                                <div className="d-flex">
                                    <input type="Photos" name="Photos" id="Photos" className="form-control"
                                        value={Services[2]} onChange={OptionsChange} />
                                    <input className=" m-3" id="status1" type="checkbox" name="status"
                                        value={Status[2]} onChange={StatusChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group ">

                                <label htmlFor="Decoration">Decoración</label>
                                <div className="d-flex">
                                    <input type="Decoration" name="Decoration" id="Decoration" className="form-control"
                                        value={Services[3]} onChange={OptionsChange} />
                                    <input className=" m-3" id="status1" type="checkbox" name="status"
                                        value={Status[3]} onChange={StatusChange}
                                    />
                                </div>
                            </div>

                        </>
                        : null}





                    <input type="submit" value="Registarme" className="btn btn-primary my-3" />
                </form>

                <div className="form-group">
                    <button className="btn btn-success  my-2" onClick={AgreeServices}>{Agree ? "Quitar Servicios" : "Agregar Servicios"}</button>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default AddEventForm;
