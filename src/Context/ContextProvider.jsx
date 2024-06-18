import { useState, createContext, useReducer } from 'react';
import { reducer_dragdrop } from '../Reducers/reducer_dragdrop.js'
import { SPORTS_JSON, ACTIONS_DRAG_DROP, STATE_INI_ELEMENT_DROP } from "../Constants/constants.js";

export const DragDropContext = createContext(null);


function ContextProvider({ children }) {
  const [sports, setSports] = useState(SPORTS_JSON);
  const [files, setFiles] = useState(null);
  const [dragOverItemIndex, setDragOverItemIndex] = useState(null);

  const [state, dispatch] = useReducer(reducer_dragdrop, STATE_INI_ELEMENT_DROP);

  // 1.- Handle Events Functions of Drag and Drop Files
  const handleDragStart = index => {
    dispatch({ type: ACTIONS_DRAG_DROP.DRAG_START, payload: index });
  };

  // 2.- Event "ondragover" => arrastre del elemento "draggable" sobre el elemento a soltar (Drop)
  const handleDragOver = (ev) => {
    ev.preventDefault();
    dispatch({ type: ACTIONS_DRAG_DROP.DRAG_OVER })
  };

  // 3.- Event "onDrop": Este evento se dispara cuando se suelta el elemento "draggable" arrastrado en el elemento objetivo. 
  const handleDrop = (ev) => {
    ev.preventDefault();
    setFiles(ev.dataTransfer.files)
    dispatch({ type: ACTIONS_DRAG_DROP.DRAG_DROP, payload: { id: state.dragItemIndex, data: ev.dataTransfer.files } })
  };

  // 4.- Event "ondragleave" ==> arrastre del elemento "draggable" "fuera" del elemento a soltar (drop)
  const handleDragLeave = (ev) => {
    ev.preventDefault();
    dispatch({ type: ACTIONS_DRAG_DROP.DRAG_LEAVE })
  };

  // 5.- Event "onDragEnd"
  const handleDragEnd = (ev) => {
    ev.preventDefault();
    setDragOverItemIndex(undefined);
    dispatch({ type: ACTIONS_DRAG_DROP.DRAG_END })
  }

  // Reset of array of sports
  const handleResetSports = () => {
    setSports(SPORTS_JSON)
  }

  // Sort of Sport by name
  const handleSortSports = () => {
    setSports([...sports].sort((a, b) => a.name.localeCompare(b.name)))
  }

  const objContextData = {
    state,
    sports, setSports,
    files, setFiles,
    dragOverItemIndex, setDragOverItemIndex,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragLeave,
    handleDragEnd,
    handleResetSports,
    handleSortSports
  }

  return (
    <DragDropContext.Provider value={objContextData}>
      {children}
    </DragDropContext.Provider>
  )
}

export default ContextProvider;

