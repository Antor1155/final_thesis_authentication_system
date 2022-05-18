import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import AttendencePage from './pages/AttendencePage';
import Officials from './pages/officials/Officials';
import AdminPage from './AdminPage/AdminPage';
import AllUsers from './AllUsers/AllUsers';

function App() {

  return (
    <div className="App">

      <div className='topBanner'>
        <h1 className='text-center fw-bold'>Online attendance system</h1>
      </div>



      <Routes>
        <Route path='/' element={<Officials></Officials>} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/attendence' element={<AttendencePage></AttendencePage>}></Route>

        <Route path="admin" element={<AdminPage></AdminPage>}>
          <Route path='addUsers' element={<Register></Register>}> </Route>
          <Route path='users' element={<AllUsers></AllUsers>}> </Route>
          <Route path='attendence' element={<AttendencePage></AttendencePage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
