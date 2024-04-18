export default function Cinfoemation({ imagePath, children }) {
  return (
    <div id="information">
      <img id="information1" src={imagePath} alt={children} />
    </div>
  );
}
