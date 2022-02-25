import React, { useState } from "react";
import "./Accordian.css";
import { useGlobalContext } from "./context";
import PoemDetails from "./PoemDetails";

const Accordion = (poem) => {

//state for toggle for one 
const [activeCurrentIndex, setCurrentIndex] = useState();
//method for toggle
const toggleShowAccordian = (id) => {
  if(activeCurrentIndex === id) {
    setCurrentIndex();
  } else {
    setCurrentIndex(id);
  }
}

  return (
    <>
      <div className="accordion-item" key={poem.id}>
        <div
          className="accordion-item-header"
          onClick={() => toggleShowAccordian(poem.id)}
        >
          <div className="accordion-item-title" onClick={() => toggleShowAccordian(poem.id)}>
            <span>Poem: {poem.title} </span>
          </div>
          {/* like a toggle, using activeCurrentIndex value to toggle it between onClick */}
          <div>{activeCurrentIndex ? "-" : "+"}</div>
        </div>
        {activeCurrentIndex === poem.id && (
          <PoemDetails
           {...poem}
          />
        )}
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Accordion;

