import './App.css';
import  freeCodeCampLogo from './imagenes/freeCodeCamp_logo.png'
import { Boton } from './componentes/Boton'
//import Boton from si fuera export default Boton;
import './hojas-de-estilo/Boton.css'
import { Contador } from './componentes/Contador';
import './hojas-de-estilo/Contador.css'
import { useState } from 'react'


function App() {
	
	const [numClicks, setNumClicks ] = useState(0)
	
	
	
	const manejarClick = () => {
		setNumClicks(numClicks + 1)
		
	}
	
	const reiniciarContador = () => {
		setNumClicks(0)
		
	}
	
	
  return (
    <div className="App">
		<div className="freecodecamp-logo-contenedor">
			<img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp" />
		</div>
		<div className="contenedor-principal">
			<Contador 
				nroClicks= {numClicks}
			/>
			<Boton
				texto="click"
				esBotonClick = {true}
				manejarClick = {manejarClick}
			/>
			<Boton
				texto="reinciar"
				esBotonClick = {false}
				manejarClick = {reiniciarContador}
			/>
		</div>
    </div>
  );
}

export default App;
