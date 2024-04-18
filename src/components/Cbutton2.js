import "../css/cbutton2.css";

export default function Cburron2({ children, fontsize, fontweight }) {
  const button2Style = {
    fontSize: fontsize,
    fontWeight: fontweight,
  };
  return (
    <button id="button2-1" style={button2Style}>
      {children}
    </button>
  );
}
