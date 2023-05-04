import Appointment from "./pages/appointment/Appointment";
import Home from "./pages/home/Home";
import Header  from "./components/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from "./pages/notFound/NotFound";
import Login from './pages/login_signup/Login'
import Signup from './pages/login_signup/Signup'

function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route exact path="/" Component={Home} />
  <Route path="/appointment" Component={Appointment} />
  <Route exact path="/login" Component={Login} />
  <Route path="/signup" Component={Signup}/>
  <Route path="*" Component={NotFound} />
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
