import Appointment from "./pages/appointment/Appointment";
import Home from "./pages/home/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" Component={Home} />
  <Route path="/appointment" Component={Appointment} />
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
