import './App.css';
import ReactSwitch from 'react-switch'
import { createContext, useState } from 'react';
import {Link} from 'react-router-dom';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {BsGithub, BsLinkedin} from 'react-icons/bs';

export const ThemeContext = createContext((null));

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>

      <div className='navbar'>

          <ul className="nav-list">
            <li className="nav-item" id='switch'>
              <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
            </li>
            <li className="nav-item">
              <a href="https://github.com/PunitorX" className='nav-link'><BsGithub /></a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/brendan-jones-75ab16227/" className='nav-link'><BsLinkedin /></a>
            </li>
          </ul>
        
      </div>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
