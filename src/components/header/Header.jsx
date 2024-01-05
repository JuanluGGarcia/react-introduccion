const Header = () => {
	// Esto da fallos porque NO SE PUEDE DEVOLVER más de 1 objeto. Para intentar devolver más de 1 objeto hay que envolverlos dentro de otro objeto.
	return (

        // Esto nos pinta un div
		
        /* <div>
			<h1>Soy un título</h1>
			<h2>Soy un subtítulo</h2>
		</div> */

        // Si no queremos que nuestros componentes esten dentro de un div podemos ponerlo así.
        // Al comprobarlo en los elementos de la web vemos que NO HAY DIV ENVOLVIENDO a h1 y h2.
        <>
			<h1>Soy un título</h1>
			<h2>Soy un subtítulo</h2>
		</>
	);
};

export default Header;