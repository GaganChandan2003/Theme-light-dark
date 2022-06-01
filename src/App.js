import Theme from './components/Theme';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {isLight}=useContext(ThemeContext)
  return (
    <div className={isLight? "light":"dark"}>
      <Theme/>
    </div>
  );
}

export default App;
