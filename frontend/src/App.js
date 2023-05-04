import Appointment from "./pages/appointment/Appointment";
import Home from "./pages/home/Home";
import Header  from "./components/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from "./pages/notFound/NotFound";


function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route exact path="/" Component={Home} />
  <Route path="/appointment" Component={Appointment} />
  <Route path="*" Component={NotFound} />
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
