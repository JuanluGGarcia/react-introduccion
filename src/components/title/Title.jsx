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

const Title = props => {
	console.log(props); // Sale por consola un objeto que tiene message: 'Soy una cabra' y age: 23
	return (
		<h1>
			{props.message} y tengo {props.age} años
		</h1>
	);
};

export default Title;
