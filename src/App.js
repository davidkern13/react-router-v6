import './App.css';

import Router from './router';
import Navigation from './navigation';

function App() {
  return (
    <>
      <Router Navigation={Navigation}/>
    </>
  );
}

export default App;
