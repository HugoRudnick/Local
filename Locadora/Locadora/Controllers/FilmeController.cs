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
    public class FilmeController : ControllerBase
    {
        private readonly LocadoraDBContext _context;

        public FilmeController(LocadoraDBContext context)
        {
            _context = context;
        }

        // GET: api/Filme
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Filmes>>> GetFilmes()
        {
            return await _context.Filmes.ToListAsync();
        }

        // GET: api/Filme/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Filmes>> GetFilmes(int id)
        {
            var filmes = await _context.Filmes.FindAsync(id);

            if (filmes == null)
            {
                return NotFound();
            }

            return filmes;
        }

        // PUT: api/Filme/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFilmes(int id, Filmes filmes)
        {
            if (id != filmes.Id)
            {
                return BadRequest();
            }

            _context.Entry(filmes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FilmesExists(id))
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

        // POST: api/Filme
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Filmes>> PostFilmes(Filmes filmes)
        {
            _context.Filmes.Add(filmes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFilmes", new { id = filmes.Id }, filmes);
        }

        // DELETE: api/Filme/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Filmes>> DeleteFilmes(int id)
        {
            var filmes = await _context.Filmes.FindAsync(id);
            if (filmes == null)
            {
                return NotFound();
            }

            _context.Filmes.Remove(filmes);
            await _context.SaveChangesAsync();

            return filmes;
        }

        private bool FilmesExists(int id)
        {
            return _context.Filmes.Any(e => e.Id == id);
        }
    }
}
