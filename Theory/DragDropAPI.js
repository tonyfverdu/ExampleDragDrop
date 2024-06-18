// HTML Drag and Drop API
/*
   En HTML, cualquier elemento se puede arrastrar y soltar, "drag and drop", es decir, un elemento HTML en la posicion A de un documento
   HTML se puede "seleccionar, arrastrar y soltar" en otra posicion del documento HTML.

  1.- Arrastrar y soltar elementos HTML. Caracteristica HTML.

      Arrastrar y soltar es una característica muy común en aplicaciones Web. Es cuando "agarras" un objeto y lo arrastras a una ubicación 
      diferente del documento HTML. El objeto se puede seleccionar, arrastrar y soltar en la misma ubicación o en una ubicación diferente.
      Parece facil, y queda bonito, pero entre "bambalinas" hay una API de HTML que permite realizar esta funcionalidad en cualquier elemento 
      HTML. Al principio puede parecer complicado, pero repasemos las diferentes partes de un evento de arrastrar y soltar.


  2.- HTML Drag and Drop API: Drag and Drop	4.0	9.0	3.5	6.0	12.0

      Ejemplo de arrastrar y soltar HTML: este es un ejemplo simple de arrastrar y soltar un elemento HTML en un documento HTML:

<!DOCTYPE HTML>
<html>
<head>

<script>
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

</head>

<body>

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">

</body>
</html>

*/


//  3.- Atributo "draggable": Hacer que un elemento HTML "se pueda arrastrar" por el documento: <element draggable="true" />
/*
        Primero que nada: para hacer que un elemento se pueda arrastrar, establezca el atributo "draggable" en verdadero:

        || Element HTML arrastable  || ==>  atributo "draggable" a true:  draggable="true"

                                            <img draggable="true">

            Nota.- Los enlaces (etiqueta <a>) y las imágenes se pueden arrastrar de forma predeterminada y no 
                   necesitan el atributo arrastrable a true.
*/


// 4.- Qué ocurre al "arrastrar" el elemento HTML? "ondragstart" y "setData()" en el elemento que es arrastable.
/*
       Luego, hay que especificar de alguna manera qué debería suceder cuando se arrastra el elemento, es decir, sabemos que un elemento
       HTML se puede arrastrar por que tiene su atributo "draggable" a "true", y se arrastra por el documento, pero que ocurre con ese 
       arrastre, es decir, que se produce en el evento de arrastrar.

       Para ello se utiliza el atributo: "ondragstart", que contendra una funcion JS, que nos dara la logica quer ocurre cuando se produce el 
       evento "arrastrar" sobre el elemento.

       En el ejemplo anterior, el atributo "ondragstart" llama a una función, "drag(ev)", que especifica qué datos del elemento "arrastable" 
       se arrastrarán.

       <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">

         function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
         }


       4.1.- El metodo "setData()" de ev.dataTransfer

             El metodo: "dataTransfer.setData()" establece el "tipo de datos" y el "valor de los datos" arrastrados. es decir, especifica que
             al arrastrar el elemento "arrastable" que datos (tipo de datos y valor de los datos arrastrados) son arrastrados del elemento en
             cuestion.

                function drag(ev) {
                  ev.dataTransfer.setData("text", ev.target.id);
                }


              En este caso, el tipo de datos es: "texto" y el valor es: "ev.target.id", la identificación del elemento que se puede arrastrar 
              ("drag1").
*/


