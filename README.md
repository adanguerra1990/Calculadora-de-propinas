# Frontend Mentor - Tip calculator app

# JavaScript

El código proporcionado es un bloque de código JavaScript que se ejecuta cuando la ventana se carga completamente. Aquí hay una explicación detallada del código:

1. La función `window.onload` se establece como un evento que se activa cuando la ventana se carga completamente[^0^]. Esto significa que todo el contenido de la página, incluidos los recursos dependientes, como imágenes y scripts, se han cargado.

2. Se seleccionan varios elementos del DOM utilizando métodos como `document.getElementById` y `document.querySelector`[^1^]. Estos métodos se utilizan para obtener referencias a elementos HTML específicos en la página utilizando sus identificadores o selectores de clase.

3. Se agregan varios escuchadores de eventos a los elementos seleccionados. Por ejemplo, se agrega un escuchador de eventos `input` al elemento `personasInput` y al elemento `customPorcentajeInput`[^4^]. Cuando se produce un evento `input` en estos elementos, se ejecuta la función `campoCustomPoncentaje`.

4. La función `campoCustomPoncentaje` se define para calcular y actualizar los valores de la propina en función de los valores ingresados en los campos de entrada[^1^]. Esta función realiza los siguientes pasos:

   - Obtiene los valores ingresados en los campos de entrada utilizando métodos como `parseFloat` y `parseInt`.
   - Verifica si alguno de los valores es `NaN` (no es un número). Si alguno de los valores es `NaN`, se deshabilita el botón de reinicio y se establece el contenido de los elementos de propina en "0.00".
   - Si todos los valores son números válidos, se calcula la propina por persona y la propina total.
   - Se actualiza el contenido de los elementos de propina con los valores calculados utilizando el método `toFixed` para mostrar solo dos decimales.

5. La función `btnCalculoPorcentaje` se define para manejar el evento de clic en los botones de porcentaje[^11^]. Esta función realiza los siguientes pasos:

   - Verifica si el botón de clic contiene la clase CSS "btn-porcentaje".
   - Si el botón de clic es un botón de porcentaje válido, se obtiene el valor del porcentaje del botón, el monto de la factura y el número de personas.
   - Se realiza una verificación similar a la función `campoCustomPoncentaje` para verificar si los valores son números válidos.
   - Si todos los valores son válidos, se calcula la propina por persona y la propina total.
   - Se actualiza el contenido de los elementos de propina con los valores calculados y se agrega la clase CSS "active" al botón de clic.

6. La función `limpiarCampos` se define para restablecer todos los campos de entrada y los elementos de propina a sus valores predeterminados[^1^]. Esta función se ejecuta cuando se hace clic en el botón de reinicio.

En general, este código se utiliza para calcular y mostrar la propina en función de la factura, el porcentaje de propina y el número de personas. También proporciona la funcionalidad de restablecer los campos de entrada y los elementos de propina.

# Gulp

Este proyecto utiliza Gulp para automatizar las tareas de compilación y minificación de archivos CSS y JS.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias de Gulp.

## Uso

- Ejecuta `gulp css` para compilar los archivos SCSS a CSS, aplicar autoprefijos y minificar el CSS resultante.
- Ejecuta `gulp js` para comprimir los archivos JS.
- Ejecuta `gulp dev` para iniciar el modo de desarrollo y observar los cambios en los archivos SCSS y JS.

## Estructura de archivos

- `src/scss`: Archivos fuente SCSS.
- `src/js`: Archivos fuente JS.
- `build/css`: Archivos CSS compilados y minificados.
- `build/js`: Archivos JS comprimidos.

## Contribución

Si quieres contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza los cambios necesarios y realiza un commit: `git commit -m "Agrega mi nueva funcionalidad"`.
4. Haz un push a la rama: `git push origin mi-nueva-funcionalidad`.
5. Abre un Pull Request en GitHub y describe los cambios propuestos.

¡Gracias por tu contribución!
