import './App.css';
import  Home from './Components/Home';
import Cart  from './Components/Cart';
import Header from './Components/Header';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Router>  
    </div>
  );
}

export default App;
