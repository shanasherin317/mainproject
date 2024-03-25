import  { useState, useEffect } from 'react';
import Loading from './Loading';
// import UserLayout from '../../UserLayout';
// import Home from '../../pages/Home';
// import UserLayout from '../../UserLayout';
import Home from '../../pages/Home';

function Loadd() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loading/> : 
       <Home/>
        }
    </div>
  );
}

export default Loadd;