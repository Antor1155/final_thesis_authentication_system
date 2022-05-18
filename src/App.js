import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">

      <div className='topBanner'>
        <h1 className='text-center fw-bold'>Online attendance system</h1>
      </div>



      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
