import React, {useState} from "react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";

function Dashboard(props) {
  const [currentEvent, setCurrentEvent] = useState({})

  return (
    <div>
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
          });
          modal.show();
        }}
        dateClick={(e) => {
          alert(e.date);
        }}
      />
          <div class="modal" id="eventModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h5 class="modal-title">{currentEvent.title}</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>;
    </div>
  );
}

export default Dashboard;
