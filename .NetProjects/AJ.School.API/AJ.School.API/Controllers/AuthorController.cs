using AJ.School.API.BAL;
using AJ.School.API.DomainModal;
using AJ.School.API.DomainModal.Root;
using AJ.School.API.Helper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace AJ.School.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly AuthorProcess _authorProcess;
        public AuthorController(AuthorProcess authorProcess)
        {
            _authorProcess = authorProcess;
        }

        [HttpGet]
        public async Task<ActionResult<ApiResponse<AuthorDM>>> GetAll()
        {
            try
            {
                var authors = await _authorProcess.GetAllAuthors();
                authors = null;
                return Ok(ModelConverter<AuthorDM>.ResponseConverter(authors, "No author found", ErrorType.Success_NoLog));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
       

        [HttpGet("{Id}")]
        public async Task<ActionResult<ApiResponse1<AuthorDM>>> GetSingle(int Id)
        {
            try
            {
                var author = await _authorProcess.GetSingleAuthor(Id);
                return Ok(ModelConverter<AuthorDM>.ResponseConverter(author, $"No author found on Id {Id}", ErrorType.Success_NoLog));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddAuthor([FromBody] AuthorDM authorDM)
        {
            try
            {
                var author = await _authorProcess.AddAuthor(authorDM);
                    return CreatedAtAction(nameof(GetSingle),new { Id = author?.Id} ,author);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
