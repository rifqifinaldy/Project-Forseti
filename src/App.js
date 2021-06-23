import React, {useState} from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import About from './components/About';
import Allocation from './components/Allocation';
import Tokenomics from './components/Tokenomics';
import { aboutData } from './data/AboutData';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import { allocationData } from './data/AllocationData';
import { tokenomicsData } from './data/TokenomicsData';

function App() {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
      <About {...aboutData} />
      <Allocation {...allocationData}/>
      <Tokenomics {...tokenomicsData}/>
      <Footer />
    </>
  );
}

export default App;
