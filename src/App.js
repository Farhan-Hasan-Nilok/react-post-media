import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar></Sidebar>
      </Router>
    </div>
  );
}

export default App;
