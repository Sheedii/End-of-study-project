import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Rectangle.css';
import { ReactComponent as Grille} from "../../assets/Grille background.svg";

const Rectangle = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/affinity03-2');
  }
  
  const handleNoClick = () => {
    navigate('/affinity03');
  }
  return (
    <div className="rectangle-50">
 <div className="grille-background">
      <Grille/>
      </div>

      <div className="affinity-testing">Affinity Testing</div>
      
       <div class="group-3">
      <div class="rectangle-7">
     <div class="ellipse-31"></div>
     <div class="ellipse-33"></div>
     <div class="ellipse-33-2"></div>
     <div class="_1">1</div>
      <div class="line-2"></div>
      <div class="_2">2</div>

  </div>
  
  <div className="rectangle-8">
  <div className="are">
      Are you looking for cross product line analysis?
      </div>
  <div className="rectangle-yes" onClick={handleYesClick}></div>
  
 
  <div className="yes" onClick={handleYesClick}>Yes</div>
  <div className="rectangle-no" onClick={handleNoClick}></div>
  <div className="no" onClick={handleNoClick}>No </div>
  </div>


</div>
     
    </div>
  );
}

export default Rectangle;