import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import CreateAccount from './pages/CreateAccount';
import {Route,Routes} from "react-router-dom";
import NavPage from './components/NavPage';

function App() {
  return (
    <div className="App">
      <NavPage/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/register" element={<CreateAccount/>}/>
      </Routes>
    </div>
  );
}

export default App;
