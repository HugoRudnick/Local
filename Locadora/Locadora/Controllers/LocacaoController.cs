using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Locadora.Modelos;

namespace Locadora.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocacaoController : ControllerBase
    {
        private readonly LocadoraDBContext _context;

        public LocacaoController(LocadoraDBContext context)
        {
            _context = context;
        }

        // GET: api/Locacao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Locacoes>>> GetLocacoes()
        {
            return await _context.Locacoes.ToListAsync();
        }

        // GET: api/Locacao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Locacoes>> GetLocacoes(int id)
        {
            var locacoes = await _context.Locacoes.FindAsync(id);

            if (locacoes == null)
            {
                return NotFound();
            }

            return locacoes;
        }

        // PUT: api/Locacao/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLocacoes(int id, Locacoes locacoes)
        {
            if (id != locacoes.Id)
            {
                return BadRequest();
            }

            _context.Entry(locacoes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LocacoesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Locacao
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Locacoes>> PostLocacoes(Locacoes locacoes)
        {
            _context.Locacoes.Add(locacoes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLocacoes", new { id = locacoes.Id }, locacoes);
        }

        // DELETE: api/Locacao/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Locacoes>> DeleteLocacoes(int id)
        {
            var locacoes = await _context.Locacoes.FindAsync(id);
            if (locacoes == null)
            {
                return NotFound();
            }

            _context.Locacoes.Remove(locacoes);
            await _context.SaveChangesAsync();

            return locacoes;
        }

        private bool LocacoesExists(int id)
        {
            return _context.Locacoes.Any(e => e.Id == id);
        }
    }
}
