 
 import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Navbar from './components/navbar';
 import Footer from './components/footer';
 import Auth from './components/login';
 import { HeroSection } from './components/hero';
 import Services from './components/section';
 import ExpandableMenu from './components/cities';
 import ResidentialMovingPraveshan from './pages/residentialMoving';
 import ContactUs from './components/contact';
 
 // Layout component for shared structure
 const Layout = ({ children }) => (
   <>
     <Navbar />
     {children}
     <Footer />
   </>
 );
 
 function App() {
   return (
     <Router>
       <Routes>
         {/* Home Route */}
         <Route
           path="/"
           element={
             <Layout>
               <HeroSection />
               <Services />
               <Auth />
               <ContactUs /> {/* Static Component, no routing */}
             </Layout>
           }
         />
         
         {/* Cities Route */}
         <Route
           path="/cities"
           element={
             <Layout>
               <ExpandableMenu />
             </Layout>
           }
         />
         
         {/* Residential Moving Route */}
         <Route
           path="/ResidentalMoving"
           element={
             <Layout>
               <ResidentialMovingPraveshan />
             </Layout>
           }
         /> 
           <Route
           path="/contactUs"
           element={
             <Layout>
               < ContactUs />
             </Layout>
           }
         />
        
       <Route
           path="/login"
           element={
             <Layout>
               < Auth />
             </Layout>
           }
         />
       </Routes>
     </Router>
   );
 }
 
 export default App;
 
 
 
 {/***
  
  
  import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Auth from './components/login';
import { HeroSection } from './components/hero';
import Services from './components/section';
import ExpandableMenu from './components/cities';
import ResidentialMovingPraveshan from './pages/residentialMoving';
import ContactUs from './components/contact';

// Layout component for shared structure
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route }
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
              <Services />
              <Auth /> 
              <ContactUs />
            </Layout>
          }
        />
        
        {/* Cities Route }
        <Route
          path="/cities"
          element={
            <Layout>
              <ExpandableMenu />
            </Layout>
          }
        />
        
        {/* Residential Moving Route }
        <Route
          path="/ResidentalMoving"
          element={
            <Layout>
              <ResidentialMovingPraveshan />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;**/ }