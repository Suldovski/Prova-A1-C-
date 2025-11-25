import Navigate, { usestate,useEffect, useNavigate } from “react-router-dom”;
import { Chamado } from '../models/Chamado';

UseEffect(() => {
    carregarChamados();
}, []);
function carregarChamados() {
fetch('http://localhost:5000/chamado/listar')
.then((resposta) => resposta.json())
.then((chamados: chamado[]) => {
setChamados(chamados);
});
}
function CadastrarChamado(){
const navigate = useNavigate();
const [ChamadoId, setId] = useState(“ “);
const [Desricao, setDescricao] = useState(“ “);
function cadastrarTarefa(e: any) {
const chamado: Chamado = {
Id : ChamadoId,
descricao : Desricao,
};
fetch('http://localhost:5000/tarefas/cadastrar', {
method: 'POST',
headers: {
'content=Type”: “application/json',
},
body: JSON.stringify(chamado),
})
.then((resposta) => resposta.json())
.then((chamado: Chamado) => {
navigate(“/pages/chamado/listar”);
})
e.prevenDefault();
}
return (
<div>
<h1>Cadastrar Chamado</h1>
<form onSubmit={cadastrarChamado}>
<label>Descrição:</label>
<input
type="text"
placeholder="Digite a Descrição"
onChange={(e: any) => setDescricao(e.target.value)}
required
/>
<br />
<br />
<button type="submit">Cadastrar</button>
</form>
</div>
);
}
export default CadastrarChamado;
