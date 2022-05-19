import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import AttendencePage from './pages/AttendencePage';
import Officials from './pages/officials/Officials';
import AdminPage from './AdminPage/AdminPage';
import AllUsers from './AllUsers/AllUsers';
import { signOut } from 'firebase/auth';
import auth from './utilities/firebase.init';
import RequireAuth from "./utilities/RequireAuth";


function App() {
  const handleSignout = () => {
    signOut(auth).then(() => {
      console.log('signout successfull');
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="App">

      <div className='topBanner'>
        <h1 className='text-center fw-bold'>Online attendance system</h1>
      </div>



      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        
        
          <Route path='/' element={<RequireAuth><Officials></Officials></RequireAuth>} />
          <Route path='/attendence' element={<AttendencePage></AttendencePage>}></Route>

          <Route path="admin" element={<RequireAuth><AdminPage></AdminPage></RequireAuth>}>
            <Route path='addUsers' element={<Register></Register>}> </Route>
            <Route path='users' element={<AllUsers></AllUsers>}> </Route>
            <Route path='' element={<AttendencePage></AttendencePage>}></Route>
          </Route>
      </Routes>

      <button onClick={handleSignout}>signout </button>
    </div>
  );
}

export default App;
