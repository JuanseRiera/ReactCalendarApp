import React, { useState } from "react";
import { Navbar } from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../helpers/calendar-messages-es";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";

moment.locale("es");
const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Cumpleaños",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "fafafa",
    user: {
      id: "123",
      name: "Juanse",
    },
  },
];

export const CalendarioScreen = () => {
  const [LastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: "#e84545",
      borderRadius: "3px",
      border: "#e84545 solid",
      display: "block",
      color: "white",
    };
    return {
      style,
    };
  };

  const onDoubleClick = (e) => {
    console.log(e);
  };

  const onSelect = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="px-5 pt-3">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          eventPropGetter={eventStyleGetter}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onView={onViewChange}
          view={LastView}
          messages={messages}
          components={{
            event: CalendarEvent,
          }}
        />
      </div>
      <CalendarModal></CalendarModal>
    </div>
  );
};
