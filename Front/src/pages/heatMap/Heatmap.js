import React from 'react'
import {AppNavbar, AppHeader, HeatMapBox, Footer} from '../../component';
import { useParams } from 'react-router-dom';

const Heatmap = () => {
  const { start, end } = useParams();
  return (
    <div>
      <AppNavbar/>
      <AppHeader title="Customer Behavior" />
      <HeatMapBox start={start} end={end} />
      <Footer/>
    </div>
  )
}

export default Heatmap
