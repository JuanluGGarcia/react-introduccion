# ESTRUCTURA DE ARCHIVOS

* `public`
Aquí irán todos los recursos externos (imagenes, audio, video, ...). Todo lo que no sea código.

* `.eslintignore`
Nos dirá todo lo que hacemos mal. Errores que haya en el código.
En VSCode hay que instalar `ESLint (Microsoft)`.

* `.eslintrc.js`
Es la configuración de `eslint`.

* `.gitignore`
Archivos que no queremos que se suban a git.

* `.prettierignore`
Archivos que no queremos formatear con prettier.

* `.prettierrc`
Es la configuración de `prettier`.
En VSCode hay que intalar `Prettier-Code formatter (Prettier)`.

* `index.html`
Es un index.html normal.

* `package-lock.json`
Historial de todo lo que ha pasado. `NO SE TOCA`.

* `package.json`
Paquetes que tenemos instalados para que la plantilla funcione.

* `vite.config.js`
Configuración de `vite`. Es el que se encarga de convertir el código de react a un código que el navegador entienda.

* `src`
Dentro de esta carpeta tenemos:

* `main.jsx`
Archivo principal. Aquí es donde empieza todo.

* `App.jsx`
Es una función flecha que retorna un h1.

`---------------------------------`
Para cargar nuestro proyecto tenemos que poner:

`npm install` -> Instala los paquetes.
`npm run dev` -> Con esto veremos la web que estamos haciendo.

`---------------------------------`

* `components`
Carpeta donde se crean los componentes. Sólo puede haber 1 componente por hoja.
Se `crea una carpeta con el nombre del componente en minusculas` y `dentro de esta se crea componente`.
El componente `se crea con extensión jsx` en `camelCase` pero con `la primera letra en MAYUSCULAS` porque si no, no funciona en react.
Ej: TitleText.

`TODOS LOS COMPONENTE HAY QUE EXPORTARLOS`

# PROPS

# App.jsx
`Formato jscript`
return Title('Soy una cabra');

`Formato react`
`Por consola sale un objeto` con el texto 'Soy una cabra.'
return <Title message='Soy una cabra.' />

Se pueden pasar todas las props que queramos.
Todo lo que `no` sea un `string` hay que `ponerlo entre corchetes {}`
return <Title message='Soy una cabra.' age={23}/>

# Title
const Title = props => { // Si le pongo por ejemplo message en vez de props, se pone ({ message })
	console.log(props); // Sale por consola un objeto que tiene message: 'Soy una cabra' y age: 23
	return (
		<h1>
			{props.message} y tengo {props.age} años
		</h1>
	);
};

export default Title;


# CSS MODULES

Este archivo `se crea en la carpeta del componente` con el nombre: `nombrecomponente.module.css`

Es un archivo css normal.

Este archivo hay que importarlo al componente para que funcione, poniendo al principio del archivo del componente la linea: `import style from './nombrecomponente.module.css'`

Para usarlo se pondría:

# return (
#	<h1 className={style.nombredelaclase}>
#		{props.message} y tengo {props.age} años
#	</h1>
# );

Si el nombre de la clase es nombre compuesto, es decir, que lleva un - se pondría de la siguiente manera:

# return (
#	<h1 className={style['dark-orange']}>
#		{props.message} y tengo {props.age} años
#	</h1>
# );

Para poner dos clases se pondría con un template-string:

# return (
#	<h1 className={`${style['dark-orange']} ${style.xl}`}>
#		{props.message} y tengo {props.age} años
#	</h1>
# );