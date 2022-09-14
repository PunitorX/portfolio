import './App.css';
import ReactSwitch from 'react-switch'
import { createContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import Main from './components/pages/MainPage/Main';

export const ThemeContext = createContext((null));

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>

    <Router>
      <div className='navbar'>
          <ul className="nav-list">
            <li className='nav-item'>
              <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
            </li>
            <li className="nav-item" id='nav-icon'>
              <a href="https://github.com/PunitorX" className='nav-link'><BsGithub /></a>
            </li>
            <li className="nav-item" id='nav-icon'>
              <a href="https://www.linkedin.com/in/brendan-jones-75ab16227/" className='nav-link'><BsLinkedin /></a>
            </li>
          </ul>
      </div>
      <Routes>
        {/* <div className='div-main'> */}
          <Route path='/' exact element={<Main />} />
        {/* </div> */}
      </Routes>
    </Router>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
