
import './App.css';

import Header from './Components/Header';
import Aboutus from './Components/Aboutus';
import Services from './Components/Ourservices';
import Letme from './Components/Letme';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import { useState, useEffect} from 'react';
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading,setLoading]= useState(true)
  
  useEffect(()=>{

    setTimeout(() => {
        setLoading(false)
    }, 2000);
  }, [])
  return (
    <>
    {
      loading?
      <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <RingLoader
        
        color={ '#45aaf2' }
        loading={loading}
        size={100}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      />
      </div>  
      :
      <div>
        <Header/>
        <Aboutus/>
        <Services/>
        <Letme/>
        <Contactus/>
        <Footer/>
        </div>
    }
      
    </>
  );
}

export default App;
