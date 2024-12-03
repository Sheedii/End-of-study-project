import React from 'react'
import { AppNavbar, AppHeader, ProductTable, ProductCards, Footer } from '../../component';


const AffinityTestingTableComparator = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedProduct1 = urlParams.get('selectedProduct1');
    const selectedProduct2 = urlParams.get('selectedProduct2');
    const selectedStart = urlParams.get('selectedStart');
    const selectedEnd = urlParams.get('selectedEnd');
    return (
        <div>
            <AppNavbar />
            <AppHeader title="Affinity Testing" />
            <ProductTable
                selectedProduct1={selectedProduct1}
                selectedProduct2={selectedProduct2}
                selectedStart={selectedStart}
                selectedEnd={selectedEnd}
            />
            <ProductCards
                selectedProduct1={selectedProduct1}
                selectedProduct2={selectedProduct2}
                selectedStart={selectedStart}
                selectedEnd={selectedEnd}
            />
            <Footer />
        </div>
    )
}

export default AffinityTestingTableComparator
