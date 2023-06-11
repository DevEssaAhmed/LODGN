import { useState } from 'react';
import './App.css';
import SideNav from './components/SIdeNav/SideNav';
import ChatIcon from './components/ChatIcon/ChatIcon';
import Home from './components/Home/Home';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex'>
      <SideNav />
      <Home/>
      <ChatIcon/>
    </div>
  );
}

export default App;
