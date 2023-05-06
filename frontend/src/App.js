import Appointment from "./pages/appointment/Appointment";
import Home from "./pages/home/Home";
import Header  from "./components/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from "./pages/notFound/NotFound";
import Footer from "./pages/footer/Footer";
import Login from "./pages/login_signup/Login";
import Signup from './pages/login_signup/Signup';
import Department from "./pages/department/Department";
function App() {
  return (
  <BrowserRouter>
  
  <Routes>
  <Route exact path="/" Component={Home} />

  <Route path="/bookappointment" Component={Appointment} />
  <Route path="/departments" Component={Department} />
  <Route path="/login" Component={Login} />
  <Route path="/signup" Component={Signup} />

  <Route path="*" Component={NotFound} />
  </Routes>
  
  </BrowserRouter>
  
  );
}

export default App;
