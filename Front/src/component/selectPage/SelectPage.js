import React, { useState } from 'react';
import './selectPage.css';
import check from '../../assets/check.svg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Change from "../../assets/changeIcon.svg";


const SelectPage = () => {
    const navigate = useNavigate();
    const [selectedChoice2, setSelectedChoice2] = useState(null);


    const handleChoice2Click = (choice) => {
        setSelectedChoice2(choice);
    };

    const handleNextClick = () => {
        if (selectedChoice2 === 'Two products comparator') {
            navigate('/Comparator'); // Redirect to "/Top10" path on "Top 10 Products" selection
        }
        if (selectedChoice2 === 'One product comparator') {
            navigate('/DateComparator'); // Redirect to "/Top10" path on "Top 10 Products" selection
        }
    };

    return (
        <div className='selectPageCom'>
                <div className='selectPage'>
                    <div className='SelectTit'>Select page</div>
                    <div className='choice'>
                        <div
                            className={selectedChoice2 === 'One product comparator' ? 'selectedChoice' : 'choice1'}
                            onClick={() => handleChoice2Click('One product comparator')}
                        >
                            One product comparator
                            {selectedChoice2 === 'One product comparator' && <img src={check} alt="Checkmark" className="checkIcon" />}
                        </div>
                        <div
                            className={selectedChoice2 === 'Two products comparator' ? 'selectedChoice' : 'choice2'}
                            onClick={() => handleChoice2Click('Two products comparator')}
                        >
                            Two products comparator
                            {selectedChoice2 === 'Two products comparator' && <img src={check} alt="Checkmark" className="checkIcon" />}
                        </div>
                    </div>
                    <div className="lineNext"></div>
                    <div className='NextBut' style={{ color: selectedChoice2 ? '#08074e' : '#8e98a8' }} onClick={handleNextClick}>NEXT</div>
                </div>
        </div >
    );
};

export default SelectPage;
