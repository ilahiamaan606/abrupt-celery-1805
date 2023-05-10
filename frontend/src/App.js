import Appointment from "./pages/appointment/Appointment";
import Home from "./pages/home/Home";
import Header  from "./components/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from "./pages/notFound/NotFound";
import Footer from "./pages/footer/Footer";
import Login from "./pages/login_signup/Login";
import Signup from './pages/login_signup/Signup';
import Department from "./pages/department/Department";
import Staffs from "./pages/staffs/Staffs";
import About from "./pages/About/About";

import Myappointments from "./pages/myAppointments/Myappointments";
import Adminlogin from "./pages/admin/Adminlogin";
import AdminDashPage from "./pages/admin/AdminDashPage";

function App() {
  let role = sessionStorage.getItem("role")

  return (
  <BrowserRouter>
  
  <Routes>
  <Route exact path="/" Component={Home} />

  <Route path="/bookappointment" Component={Appointment} />
  <Route path="/departments" Component={Department} />
  <Route path="/about" Component={About} />
  <Route path="/ourstaffs" Component={Staffs} />
  <Route path="/myappointments" Component={Myappointments} />
  <Route path="/login" Component={Login} />
  <Route path="/signup" Component={Signup} />
  <Route path="/adminlogin" Component={Adminlogin} />
  <Route path="/adminhome" Component={AdminDashPage} />

  <Route path="*" Component={NotFound} />
  </Routes>
  
  </BrowserRouter>
  
  );
}

export default App;
