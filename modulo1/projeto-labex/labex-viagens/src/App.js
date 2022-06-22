import { AdminHomePage } from "./pages/AdminHomePage";
import { HomePage } from './pages/HomePage';
import { AplicationFormPage } from './pages/ApplicationFormPage';
import { CreateTripPage } from './pages/CreateTripPage';
import { LoginPage } from './pages/LoginPage';
import { ListTripsPage } from './pages/ListTripsPage';
import { TripDetailsPage } from './pages/TripDetailsPage';



function App() {
  return (
    <div >
      <h1>Comecando</h1>
      <AdminHomePage />
      <HomePage />
      <AplicationFormPage />
      <CreateTripPage />
      <LoginPage />
      <ListTripsPage />
      <TripDetailsPage/>
    </div>
  )
}

export default App;
