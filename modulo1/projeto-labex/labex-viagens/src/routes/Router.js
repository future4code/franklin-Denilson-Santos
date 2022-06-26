import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AdminHomePage } from '../pages/AdminHomePage';
import { AplicationFormPage } from '../pages/ApplicationFormPage';
import { CreateTripPage } from '../pages/CreateTripPage';
import { HomePage } from '../pages/HomePage';
import { ListTripsPage } from '../pages/ListTripsPage';
import { LoginPage } from '../pages/LoginPage';
import { TripDetailsPage } from '../pages/TripDetailsPage';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/admin/trips/list' element={<AdminHomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/trips/application' element={<AplicationFormPage/>}/>
            <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
            <Route path='/trips/list' element={<ListTripsPage/>}/>
            <Route path='/admin/trips:id' element={<TripDetailsPage/>}/>
            </Routes>
      </BrowserRouter>
    );
}