import { BrowserRouter,  Route ,Navigate, Routes } from "react-router-dom";
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Bookingcar from './pages/Bookingcar'
import SellCar from './pages/SellCar'
import BuyCar from './pages/BuyCar';
import RentCar from './pages/RentCar';
import 'antd/dist/antd.css'; 
import UserBookings from './pages/UserBookings';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import AddCar from './pages/AddCar';
import Main from './pages/Main';
import CarSold from './pages/Carsold';
import ContactUs from './pages/ContactUs';
import Paymentpage from "./pages/Paymentpage";


function App() {
 return( 

  <div className="App">

    <BrowserRouter>
           <Routes>        
             <Route path='/' exact element={<Main/> } />
             <Route path='/login' exact element={<Login/> } />
             <Route path='/register' exact  element={<Register/>} />
             <Route path='/buycar' exact  element={<BuyCar/>} />
             <Route path='/Sellcar' exact  element={<SellCar/>} />
             <Route path='/rentcar' exact  element={<RentCar/>} />
             <Route path='/contactus'  exact element={<ContactUs/>} />
             <Route path='/booking/:carid'   element={<Bookingcar/>} />
             <Route path='/CarSold/:carid'   element={<CarSold/>} />
             <Route path='/userbookings'   element={<UserBookings/>} />
             <Route path='/addcar'   element={<AddCar/>} />
             <Route path='/payment/:carid'   element={<Paymentpage/>} />
             <Route path='/editcar/:carid'   element={<EditCar/>} />
             <Route path='/admin'   element={<AdminHome/>} />
             </Routes>

     </BrowserRouter>

     </div>
  );
}

export default App;
