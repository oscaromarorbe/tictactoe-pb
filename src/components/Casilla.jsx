

function Casilla({setValue, id, val}) {
  return (
    <p className="casilla" onClick={() => setValue(id)}>{val}</p>
  );
}

export default Casilla;
