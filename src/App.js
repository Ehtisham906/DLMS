
import './App.css';
import Index from './Pages/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route excat path='/' element={<Index />}> </Route>
          <Route excat path='/dashboard' element={<Dashboard />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
