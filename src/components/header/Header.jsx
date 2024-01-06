// const Header = () => {
	// Esto da fallos porque NO SE PUEDE DEVOLVER más de 1 objeto. Para intentar devolver más de 1 objeto hay que envolverlos dentro de otro objeto.
	// return (

        // Esto nos pinta un div
		
        /* <div>
			<h1>Soy un título</h1>
			<h2>Soy un subtítulo</h2>
		</div> */

        // Si no queremos que nuestros componentes esten dentro de un div podemos ponerlo así.
        // Al comprobarlo en los elementos de la web vemos que NO HAY DIV ENVOLVIENDO a h1 y h2.
        /* <>
			<h1>Soy un título</h1>
			<h2>Soy un subtítulo</h2>
		</> */

		
// 	);
// };

// RETORNAR HIJOS
const Header = (props) => {
	// Cuando tengamos un componente que actua como contenedor para otras cosas, para que pinte lo que tiene dentro se pondría de la siguiente manera.
	console.log(props);

	// Hay que poner {props.children} para que pinte lo que tiene dentro, que son los 3 h1 de Title.
	return <header>{props.children}</header>;
};

export default Header;