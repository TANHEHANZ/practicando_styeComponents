import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/home";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Logaut />} /> */}
        <Route path="/" element={<Nav/>}>
        <Route path="inicio" element={<Inicio/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
