import React, { useState, useEffect } from 'react'
import './productDateCards.css'


const ProductDateCards = ({ selectedEnd2, selectedStart2, selectedEnd, selectedStart, selectedProduct1 }) => {
    const [quantityProduct1, setQuantityProduct1] = useState(null);
    const [quantityProduct2, setQuantityProduct2] = useState(null);
    const [cAProduct1, setCAProduct1] = useState(null);
    const [cAProduct2, setCAProduct2] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await fetch(`http://localhost:8087/dashboard/quantity?lib=${selectedProduct1}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
                const data1 = await response1.json();
                setQuantityProduct1(data1);

                const response2 = await fetch(`http://localhost:8087/dashboard/quantity?lib=${selectedProduct1}&firstDate=${selectedStart2}&lastDate=${selectedEnd2}`);
                const data2 = await response2.json();
                setQuantityProduct2(data2);

                const response3 = await fetch(`http://localhost:8087/dashboard/allRevenue?lib=${selectedProduct1}&firstDate=${selectedStart}&lastDate=${selectedEnd}`);
                const data3 = await response3.json();
                setCAProduct1(data3);

                const response4 = await fetch(`http://localhost:8087/dashboard/allRevenue?lib=${selectedProduct1}&firstDate=${selectedStart2}&lastDate=${selectedEnd2}`);
                const data4 = await response4.json();
                setCAProduct2(data4);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedProduct1, selectedStart, selectedEnd, selectedStart2, selectedEnd2]);
    return (
        <div className='ProductCardsContainer'>
            <div className='Card'>
                <div className="salesFigures">Sales figures</div>
                <div className='barsprog'>
                    <div className='FirstProgress'>
                        <div className='ProgressTitle'>Range 1</div>
                        <div className='progressBar'>
                            <div className={cAProduct1 > cAProduct2 ? "numberofprogress" : "numberofprogress2"}>{cAProduct1}</div>
                            <div className="progressContainer">
                                <div className={cAProduct1 > cAProduct2 ? "progressvert" : "progressrouge"}></div>
                            </div>
                        </div>
                    </div>
                    <div className='FirstProgress'>
                        <div className='ProgressTitle'>Range 2</div>
                        <div className='progressBar'>
                            <div className={cAProduct1 < cAProduct2 ? "numberofprogress" : "numberofprogress2"}>{cAProduct2}</div>
                            <div className="progressContainer">
                                <div className={cAProduct2 > cAProduct1 ? "progressvert" : "progressrouge"}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Card'>
                <div className="salesFigures">Products total quantity</div>
                <div className='barsprog'>
                    <div className='FirstProgress'>
                        <div className='ProgressTitle'>Range 1</div>
                        <div className='progressBar'>
                            <div className={quantityProduct1 > quantityProduct2 ? "numberofprogress" : "numberofprogress2"}>{quantityProduct1}</div>
                            <div className="progressContainer">
                                <div className={quantityProduct1 > quantityProduct2 ? "progressvert" : "progressrouge"}></div>
                            </div>
                        </div>
                    </div>
                    <div className='FirstProgress'>
                        <div className='ProgressTitle'>Range 2</div>
                        <div className='progressBar'>
                            <div className={quantityProduct2 > quantityProduct1 ? "numberofprogress" : "numberofprogress2"}>{quantityProduct2}</div>
                            <div className="progressContainer">
                                <div className={quantityProduct2 > quantityProduct1 ? "progressvert" : "progressrouge"}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Card'>
                <div className="salesFigures">Tickets total number</div>
                <div className='barsprog'>
                    <div className='FirstProgress'>
                        <div className='ProgressTitle'>Range 1</div>
                        <div className='progressBar'>
                            <div className="numberofprogress2">--</div>
                            <div className="progressContainer">
                                <div className="progress2"></div>
                            </div>
                        </div>
                    </div>
                    <div className='FirstProgress'>
                        <div className='ProgressTitle'>Range 2</div>
                        <div className='progressBar'>
                            <div className="numberofprogress2">--</div>
                            <div className="progressContainer">
                                <div className="progress2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDateCards
