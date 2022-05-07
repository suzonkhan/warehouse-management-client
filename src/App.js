import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Registration/Registration';
import RequireAuth from './RequireAuth/RequireAuth';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="main-wrapper">
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='registration' element={<Registration></Registration>}></Route>
            <Route path='inventory/:id' element={
              <RequireAuth>
                <Details></Details>
              </RequireAuth>
            }></Route>
            <Route path='manage-inventories' element={
              <RequireAuth>
                <ManageInventories></ManageInventories>
              </RequireAuth>
            }></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
