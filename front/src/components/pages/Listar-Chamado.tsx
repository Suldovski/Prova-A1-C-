import React, { useEffect, useState } from 'react';
import { Chamado } from '../models/Chamados';


function ListarChamados(){
    const [chamados, setChamados] = useState<Chamado[]>([]);
useEffect(() => {
carregarChamados();
}, []);
function carregarChamados() {
fetch('http://localhost:5000/api/chamados/listar') 
.then((resposta) => resposta.json())
.then((chamados: Chamado[]) => {
console.table(chamados);
setChamados(chamados);
});

function alterar(id: string){
console.log(‘Id: ${id}’);
.put(‘http://localhost:5000/chamados/alterar/${id}’)
.then(resposta) => {
setChamados(resposta.data);

});

}

    return(
        <div>
            <h1>Listar Chamados</h1>
        </div>    
            );
return(
<div>
<h1>Listar Chamados</h1>
<table>
<thead>
<tr>
<th>#</th>
<th>ID do Chamado</th>
<th>Descrição</th>
<th>Criado Em</th>
<th>Status</th>
</tr>
</thead>
<tbody>
{chamados.map((chamados) => (
<tr key={Chamado.chamadoid}>
<td>{Chamado.chamadoid}</td>
<td>{Chamado.descricao}</td>
<td>{Chamado.status}</td>
<td>{Chamado.criadoEM}</td>
</tbody>
</table>
</div>
);
}
    
export default ListarChamados;