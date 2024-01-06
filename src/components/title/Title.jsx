/* const Title = () => {
	return <h1>HOLA</h1>
}
// Importante que no se olvide el export default para que exporte el componente.
export default Title; */

// ------- PROPS ---------

/* const Title = (text) => {
	console.log(text); // Sale por consola 'Soy una cabra'
	return <h1>HOLA</h1>
};

export default Title; */

/* const Title = props => {
	console.log(props); // Sale por consola un objeto que tiene message: 'Soy una cabra' y age: 23
	return (
		<h1>
			{props.message} y tengo {props.age} años
		</h1>
	);
};

export default Title; */

// ----------------------------------

// ------------CSS MODULES-----------
import style from './title.module.css'
const Title = props => {
	console.log(props); // Sale por consola un objeto que tiene message: 'Soy una cabra' y age: 23

	// className={style.red} me pinta el h1 de color rojo. Esta clase la he creado en title.module.css
	// Si el nombre tiene un - se pondría: className={style['dark-orange']} 
	// Si vamos a poner 2 clases, se pondría con un template-string quedando de la siguiente manera:
	// className={`${style['dark-orange']} ${style.xl}`}>
	return (
		// <h1 className={style.red}>
		// <h1 className={style['dark-orange']}> 
		<h1 className={`${style['dark-orange']} ${style.xl}`}> 
			{/* {props.message} y tengo {props.age} años */}
			{props.message}
		</h1>
	);
};

export default Title;