// 5.- ¿Qué es el uso de "ondragover" y "ondrop" en el elemento HTML arrastable?
/*
       Ya sabemos decir que un elemento es arrastable, con el atributo draggable = "true". Tambien sabemos especificar que datos del elemento 
       HTML se arrastraran al ocurrir el evento "drag", gracias al atributo "ondragstart", que es el capturador del evento drag del elemento HTML,
       donde se especificara la "funcion capturadora del evento" que definira la logica del arrastre del elemento, es decir, que tipo de dato y 
       su valor se arrastraran:

       Ahora, lo unico que queda es especificar que ocurrira cuando se suelta el elemento "arrastrado" en una ubicacion predeterminada del documento,
       es decir el "drop" del elemento.


       5.1.- El evento "donde caer - o dejarse caer" ("drop") de un elemento HTML: "ondragover"

             El evento "ondragover" especifica "dónde" se pueden soltar los datos arrastrados. Es decir, con este evento se puede especificar, que 
             elemento(s) HTML se pueden utilizar para recibir los datos arrastrados de un elemento "arrastable".


             De forma predeterminada, los datos/elementos tampoco se pueden colocar en otros elementos HTML. Para permitir una caída de datos sobre 
             un elemento HTML, debemos primero evitar el manejo predeterminado del elemento. Esto es facil, utilizando: ev.preventDefault() en el
             metodo "ondragover" del elemento que recibe los datos del elemento arrastrado.

             Cuando se sueltan los datos arrastrados, se produce un "evento de colocación" de los datos sobre elemento HTML que los recibe.

             Elemento HTML que recibe los elementos "arrastables": colocamos en el atributo "ondrop" (escuchador de los eventos de recepcion de 
             datos de elementos arrastables) una funcion que especifique la logica de "colocacion de datos sobre el elemento receptor de la caida 
             de datos arrastrados"

                  <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

             En el ejemplo anterior, el atributo "ondrop" llama a una función: drop(event):

                  function drop(ev) {
                    ev.preventDefault();
                    const data = ev.dataTransfer.getData("text");
                    ev.target.appendChild(document.getElementById(data));
                  }

                      1.- Llame a preventDefault() para evitar que el navegador maneje los datos de forma predeterminada 
                          (el valor predeterminado es abrir como enlace al soltar).

                      2.- Obtenga los "datos arrastrados" con el método: "dataTransfer.getData()":

                            const data = ev.dataTransfer.getData("text")

                          Este método devolverá cualquier dato que se haya configurado en el mismo tipo en el método: setData()

                          Los datos arrastrados ("data") son la identificación del elemento arrastrado ("drag1")

                      3.- Agregue el elemento arrastrado al elemento de colocación

                            ev.target.appendChild(document.getElementById(data));
*/

