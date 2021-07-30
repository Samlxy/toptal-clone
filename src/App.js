import React from 'react';
import Navbar from './components/NavBar/navbar'; 
import Header from './components/Header/header'; 
import Carousel from './components/Carousel/carousel'; 
import Talent from './components/Talent/talent';
import Teams from './components/Teams/teams';
import Hiring from './components/Hiring/hiring';
import Network from './components/Network/network';
import Organizations from './components/Organizations/organizations';
import Clients from './components/Clients/clients';
import Publications from './components/Publications/publications';
import Staff from './components/Staff/staff';
import Footer from './components/Footer/footer';
//  import HireButton from './components/HireButton';
import './App.css';

function App() {
  return (
    <div id='container'>
      <Navbar />
      <Header />
      <Carousel />
      <Talent />
      <Teams />
      <Hiring />
      <Network />
      <Organizations />
      <Clients />
      <Publications />
      <Staff />
      <Footer />
    </div>
  );
} 

export default App;
