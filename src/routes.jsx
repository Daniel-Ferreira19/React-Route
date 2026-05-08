
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio/inicio";
import SobreMim from "./paginas/SobreMim/SobreMim";
import Menu from "./paginas/Menu/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>padina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes;

//algumas das stack que aprendi foi a implementação do React Router,
// nele conseguiremos fazer aplicações para varias paginas.