//  6.- Eventos que se producen en el proceso de arrastrar y soltar un elemento HTML.
/*
        Existen una serie de "eventos" que  ocurren en las diferentes etapas de una operación de arrastrar y soltar. Estos eventos
        se producen o bien en el elemento que se arrastra (que lleva la informacion) o en el elemento HTML sobre el que se suelta, 
        que es el elemento objetivo de la operacion


        6.1.- En el elemento arrastrable:

              Evento "ondrag":	     An element is being dragged (arrastrado). El evento "ondrag" ocurre cuando se arrastra una selección.
                                     Nota: Al arrastrar un elemento, el evento ondrag se activa cada 350 milisegundos.

              Evento "ondragstart":  The user starts to drag an element. El evento "ondragstart" ocurre cuando el usuario comienza a 
                                     arrastrar una selección.

              Evento "ondragend":    The user has finished dragging an element. El evento "ondragend" ocurre cuando un usuario ha terminado 
                                     de arrastrar una selección.

        6.2.- En el elemento objetivo (de caida, receptor del elemento arrastable) :

              Evento "ondragenter":   The dragged element enters the drop target. El evento "ondragenter" ocurre cuando una selección que 
                                      se puede arrastrar "ingresa" a un destino de colocación .

              Evento "ondragleave":   Un elemento arrastrado abandona el destino de colocación

                                      Los eventos "ondragenter" y "ondragleave" pueden ayudar al usuario a comprender mejor cuándo un objeto 
                                      arrastrable está sobre el destino de colocación. Por ejemplo, estableciendo un color de fondo cuando 
                                      un elemento arrastrable ingresa al destino de colocación y eliminando el color cuando el elemento 
                                      se mueve fuera del destino.

              Evento "ondragover":    Un elemento arrastrado está sobre el destino de colocación., se arrastra sobre el elemento objetivo.

              Evento "ondrop":        Un elemento arrastrado se coloca sobre el elemento objetivo.



// 2.- Evento ondragover
/*
       El evento "ondragover" ocurre cuando una selección arrastrable se arrastra sobre un objetivo.

          Ejemplo: Llame a una función cuando un elemento se arrastra sobre un destino de colocación:

                    <div ondragover="myFunction(event)"></div>


      De forma predeterminada, los datos/elementos no se pueden colocar en otros elementos. Para permitir esto, colocar elementos
      sobre algun elemento, debemos evitar el comportamiento predeterminado del elemento. Esto se hace llamando al método: 
      "event.preventDefault()" dentro de la funcion llamada por el evento "ondragover".

                  myFunction (ev) {
                    ev.preventDefault();
                  }

      Arrastrar y soltar (drag and drop) es una característica común en HTML. Es cuando "agarras" un objeto (elemento HTML) y lo 
      arrastras a una ubicación diferente del documento HTML.

      Para hacer que un elemento se pueda "arrastrar" (drag), se debe utilizar el atributo "arrastrable" en el elemento en cuestion.

Para obtener más información, consulte el Tutorial de arrastrar y soltar HTML .

Los enlaces y las imágenes se pueden arrastrar de forma predeterminada y no necesitan el atributo arrastrable.

Muchos eventos ocurren en las diferentes etapas de una operación de arrastrar y soltar (ver a continuación):

Arrastrar eventos
En el elemento arrastrable:
Event	Occurs When
ondrag	An element is being dragged
ondragstart	The user starts to drag an element
ondragend	The user has finished dragging an element
Nota: Al arrastrar un elemento, el evento ondrag se activa cada 350 milisegundos.

En el objetivo de caída:
Evento	Ocurre cuando
mas insoportable	Un elemento arrastrado ingresa al destino de colocación
ondragleave	Un elemento arrastrado abandona el destino de colocación
ondragover	Un elemento arrastrado está sobre el destino de colocación
caer	Un elemento arrastrado se suelta sobre el objetivo.
Ver también:
El objeto de evento de arrastre
El atributo arrastrable

Tutorial:
Arrastrar y soltar HTML

Sintaxis
En HTML:

<element ondragover="myScript">
En JavaScript:

object.ondragover = function(){myScript};
En JavaScript, usando el método addEventListener():

object.addEventListener("dragover", myScript);
Detalles técnicos
Burbujas:	Sí
Cancelable:	Sí
Tipo de evento:	Arrastrar evento
Etiquetas HTML:	Todos los elementos HTML
Versión DOM:	Eventos de nivel 3
ANUNCIO

ANUNCIO

Más ejemplos
Ejemplo
Una demostración de TODOS los posibles eventos de arrastrar y soltar:

<p draggable="true" id="dragtarget">Drag me!</p>

<div class="droptarget">Drop here!</div>

<script>
// Events fired on the drag target

document.addEventListener("dragstart", function(event) {
  // The dataTransfer.setData() method sets the data type and the value of the dragged data
  event.dataTransfer.setData("Text", event.target.id);

  // Output some text when starting to drag the p element
  document.getElementById("demo").innerHTML = "Started to drag the p element.";

  // Change the opacity of the draggable element
  event.target.style.opacity = "0.4";
});

// While dragging the p element, change the color of the output text
document.addEventListener("drag", function(event) {
  document.getElementById("demo").style.color = "red";
});

// Output some text when finished dragging the p element and reset the opacity
document.addEventListener("dragend", function(event) {
  document.getElementById("demo").innerHTML = "Finished dragging the p element.";
  event.target.style.opacity = "1";
});


// Events fired on the drop target

// When the draggable p element enters the droptarget, change the DIVS's border style
document.addEventListener("dragenter", function(event) {
  if ( event.target.className == "droptarget" ) {
    event.target.style.border = "3px dotted red";
  }
});

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

// When the draggable p element leaves the droptarget, reset the DIVS's border style
document.addEventListener("dragleave", function(event) {
  if ( event.target.className == "droptarget" ) {
    event.target.style.border = "";
  }
});

/* On drop - Prevent the browser default handling of the data (default is open as link on drop)
Reset the color of the output text and DIV's border color
Get the dragged data with the dataTransfer.getData() method
The dragged data is the id of the dragged element ("drag1")
Append the dragged element into the drop element
*/
document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      document.getElementById("demo").style.color = "";
      event.target.style.border = "";
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });
  </script>
*/