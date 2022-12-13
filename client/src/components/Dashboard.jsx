import React, { useState } from "react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import { Link } from "react-router-dom";
import AWN from "awesome-notifications";

function Dashboard(props) {
  const [currentEvent, setCurrentEvent] = useState({});
  const [newEvent, setNewEvent] = useState({});

  let notifier = new AWN({
    durations: {
      global: 2000
    }
  });
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Event Manager Dashboard
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Welcome To The Evently App
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-2">
                <li class="nav-item">
                  <Link className="ms-2 float-right" to={"/add-event"}>
                    Create Event
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="ms-2 float-right" to={"/api/event/create"}>
                    Modify Event
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="ms-2 float-right" to={"/"}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <h1>Calendario</h1>
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
              <h5 class="modal-title">Evently</h5>
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
                  <button className="btn btn-info" type="submit">
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
              <h5 class="modal-title">Evently</h5>
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
                  <button className="btn btn-info" type="submit">
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
  );
}

export default Dashboard;
