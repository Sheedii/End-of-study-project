import React, { useState, useEffect } from 'react';
import './loader.css';

const Loader = ({ duration }) => {
    const [load, setLoad] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoad(prevLoad => (prevLoad < 100 ? prevLoad + 1 : prevLoad));
        }, duration);
        return () => clearInterval(interval);
    }, [duration]);

    return (
        <div className='Loadercom'>
            <div className="circle" style={{ background: `conic-gradient(from 0deg at 50% 50%, #6f7bf7 0%, #9bf8f4 ${load}%, #101012 ${load}%)` }}>
                <p className="count">
                    <span className="percent">{load}</span>%
                </p>
            </div>
        </div>
    );
};

export default Loader;
