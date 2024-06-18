import { useContext } from 'react';
import { DragDropContext } from "../Context/ContextProvider.jsx";

import "./SortTableList.css";


function SortTableList() {
  const { state, sports, setSports, dragOverItemIndex, setDragOverItemIndex, handleDragStart, handleDragEnd, handleResetSports, handleSortSports } = useContext(DragDropContext);

  const handleDragOver = ev => {
    ev.preventDefault()
  }

  const handleDrop = () => {
    const sports_copy = [...sports];
    const sport_draggable = sports_copy.find(sport => sport.id === state.dragItemIndex)
    const new_sports = sports_copy.filter(sport => sport.id !== sport_draggable.id)
    new_sports.splice(dragOverItemIndex, 0, sport_draggable)

    setSports(new_sports)
  }

  const handleDragEnter = index => {
    setDragOverItemIndex(index);
  }

  const handleDragLeave = (ev) => {
    ev.preventDefault();
    setDragOverItemIndex(undefined)
  }

  return (
    <section className="sect_sort_table_list">
      <header className="header_sort_table_list" >
        <h4 className="title_sort_table_list">Favorite Sports</h4>
      </header>

      <ul className="ul_list">
        {Array.isArray(sports) && sports.length > 0 && sports.map((sport, index) => (
          <li
            key={sport.id}
            className={dragOverItemIndex === index ? "list-item next-position" : "list-item"}
            draggable
            onDragStart={() => handleDragStart(sport.id)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop()}
            onDragEnter={() => handleDragEnter(index)}
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}

          >
            <span className="span_index_sport">{index}</span>
            <p className="p_name_sport">{sport.name} <span className="span_emoji">{sport.emoji}</span></p>
          </li>
        ))}
      </ul>

      <div className="groupButtons">
        <button type="button" className="btn" onClick={handleSortSports}>Sort</button>
        <button type="button" className="btn" onClick={handleResetSports}>Reset</button>
      </div>
    </section>
  );
}

export default SortTableList;

//  Nota.- El elemento <li draggable ...> es "arrastable", al tener el atributo "draggable" a true.

//         Eventos utilizados en este elemento HTML li:

//         onDragStart={() => handleDragStart(index)}: Este evento se dispara cuando comienza un arrastre en el elemento. 
//                                                     Se llama a la función "handleDragStart" y se pasa el índice del elemento 
//                                                     como argumento. Esta función se encarga de inicializar los datos del 
//                                                     arrastre y establecer el elemento como arrastrable.

//         En el atributo: "ondragstart", del elemento <li> se definira "que ocurrira" con los datos al arrastrar el elemento <li>, 
//         es decir, que se produce en el evento de arrastrar. para ello colocamos una funcion: handleDragStart(ev), que nos definira
//         los datos que se arrastraran con el elemento.

//          const handleDragStart = index => {
//            setDragItemIndex(index)              // <== Guardara en la variable de estado dragItemIndex, el "index" del elemento arrastrado.
//          };

/*

           onDragOver ==>> {handleDragOver}: Este evento se dispara cuando se arrastra sobre el elemento. 
                                             Se llama a la función handleDragOver, que se encarga de controlar el comportamiento durante el 
                                             arrastre. En este caso, se utiliza para cambiar el estilo del elemento cuando se realiza un 
                                             movimiento de arrastre.

                                                  const handleDragOver = event => {
                                                    event.preventDefault();
                                                  };
                                                  
                                             Llame a una función cuando un elemento se arrastra sobre un destino de colocación:

                                                  <div ondragover="myFunction(event)"></div>

                                             El evento "ondragover" ocurre cuando un elemento HTML "arrastable" (draggable) se arrastra sobre 
                                             un objetivo (otro elemento HTML)

            De forma predeterminada, los datos/elementos no se pueden colocar en otros elementos. Para permitir una caída de datos del elemento
            "arrastable" sobre el elemento "objetivo", debemos evitar el manejo predeterminado del elemento. Esto se hace llamando al método
            "event.preventDefault()"" para el evento: "ondragover".

               Nota.- Asi que, la funcion a ejecutar en este evento POR LO MENOS tendra la sentencia: ev.preventDefault()


           OnDrop     ==>>  handleDrop(index)}: Este evento se dispara cuando se suelta el arrastre en el elemento objetivo. 
                                                Se llama a la función "handleDrop" y se pasa el índice del elemento como argumento. 
                                                Esta función se encarga de realizar la acción correspondiente cuando se suelta el arrastre, 
                                                como cambiar la posición del elemento en la lista.

           onDragEnter ==>> handleDragEnter(index)}: Este evento se dispara cuando se arrastra sobre el elemento y se entra en su área de arrastre. 
                                                     Se llama a la función handleDragEnter y se pasa el índice del elemento como argumento. 
                                                     Esta función se encarga de cambiar el estilo del  elemento cuando se realiza un movimiento 
                                                     de arrastre.

           onDragLeave ==>> handleDragLeave: Este evento se dispara cuando se arrastra fuera del área de arrastre del elemento. 
                                             Se llama a la función handleDragLeave, que se encarga de cambiar el estilo del elemento 
                                             cuando se realiza un movimiento de arrastre.

*/