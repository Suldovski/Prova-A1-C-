import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListarChamados from "./components/pages/Listar-Chamado";
import ListarChamadosAbertos from './components/pages/Listar-abertos';
import ListarChamadosResolvidos from './components/pages/Listar-resolvidos';
import CadastrarChamado from './components/Cadastrar-chamado';

function App() {
return (
<div>
<div>
<BrowserRouter>
<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/pages/chamado/listar">Listar Chamado</Link> 
</li>
<li>
<Link to="/pages/chamado/abertos">Listar Chamados abertos</Link> 
</li>
<li>
<Link to="/pages/chamado/resolvidos">Listar Chamados resolvidos</Link> 
</li> 
<li>
<Link to="/pages/chamado/cadastrar">Cadastrar Chamado</Link>
</li>
</ul>
</nav>
<Routes>
<Route path="/pages/chamado/listar" element={<ListarChamados />} />
<Route path="/pages/tarefa/abertos" element={<ListarChamadosAbertos />}/>
<Route path="/pages/tarefa/resolvidos" element={<ListarChamadosResolvidos />}/>
<Route path="/pages/tarefa/cadastrar" element={<CadastrarChamado />}/>
</Routes>
<footer>
<p>Desenvolvido por Luan Suldovski</p>
</footer>
</BrowserRouter>
</div>
</div>
);
}


export default App;