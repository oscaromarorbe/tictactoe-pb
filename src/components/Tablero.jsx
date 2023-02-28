import { useState } from 'react';
import Casilla from './Casilla';
import "../styles/styles.css";

function rellenarArray(arr) {
	for (let i = 0; i < 9; i++) {
		arr[i] = ""
	}
	return arr
}

function Tablero({start}) {
	const arr = new Array(9)
	const [casillas, setCasillas] = useState(rellenarArray(arr))
	const [jugador, setJugador] = useState(start)
	function setValue(index) {
			const arr = casillas;
			arr[index] = jugador
			setCasillas(arr)
			setJugador((prev) => prev === "x" ? "o" : "x")
	}
  return (
    <div className='tablero'>
			{casillas.map((val, index) => {
				return (<Casilla key={index} val={val} id={index} setValue={setValue} />)
			})}
    </div>
  );
}

export default Tablero;
