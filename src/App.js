import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProviderPizza } from "./Context";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";

function App() {
  return (
    <div className="App">
      <ProviderPizza>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/cart" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </ProviderPizza>
    </div>
  );
}

export default App;
