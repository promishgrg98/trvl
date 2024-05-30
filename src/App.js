import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/products' Component={Products} />
          <Route path='/services' Component={Services} />
          <Route path='/sign-up' Component={SignUp} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
