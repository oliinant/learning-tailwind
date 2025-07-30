import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login/Login.jsx"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
