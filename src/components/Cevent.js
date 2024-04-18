import { children } from "react";
import "../css/cevent.css";

export default function Cevent({
  imagePath,
  children,
  backgroundColor,
  children1,
}) {
  const eventStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div id="eventcmain">
      <img id="eventc1" src={imagePath} alt={children} />
      <div id="eventc1-1" style={eventStyle}>
        <div id="eventc1-2">{children1}</div>
      </div>
    </div>
  );
}
