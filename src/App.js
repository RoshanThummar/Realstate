import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import "../src/App.css";
import Companies from './Companies/Companies';
// import Residencies from './Residencies/Residencies';
import Contact from './Contact/Contact';
import Value from './Value/Value';
import GetStarted from './GetStarted/GetStarted';
import Footer from './components/footer/Footer';
 
function App() {
  return (
    <div className="App">
        <div>
            <div className="white-gradient"/>
            <Header />
            <Hero />
        </div>      
        <Companies />
        {/* <Residencies /> */}
        <Value />
        <Contact />  
        <GetStarted />
        <Footer />
    </div>
  );
}

export default App;