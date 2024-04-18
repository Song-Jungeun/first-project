import "../css/cbutton.css";

export default function Cbutton({
  children,
  backgroundColor,
  border,
  fontsize,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    border: border,
    fontSize: fontsize,
    whiteSpace: "nowrap",
  };
  return (
    <div>
      <button id="button1" style={buttonStyle}>
        {children}
      </button>
    </div>
  );
}
