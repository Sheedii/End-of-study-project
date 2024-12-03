import './App.css';
import logo from './assets/petit.png'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, OurServices, AboutUs, Heatmap, ForecastingPage, AffinictyTesting, AffinityTestingTop10, AffinityTestingComparator, 
  HeatMapComparator ,HeatmapFlow, TimeLinePage , AffinityTestingDateCom , AffinityTestingDateTable, AffinityTestingTableComparator,
  Affinity04,  AffinityMatrix, Login, Affinity01, Affinity02,Affinity03,Comparator, SearchMatrix, CorrelationMatrix } from './pages';
import { Header,ChartComponent, MatrixFinal,CorellationSearch, DateComparator, ProductComparator, Forecasting, Map, MapInfo, Footer , Map4, Map3, Map2, Agenda2,ForecastForm,  CustomerFlow, ProductComparator2 } from './component';

function App() {
  
  useEffect(() => {
    document.title = "WiseVision"; 
    const changeFavicon = (src) => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = src;
    };

    changeFavicon(logo); 
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<OurServices />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/PC" element={<ProductComparator />}/>
        <Route path="/F" element={<Forecasting />}/>
        <Route path="login" element={<Login />} />
        <Route path="/datecomp" element={<DateComparator />}/>
        <Route path="/ChC" element={<ChartComponent />}/>
        <Route path="/htm/:start/:end" element={<Heatmap />}/>
        <Route path="/cmprt/:start/:end" element={<Comparator />}/>
        <Route path="/TimeLine" element={<TimeLinePage />}/>
        <Route path="/HeatMapFlow/:start/:end" element={<HeatmapFlow />}/>
        <Route path="/HeatMapComparator/:start/:end" element={<HeatMapComparator />}/>
        <Route path="/Forecast" element={<ForecastingPage />}/>
        <Route path="/AffinityComparators" element={<AffinictyTesting />}/>
        <Route path="/Top10" element={<AffinityTestingTop10 />}/>
        <Route path="/Comparator" element={<AffinityTestingComparator />}/>
        <Route path="/DateComparator" element={<AffinityTestingDateCom />}/>
        <Route path="/DateComparatorTable" element={<AffinityTestingDateTable />}/>
        <Route path="/ComparatorTable" element={<AffinityTestingTableComparator />}/>
        <Route path="/Comparator" element={<Comparator />}/>
        <Route path="/SearchMatrix" element={<SearchMatrix />}/>
        <Route path="/CorrelationMatrix" element={<CorrelationMatrix />}/>
        <Route path="/map" element={<Map />}/>
        <Route path="/map2" element={<Map2 />}/>
        <Route path="/map3" element={<Map3 />}/>
        <Route path="/map4" element={<Map4 />}/>
        <Route path="/mapi" element={<MapInfo />}/>
        <Route path="/dhaf" element={<ProductComparator2 />}/>
        <Route path="/affinity01" element={<Affinity01 />} />
      <Route path="/affinity02" element={<Affinity02 />} />
      <Route path="/affinity03" element={<Affinity03 />} />
      <Route path="/affinitymatrix" element={<AffinityMatrix />} />
      <Route path="/matrix" element={<MatrixFinal/>} />
      <Route path="/affinity03-2" element={<Affinity04/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/piwpiw" element={<Header/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
