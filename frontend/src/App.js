import Appointment from "./pages/appointment/Appointment";
import Home from "./pages/home/Home";
import Header  from "./components/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from "./pages/notFound/NotFound";
import Footer from "./pages/footer/Footer";


function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route exact path="/" Component={Home} />
  <Route path="/bookappointment" Component={Appointment} />
  <Route path="*" Component={NotFound} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  
  );
}

export default App;
