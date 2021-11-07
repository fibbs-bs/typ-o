import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import Navbar from './components/Navbar/Navbar';

function App() {

 
  return (
    <div style={ {margin:"auto"} }> 
      <Navbar /> 
      <Keyboard /> 
    </div>
  );
}

export default App;
