import React from 'react'
import { AppNavbar, AppHeader, ProductDateTable, ProductDateCards, Footer } from '../../component';


const AffinityTestingDateTable = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedProduct1 = urlParams.get('selectedProduct');
    const selectedStart = urlParams.get('selectedStart');
    const selectedEnd = urlParams.get('selectedEnd');
    const selectedStart2 = urlParams.get('selectedStart2');
    const selectedEnd2 = urlParams.get('selectedEnd2');
    console.log("selectedProduct:", selectedProduct1);
    console.log("selectedStart:", selectedStart);
    console.log("selectedEnd:", selectedEnd);
    console.log("selectedStart2:", selectedStart2);
    console.log("selectedEnd2:", selectedEnd2);
    return (
        <div>
            <AppNavbar />
            <AppHeader title="Affinity Testing" />
            <ProductDateTable
                selectedProduct1={selectedProduct1}
                selectedStart={selectedStart}
                selectedEnd={selectedEnd}
                selectedStart2={selectedStart2}
                selectedEnd2={selectedEnd2}
            />
            <ProductDateCards
                selectedProduct1={selectedProduct1}
                selectedStart={selectedStart}
                selectedEnd={selectedEnd}
                selectedStart2={selectedStart2}
                selectedEnd2={selectedEnd2}
            />
            <Footer />
        </div>
    )
}

export default AffinityTestingDateTable
