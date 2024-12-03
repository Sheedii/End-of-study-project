import React, { useState, useEffect, useRef } from 'react';
import './appNavbar.css';
import logo from '../../assets/logowise2.png';
import LogoutIcon from '../../assets/logouticon.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const AppNavbar = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const [customerBehaviorActive, setCustomerBehaviorActive] = useState(false);
    const [salesForecastingActive, setSalesForecastingActive] = useState(false);
    const [affinityTestingActive, setAffinityTestingActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    const handleChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === 'Correlation Matrix') {
            navigate(`/SearchMatrix`);
        }
        if (selectedOption === 'Product Comparator') {
            navigate(`/AffinityComparators`);
        }
        if (selectedOption === 'Top 10 Products') {
            navigate(`/Top10`);
        }
    };

    useEffect(() => {
        const path = window.location.pathname;

        setCustomerBehaviorActive(
            path === '/TimeLine' ||
            path.startsWith('/htm/') ||
            path.startsWith('/HeatMapComparator/') ||
            path.startsWith('/heatMapFlow/')
        );
        
        setAffinityTestingActive(
            path === '/AffinityComparators' ||
            path === '/Comparator' ||
            path === '/DateComparator' ||
            path === '/DateComparatorTable' ||
            path === '/ComparatorTable' ||
            path === '/SearchMatrix' ||
            path === '/CorrelationMatrix' ||
            path === '/Top10'
        );
    
        setSalesForecastingActive(path === '/forecast');
    
    }, []);
    


    return (
        <div className='appNavbar' >
            <div className="wise__appNavbar">
                <div className="links_logo2">
                    <a href="https://wisevision.io" target="_blank" rel="noopener noreferrer">
                        <img className='wiselogo2' src={logo} alt="wisevision_logo" />
                    </a>
                </div>

                <div className="links_container2">
                    <div className="customer_behavior">
                        <NavLink  className={customerBehaviorActive  ? "activeCustomer_behaviorLink" : "customer_behaviorLink"}  to="/TimeLine"  onClick={() => setCustomerBehaviorActive(true)}>
                            Customer Behavior
                        </NavLink>
                    </div>
                    <div className={affinityTestingActive ? "activeAffi" : "affinicty_testing0"}>
                        <select className='selecti' value="Affinity Testing0" onChange={handleChange}>
                            <option className='etitre' value="Affinity Testing">Affinity Testing</option>
                            <option className='pageChoice' value="Correlation Matrix" style={{ margin: '20px' , padding: '20px 4px' }}> Correlation Matrix </option>
                            <option className='pageChoice' value="Product Comparator">Product Comparator </option>
                            <option className='pageChoice' value="Top 10 Products"> Top 10 Products </option>
                        </select>
                    </div>
                    <div className="sales_forecasting">
                        <NavLink className="sales_forecasting" to="/forecast"  onClick={() => setSalesForecastingActive(true)}>
                            Sales Forecasting
                        </NavLink>
                    </div>
                </div>


                <div className="sign2">
                    <p className="myAccount">My Account</p>
                    <div className='logoutbutt'>
                        <button className="applogout" type="button">LOGOUT</button>
                        <img className='LogoutIcon' src={LogoutIcon} alt="LOGOUTIcon" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AppNavbar