import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProviderPizza } from "./Context";
import Home from "./views/Home";
import PizzaInfo from "./views/PizzaInfo";
import Cart from "./views/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ProviderPizza>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaInfo />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProviderPizza>
    </div>
  );
}

export default App;
