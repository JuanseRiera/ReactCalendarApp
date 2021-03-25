import React from "react";

export const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  return (
    <>
      <strong>{title}</strong>
      <br />
      <span>Hecho por: {user.name}</span>
    </>
  );
};
