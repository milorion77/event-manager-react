import React from "react";
import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function Dashboard(props) {

  return (
    <div>
      <h1>Calendario</h1>
      <FullCalendar
        locale={"esLocale"}
        height={"auto"}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridWeek"
        events={[
          { title: 'event 1', date: '2022-12-03' },
          { title: 'event 2', date: '2022-12-04' }
        ]}
      />
    </div>
  );
}

export default Dashboard;
