import React from "react";
import "./Accordian.css";
import { useGlobalContext } from "./context";
import PoemDetails from "./PoemDetails";

const Accordion = (poem) => {
  const { poems, isActive, setIsActive } = useGlobalContext();
//  console.log(poem);
  return (
    <>
      <div className="accordion-item">
        <div
          className="accordion-item-header"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="accordion-item-title">
            <span>Poem: {poem.title} </span>
          </div>
          {/* like a toggle, using isActive value to toggle it between onClick */}
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && (
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

/* 


 div className="accordion-item">
    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
      <div>Title:  {title}</div>
      <div>Author: {author}</div>
      <div>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content">
        <PoemDetails title={title} author={author} lines={lines}  index={index} />
      </div>}
    </div> 

*/

{
  /*   <div class="accordion-item">
    <div id="test" class="accordion-item-header"  onClick={() => setIsActive(!isActive)}>
      <div class="accordion-item-title">{title}</div>
<div>{isActive ? '-' : '+'}</div>
    </div>
   {isActive&& 
      
      <PoemDetails title={title} author={author} lines={lines}  index={index} />
    
    }
  </div>
  <div class="divider"></div> */
}
