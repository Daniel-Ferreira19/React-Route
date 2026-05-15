
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio/inicio";
import SobreMim from "./paginas/SobreMim/SobreMim";
import Menu from "./paginas/Menu/Menu";
import Rodape from "./paginas/Rodape/Rodape";
import PaginaPadrao from "./paginas/PaginaPadrão/PaginaPadao";
import Post from "./paginas/Post/Post";
import NaoEncontrada from "./paginas/NaoEncontrada/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>

        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="post/:id" element={<Post/>}/>
        </Route>
        
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <Rodape />
    </BrowserRouter>

  )
}

export default AppRoutes;

//algumas das stack que aprendi foi a implementação do React Router,
// nele conseguiremos fazer aplicações para varias paginas.