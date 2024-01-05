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





