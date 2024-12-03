import React from 'react'
import './affinityTestingTop10.css'
import { AppNavbar, AppHeader , Footer, ChartAppex } from '../../component';


const AffinityTestingTop10 = () => {

    return (
        <div>
            <AppNavbar />
            <AppHeader title="Affinity Testing" />
            <div className='Top10'>
            <div className='choosed3'>
                <ChartAppex />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default AffinityTestingTop10
