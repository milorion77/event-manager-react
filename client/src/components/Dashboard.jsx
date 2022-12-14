import React, { useState } from "react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import { Link } from "react-router-dom";
import AWN from "awesome-notifications";
import avatar from "../img/avatars/FEMALE-STAY.gif";
import axios from "axios";
import logo from '../img/invitation/logo.jpeg'

function Dashboard(props) {
  const [currentEvent, setCurrentEvent] = useState({});
  const [newEvent, setNewEvent] = useState({});

  let notifier = new AWN({
    durations: {
      global: 2000
    }
  });
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="bar" to={'/add-event'}>Agregar evento</Link>
              </li>
            </ul>
          </div>
          <img src={logo} alt='logo' className='logonav'></img>
        </div>
      </nav>
      <div className="row">
        <div className="col-9 calendar">
          <FullCalendar
            buttonText={{ today: "Hoy" }}
            editable={"true"}
            locale={"esLocale"}
            height={"auto"}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={[
              {
                title: "Boda de Miguel",
                start: "2022-12-03T14:30:00",
              },
              { title: "Boda de Sara", start: "2022-12-03T17:30:00" },
            ]}
            eventClick={(info) => {
              const modal = new bootstrap.Modal("#eventModal", {
                keyboard: false,
              });
              setCurrentEvent({
                title: info.event.title,
                date: info.event.start.toISOString().split("T")[0],
                hour: info.event.start.toISOString().slice(11, 16),
              });
              modal.show();
            }}
            dateClick={(info) => {
              const actual_date = new Date();
              if (info.date < actual_date) {
                notifier.alert('No puedes crear eventos en el pasado')
              } else {
                const modal = new bootstrap.Modal("#newModal", {
                  keyboard: false,
                });
                setNewEvent({
                  date: info.date.toISOString().split("T")[0],
                });
                modal.show();
              }
            }}
          />
          <div class="modal text-start" id="eventModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h5 class="modal-title"><img src={logo} alt='logo' className='logonav'></img></h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div className="form-group mb-3">
                      <label>Title</label>
                      <input
                        type={"text"}
                        className="form-control"
                        value={currentEvent.title}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Categoría</label>
                      <input
                        type={"text"}
                        className="form-control"
                        value={"Cumpleaños"}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Descripción</label>
                      <input
                        type={"text"}
                        className="form-control"
                        value={"Evento de boda"}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Fecha</label>
                      <input
                        type={"date"}
                        className="form-control"
                        value={currentEvent.date}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Hora</label>
                      <input
                        type={"time'"}
                        className="form-control"
                        value={currentEvent.hour}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Ubicación</label>
                      <input
                        type={"text"}
                        className="form-control"
                        value={"Rionegro"}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <button className="btn btn2" type="submit">
                        Editar
                      </button>
                    </div>
                  </form>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>

          <div class="modal text-start" id="newModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h5 class="modal-title"><img src={logo} alt='logo' className='logonav'></img></h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div className="form-group mb-3">
                      <label>Title</label>
                      <input type={"text"} className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                      <label>Categoría</label>
                      <input type={"text"} className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                      <label>Descripción</label>
                      <input type={"text"} className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                      <label>Fecha</label>
                      <input
                        type={"date"}
                        className="form-control"
                        disabled
                        value={newEvent.date}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Hora</label>
                      <input type={"time'"} className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                      <label>Ubicación</label>
                      <input type={"text"} className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                      <button className="btn btn2" type="submit">
                        Crear evento
                      </button>
                    </div>
                  </form>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 align-self-end">

          <img src={avatar} width="250px" alt="asistente" id="avatar" className="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
