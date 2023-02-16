import { Login } from './Pages/Login';
import Registration from './Pages/Registration';
import Product from './Pages/Product';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Admin from './Pages/Admin';


function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route 
        path="/signin" element={ <Login/> } />
        <Route 
        path="/registration" element={ <Registration/> } />
        <Route 
        path="/product" element={ <Product/> } />
         <Route 
        path="/cart" element={ <Cart/> } />
        <Route 
        path="/admin" element={ <Admin/> } />
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
