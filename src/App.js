import { Login } from './Pages/Login';
import Registration from './Pages/Registration';
import Product from './Pages/Product';
import {BrowserRouter,Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route 
        path="/signin" element={ <Login/> } />
        <Route 
        path="/registration" element={ <Registration/> } />
        <Route 
        path="/product" element={ <Product/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
