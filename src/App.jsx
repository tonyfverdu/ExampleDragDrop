import { useContext } from "react";
import { DragDropContext } from './Context/ContextProvider.jsx'
import SortTableList from './AppComponents/SortTableList.jsx';
import DragDropFiles from './AppComponents/DragDropFiles.jsx';
import DataSport from './AppComponents/DataSport.jsx';
import './App.css';

function App() {
  const { state } = useContext(DragDropContext);

  return (
    <section className="sect_App">
      <SortTableList />

      <DragDropFiles />

      {
        state.sport.id !== 0 ? <DataSport /> : null
      }

    </section>
  );
}

export default App;



