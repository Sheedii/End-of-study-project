import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Grille} from "../../assets/Grille background.svg";
import { ReactComponent as Checked } from "../../assets/Checked.svg";
import { ReactComponent as Checked1 } from "../../assets/Checked.svg";
import { ReactComponent as Checked2 } from "../../assets/Checked.svg";
import { ReactComponent as Checked3 } from "../../assets/Checked.svg";
import { ReactComponent as Checked4 } from "../../assets/Checked.svg";
import { ReactComponent as Checked5 } from "../../assets/Checked.svg";


import "./PickProduct2.css";

const PickProduct2 = () => {
    const navigate = useNavigate();
    const [selectedRectangles, setSelectedRectangles] = React.useState([]);
  
    const handleRectangleClick = (rectangleNumber) => {
      setSelectedRectangles(prevSelected =>
        prevSelected.includes(rectangleNumber)
          ? prevSelected.filter(num => num !== rectangleNumber)
          : [...prevSelected, rectangleNumber]
      );
    };
  
    const getRectangleStyle = (rectangleNumber) => {
      if (selectedRectangles.includes(rectangleNumber)) {
        return {
          backgroundColor: 'grey',
          color: 'white',
        };
      }
      return {};
    };
  
    const getTextStyle = (rectangleNumber) => {
      if (selectedRectangles.includes(rectangleNumber)) {
        return {
          color: 'white',
        };
      }
      return {};
    };
  
    const isButtonDisabled = selectedRectangles.length < 2;
  
    const handleConfirmClick = () => {
      if (!isButtonDisabled) {
        navigate('/affinitymatrix');
      }
    };
  
    const handleBackClick = () => {
      navigate('/affinity01');
    };
  return (
    
       
      <div className="rectangle-50-pp">
         <div className="grille-background">
      <Grille/>
      </div>
              <div class="affinity-testing">Affinity Testing</div>

     <div class="group-3">
     <div className="rectangle-8-pp">
     <div class="rectangle-7-pp">
     <div class="ellipse-31-pp"></div>
     <div class="ellipse-31-pp-2"></div>
     <div class="ellipse-33-2-pp"></div>
     <div class="_1-pp">1</div>
      <div class="line-2-pp"></div>
      <div class="_2-pp">2</div>
      <div className="pick-the-product-line2">Pick the product line</div>
      <div class="please-select-one-product-line">Please select one product line</div>
      <div class="line-1"></div>
      <div
              className={`next ${isButtonDisabled ? 'disabled' : ''} `}
              onClick={handleConfirmClick}
            >
              <div className="next-clicked">NEXT</div> {/* Changed here */}
            </div>
            <div
              className={`back ${isButtonDisabled ? 'disabled' : ''} `}
              onClick={handleBackClick}
            >
            <div className="back">BACK</div>
           </div>
      <div className="frame-4">
        <div className="frame-42">
          <div className="group-4">
            <div
              className="rectangle-38"
              style={getRectangleStyle(38)}
              onClick={() => handleRectangleClick(38)}
            />
            {selectedRectangles.includes(38) && <div className="check-icon"><Checked /></div>}
           
            <div className="pgc" style={getTextStyle(38)}>
              PGC
            </div>
          </div>
          <div className="group-5">
            <div
              className="rectangle-39"
              style={getRectangleStyle(39)}
              onClick={() => handleRectangleClick(39)}
            />
            {selectedRectangles.includes(39) && <div className="check-icon-1"><Checked /></div>}

            <div className="mba" style={getTextStyle(39)}>
           MBA
            </div>
          </div>
         <div className="group-6">
            <div
              className="rectangle-40"
              style={getRectangleStyle(40)}
              onClick={() => handleRectangleClick(40)}
            />
            {selectedRectangles.includes(40) && <div className="check-icon-2"><Checked /></div>}

            <div className="bazar" style={getTextStyle(40)}>
            Bazar
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="group-7">
            <div
              className="rectangle-41"
              style={getRectangleStyle(41)}
              onClick={() => handleRectangleClick(41)}
            />
            {selectedRectangles.includes(41) && <div className="check-icon-3"><Checked /></div>}

            <div className="ba" style={getTextStyle(41)}>
            BA
            </div>
          </div>
          <div className="group-8">
            <div
              className="rectangle-42"
              style={getRectangleStyle(42)}
              onClick={() => handleRectangleClick(42)}
            />
            {selectedRectangles.includes(42) && <div className="check-icon-4"><Checked /></div>}

            <div className="rayon2" style={getTextStyle(42)}>
              Rayon
            </div>
          </div>
          <div className="group-9">
            <div
              className="rectangle-43"
              style={getRectangleStyle(43)}
              onClick={() => handleRectangleClick(43)}
            />
            {selectedRectangles.includes(43) && <div className="check-icon-5"><Checked /></div>}

            <div className="rayon3" style={getTextStyle(43)}>
              Rayon
            </div>
          </div>
        </div>
      </div>
  </div>
      </div>
      
    </div>
    </div>
  
    
  );
};    

export default PickProduct2;