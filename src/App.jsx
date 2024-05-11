import { useState } from 'react';
import Gameplay from './components/Gameplay';
import Start from './components/Start';
function App() {
  const [isGameStarted, setisGameStarted] = useState(false);
  const TogglePlay = () => {
      setisGameStarted((prev) => !prev);
  };
  return (
    
  
    <>{
        isGameStarted? <Gameplay / > : <Start toggle = {TogglePlay} />
    
    }
    
    </>
  );
};

export default App; 

