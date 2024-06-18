import {useContext} from "react";
import { DragDropContext } from "../Context/ContextProvider"; 
import "./DataSport.css";

function DataSport() {
  const {state} = useContext(DragDropContext);
  const sport = state.sport;

  return (
    <section className="section_card_sport">
      <header className="header_data_sport">
        <h4 className="title_data_sport">Sport: <span className="span_title_data_sport">{sport.name}</span></h4>
      </header>
      <figure className="figure_image">
        <img src={sport.image} alt={sport.name} className="image" />
      </figure>
      <div className="card-content">
        <p className="p_data_sport">Description: <span className="span_data_sport">{sport.description}</span></p>
        <p className="p_data_sport">Equipment: <span className="span_data_sport">{sport.equipment}</span></p>
        <p className="p_data_sport">Rules: <span className="span_data_sport">{sport.rules}</span></p>
        <p className="p_data_sport">Popularity: <span className="span_data_sport">{sport.popularity}</span></p>
      </div>
    </section>
  );
}

export default DataSport;
