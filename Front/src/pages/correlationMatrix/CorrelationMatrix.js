import React from 'react'
import { useLocation } from 'react-router-dom';
import { AppNavbar, AppHeader, MatriceDeCorrelation, Footer} from '../../component';


const CorrelationMatrix = () => {
    const location = useLocation();

    // Parse query parameters
    const queryParams = new URLSearchParams(location.search);
    const selectedProducts = JSON.parse(decodeURIComponent(queryParams.get('selectedProducts')));
    const selectedStart = queryParams.get('selectedStart');
    const selectedEnd = queryParams.get('selectedEnd');
    console.log("selectedProducts", selectedProducts);
    console.log("selectedStart", selectedStart);

    return (
        <div>
            <AppNavbar />
            <AppHeader title="Affinity Testing" />
            <MatriceDeCorrelation 
                selectedProducts={selectedProducts} 
                selectedStart={selectedStart} 
                selectedEnd={selectedEnd} 
            />
            <Footer />
        </div>
    )
}

export default CorrelationMatrix
