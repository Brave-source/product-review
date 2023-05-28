import Header from './components/Header';
import Authentication from './components/Authentication';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FetchProducts from "./components/FetchProducts"
import SingleProduct from "./components/SinlgeProduct"

function App() {
  
  return (
   <>
   <Header />
    <div className="container">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<FetchProducts />}></Route>
            <Route path="/:name" element={<SingleProduct />}></Route>
          </Routes>
        </BrowserRouter>
    {/* <Authentication /> */}
  </div>
 </>
 );
}
export default App;