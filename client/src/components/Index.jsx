import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/invitation/logo.jpeg'

function Index(props) {
    return (
        <div >
            <div className='row'>
                <div className='col-6 cont1'>
                    <img src={logo} alt='logo' className='logo'></img>
                    <div className='buton'>
                        <Link className='ms-2 btn2 b' to={'/register'}>Registrarse</Link>
                        <Link className='ms-2 btn2 b' to={'/login'}>Iniciar sesión</Link>
                    </div>
                </div>
                <div className='col-6 color'>
                    <div >
                        <div className='cont3'>
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        ¿Que es evently?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <strong>Evently</strong> es una pagina web que te ayudara a crear tus propios eventos y te ayudara a poder recoradralos
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                        ¿como funciona Evently?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            Solo tienes que registrarte y crear una cuenta para poder gozar de todo lo que te brinda evently y empezar a crear tus increibles eventos
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;