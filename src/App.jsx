
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio/inicio";
import SobreMim from "./paginas/SobreMim/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobreMim" element={<SobreMim />} />
        <Route path="*" element={<div>padina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;