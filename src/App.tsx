import React, { useEffect, useState } from 'react';
import { Wrapper } from './app/components/FormItems';
import Routes from './app/routes';

function App() {
  const [width,setWindowWidth] =useState(0);

  useEffect(()=> {
    updateDimensions();
    window.addEventListener("resize",updateDimensions);

    return () => window.removeEventListener("resize",updateDimensions);
  },[])

  const updateDimensions = () => {
    const width=window.innerWidth;
    setWindowWidth(width);
  }
  return (
  <Wrapper style={{width:width}}> 
    <Routes />
  </Wrapper>
  );
}

export default App;
