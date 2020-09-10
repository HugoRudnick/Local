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
    public class GeneroController : ControllerBase
    {
        private readonly LocadoraDBContext _context;

        public GeneroController(LocadoraDBContext context)
        {
            _context = context;
        }

        // GET: api/Genero
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Generos>>> Getgeneros()
        {
            return await _context.generos.ToListAsync();
        }

        // GET: api/Genero/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Generos>> GetGeneros(int id)
        {
            var generos = await _context.generos.FindAsync(id);

            if (generos == null)
            {
                return NotFound();
            }

            return generos;
        }

        // PUT: api/Genero/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGeneros(int id, Generos generos)
        {
            //if (id != generos.Id)
            //{
            //    return BadRequest();
            //}

            generos.Id = id;

            _context.Entry(generos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GenerosExists(id))
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

        // POST: api/Genero
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Generos>> PostGeneros(Generos generos)
        {
            _context.generos.Add(generos);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGeneros", new { id = generos.Id }, generos);
        }

        // DELETE: api/Genero/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Generos>> DeleteGeneros(int id)
        {
            var generos = await _context.generos.FindAsync(id);
            if (generos == null)
            {
                return NotFound();
            }

            _context.generos.Remove(generos);
            await _context.SaveChangesAsync();

            return generos;
        }

        private bool GenerosExists(int id)
        {
            return _context.generos.Any(e => e.Id == id);
        }
    }
}
