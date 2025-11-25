import React, { useEffect, useState } from 'react';
import { Chamado } from '../models/Chamado';

function ListarChamadosResolvidos() {
const [chamados, setChamados] = useState<Chamado[]>([]);
useEffect(() => {
carregarChamados();
}, []);
function carregarChamados() {
fetch('http://localhost:5000/api/chamado/resolvidos')
.then((resposta) => resposta.json())
.then((chamados: Chamado[]) => {
console.table(chamados);
setChamados(chamados);
});
}
return (
<div>
<h1>Listar Chamados</h1>
<table>
<thead>
<tr>
<th>#</th>
<th>ID do Chamado</th>
<th>Descrição</th>
<th>Status</th>
<th>Criado Em</th>
</tr>
</thead>
<tbody>
{chamados.map((chamado) => (
<tr key={chamado.chamadoid}>
<td>{chamado.tarefaid}</td>
<td>{chamado.descricao}</td>
<td>{chamado.status}</td>
<td>{chamado.criadoEM}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}

export default ListarChamadosResolvidos