import React from 'react';

export function Boton({ texto, esBotonClick, manejarClick }) {
	return (
	 <button className={esBotonClick ? "boton-click" : "boton-reiniciar"} onClick={manejarClick}>
	 {texto}
	 </button>
	);


}
