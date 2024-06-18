import { useRef, useContext } from "react";
import { DragDropContext } from "../Context/ContextProvider.jsx";
import "./DragDropFiles.css";

const DragDropFiles = () => {
  const {state, files, setFiles, handleDragOver, handleDrop, handleDragLeave} = useContext(DragDropContext);
  
  const inputRef = useRef();

  // Send files to the server
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };

  const handleCancel = () => {
    setFiles(null)
  }
 
  if (files) return (
    <div className="uploads">
      <ul>
        {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
      </ul>
      <div className="actions">
        <button className="btn" onClick={() => handleCancel()}>Cancel</button>
        <button className="btn" onClick={handleUpload}>Upload</button>
      </div>
    </div>
  )

  return (
    <section className="sect_DragDropFiles">
      <section className={`${state.dragOver ? 'sect_dropzone dragOver' : 'sect_dropzone'}`}
        onDragOver={(ev) => handleDragOver(ev)}
        onDragLeave={(ev) => handleDragLeave(ev)}
        onDrop={(ev) => handleDrop(ev)}
      >
        <header className="headerDragDropFiles">
          <h4 className="titleDragDropFiles">Drag and Drop Files to Upload</h4>
          <h4>Or</h4>
        </header>

        <input
          type="file"
          className="input_file"
          multiple
          onChange={(event) => setFiles(event.target.files)}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
        <button type="button" className="btn" onClick={() => inputRef.current.click()}>Select Files</button>
      </section>
    </section>
  );
};

export default DragDropFiles;

/*
    Eventos sobre el elemento a soltar el elemento "draggable":

    1.- onDragOver ==>> handleDragOver: Este evento se dispara cuando se arrastra el elemento "draggable" sobre el elemento
                        a soltar.

                        Se llama a la función "handleDragOver", que se encarga de controlar el comportamiento durante el arrastre. 
                        En este caso, se utiliza para cambiar el estilo del elemento cuando se realiza un movimiento de arrastre.

                                                  const handleDragOver = (ev) => {
                                                    ev.preventDefault();
                                                    setStateElement({ dragOver: true, dragLeave: false, dragDrop: false })
                                                  };                          
                                                  
                        Llame a este evento, que se gestiona con su funcion "controlador de eventos", cuando un elemento "draggable"
                        se arrastra sobre un "destino de colocación":

                                                  <div ondragover="myFunction(event)"></div>

                        El evento "ondragover" ocurre cuando un elemento HTML "arrastable" (draggable) se arrastra sobre un elemento HTML 
                        objetivo (otro elemento HTML)

                        De forma predeterminada, los datos/elementos no se pueden colocar en otros elementos. Para permitir una "caída"
                        (drop) de datos del elemento "arrastable" sobre el elemento "objetivo", debemos evitar el manejo predeterminado del 
                        elemento. Esto se hace llamando al método "event.preventDefault()" para el evento: "ondragover".

                            Nota.- Asi que, la funcion a ejecutar en este evento POR LO MENOS tendra la sentencia: ev.preventDefault()

    2.- onDragLeave ==>> handleDragLeave: Este evento se dispara cuando se arrastra "fuera" del área de arrastre del elemento a soltar (drop). 
                                          Se llama a la función "handleDragLeave", que se encarga de cambiar el estilo del elemento 
                                          cuando se realiza un movimiento de arrastre fuera del area del elemento objetivo a soltar.

    3.- 

*/
