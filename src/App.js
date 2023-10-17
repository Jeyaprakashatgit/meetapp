import { Route,Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Upcomingmeeting from './Pages/Upcomingmeeting';
import Addmeeting from './Pages/Addmeeting';
import Pastmeeting from './Pages/Pastmeeting';
import Index from './Pages/Index';

function App() {
  return (
    <div className="App">
      <Nav />
   
      <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/add-meetings' element={<Addmeeting/>} />
      <Route path='/past-meetings' element={<Pastmeeting/>} />
      <Route path='/upcoming-meetings' element={<Upcomingmeeting/>} />
    </Routes>
    </div>

   
  );
}

export default App;
