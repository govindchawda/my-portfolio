import { useEffect } from 'react';
import './App.css';
import Banner from './componants/Banner';
import ContactUs from './componants/ContactUs';
import Navbar from './componants/Navbar';
import PortfolioHome from './componants/PortfolioHome';
import Services from './componants/Services';

function App() {
  useEffect(()=>{
     // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();

    // Disable key combos
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'M'].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === 'U')
      ) {
        e.preventDefault();
      }
    };

    // Detect if DevTools is open
    let devtoolsOpen = false;
    const element = new Image();
    Object.defineProperty(element, 'id', {
      get() {
        devtoolsOpen = true;
        throw new Error('DevTools detected');
      },
    });

    const checkDevTools = () => {
      devtoolsOpen = false;
      console.log(element); // triggers getter if DevTools is open
      if (devtoolsOpen) {
        alert("Please close Developer Tools");
        window.close(); // Optional: try closing tab
      }
    };

    const interval = setInterval(checkDevTools, 2000);

    // Attach listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      clearInterval(interval);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <>
    <Navbar/>
    <Banner/>
    <Services/>
    <PortfolioHome/>
    <ContactUs/>
    </>
  );
}

export default App;
