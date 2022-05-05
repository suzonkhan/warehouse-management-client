import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="main-wrapper">
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='manage-inventories' element={<ManageInventories></ManageInventories>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
