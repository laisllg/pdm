import { useState, useEffect } from 'react';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';


const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true)
  }

  const handleLogout = () => {
    setLogado(false)
  }

  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 3000);
  }, []);
  return exibeSplash ? (
    <Splash/>
  ) : !logado ? (
    <Login onLogin={handleLogin} /> 
  )  : (
<Home onLogout={handleLogout} />
  );
};

export default App;