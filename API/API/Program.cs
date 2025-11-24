using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();

var app = builder.Build();

app.MapGet("/", () => "Luan Suldovski");

//ENDPOINTS DE TAREFA
//GET: http://localhost:5273/api/chamado/listar
app.MapGet("/api/chamado/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Chamados.Any())
    {
        return Results.Ok(ctx.Chamados.ToList());
    }
    return Results.NotFound("Nenhum chamado encontrada");
});

//POST: http://localhost:5273/api/chamado/cadastrar
app.MapPost("/api/chamado/cadastrar", ([FromServices] AppDataContext ctx, [FromBody] Chamado chamado) =>
{
    ctx.Chamados.Add(chamado);
    ctx.SaveChanges();
    return Results.Created("", chamado);
});

//PUT: http://localhost:5273/chamado/alterar/{id}
app.MapPut("/api/chamado/alterar/{id}", ([FromServices] AppDataContext ctx, [FromRoute] string id) =>
{
  Chamado? chamado = ctx.Chamados.Find(id);
if (chamado is null)
{
return Results.NotFound("Chamado não encontrado!");
}

});

//GET: http://localhost:5273/chamado/naoconcluidas
app.MapGet("/api/chamado/abertos", ([FromServices] AppDataContext ctx) =>
{
    if (chamado.Status == "Aberto")
    {
        chamado.Status = "Em atendimento";
    }
    else if (chamado.Status == "Em atendimento")
    {
        chamado.Status = "Resolvido";
    }

        
});

//GET: http://localhost:5273/chamado/concluidas
app.MapGet("/api/chamado/resolvidos", ([FromServices] AppDataContext ctx) =>
{
    //Implementar a listagem dos chamados resolvidos
});


app.Run();


