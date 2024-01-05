/* const title = <h1>Núcleo de la aplicación</h1>
const App = () => {
	console.log(title)
	// Imprime lo que es title. Es un objeto y lo importante es:
	// type -> Es el componente que es (h1), para que pueda pintarlo después.
	// props -> Propiedades de ese componente. En este caso sólo tenemos el contenido, que vá dentro de 'children'.
	return title;
}; */ /* 

export default App;
 */



// -----------------------------------------------

// Esta linea sale automática al seleccionar el componente en el return. Para que podamos seleccionarlo debemos tener abierto el componente. Si no sale, pulsar Ctr + Espacio y seleccionarlo por ahí.
// import Header from "./components/header/header";
// import Title from "./components/title/Title";

// Esto es un componente. Sólo se crea un componente por hoja, es decir, en el componente Title, NO SE PONE dentro del cógigo OTRO COMPONENTE.
// COMO App ya es un COMPONENTE, Title me lo llevo a la carpeta 'components'.

/* const Title = () => {
	return <h1>HOLA</h1>
} */

// const App = () => {
/* return Title(); // -> Así es como se pondría en jscript. */

// return <Title /> // -> En react la forma de ejecutar un componente se pone así.

// 	return <Header />
// }
// export default App;

//  --------------------------------------

/* const App = () => {
	return <h1>Núcleo de la aplicación</h1>;
};

export default App; */

// --------------------------------------

/* const number = 2;
const string = 'Cabra';
const isTrue = true; // valor booleano, null o undefine no se pinta en pantalla
const numbers = [1, 2, 3, 4, 5];
const myObject = { a: 1, b: 2 };

const App = () => {
	return (
		<>
			<h1>{number}</h1>
			<h1>{string}</h1>  
			<h1>{isTrue}</h1>
			<h1>{numbers.join(', ')}</h1>
			
			<h1>{`${myObject.a} ${myObject.b}`}</h1>
			<h1>
				a:{myObject.a}
				b:{myObject.b}
			</h1>

			<h1>{myObject.a}</h1>

		</>
	);
};

export default App; */

// ------- PROPS ---------

import Title from "./components/title/Title"

const App = () => {
	// Formato jscript
	// return Title('Soy una cabra');

	// Formato react
	// Por consola sale un objeto con el texto 'Soy una cabra.'
	// return <Title message='Soy una cabra.' />

	// Se pueden pasar todas las props que queramos.
	// Todo lo que no sea un string hay que ponerlo entre corchetes {}
	return <Title message='Soy una cabra' age={23}/>
}

export default App;