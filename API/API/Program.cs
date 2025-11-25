using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();

builder.Services.AddCors(options =>
options.AddPolicy("Acesso Total",
configs => configs
.AllowAnyOrigin()
.AllowAnyHeader()
.AllowAnyMethod())
);

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
app.MapPut("/api/chamado/alterar/{ChamadoId}", ([FromServices] AppDataContext ctx, [FromRoute] string ChamadoId) =>
{
  Chamado? chamado = ctx.Chamados.Find(ChamadoId);
if (chamado is null)
{
return Results.NotFound("Chamado não encontrado!");
}

});

// GET: http://localhost:5000/api/chamado/abertos
app.MapGet("/api/chamado/abertos", ([FromServices] AppDataContext ctx) =>
{
   
    var chamadosAbertos = ctx.Chamados
        .Where(c => c.Status != "Concluída")
        .ToList();

    return Results.Ok(chamadosAbertos);
});


// GET: http://localhost:5000/api/chamado/resolvidos
app.MapGet("/api/chamado/resolvidos", ([FromServices] AppDataContext ctx) =>
{
    var chamadosConcluidos = ctx.Chamados;
});
