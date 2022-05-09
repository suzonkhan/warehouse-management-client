import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddNew from './Pages/AddNew/AddNew';
import Blog from './Pages/Blog/Blog';
import Details from './Pages/Details/Details';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Registration/Registration';
import RequireAuth from './RequireAuth/RequireAuth';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="main-wrapper">
        <Header></Header> 
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='about' element={<About></About>}></Route>
            <Route path='blog' element={<Blog></Blog>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='forget-password' element={<ForgetPassword></ForgetPassword>}></Route>
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
            <Route path='add-new-item' element={
              <RequireAuth>
                <AddNew></AddNew>
              </RequireAuth>
            }></Route>
            <Route path='my-items' element={
              <RequireAuth>
               <MyItems></MyItems>
              </RequireAuth>
            }></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        <Footer></Footer>
        <ToastContainer />
    </div>
  );
}

export default App;
