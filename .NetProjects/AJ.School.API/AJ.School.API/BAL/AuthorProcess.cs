using AJ.School.API.DAL;
using AJ.School.API.DomainModal;
using Microsoft.EntityFrameworkCore;

namespace AJ.School.API.BAL
{
    public class AuthorProcess
    {
        private readonly SchoolDbContext _schoolDbContext;
        public AuthorProcess(SchoolDbContext schoolDbContext)
        {
            _schoolDbContext = schoolDbContext;
        }

        public async Task<List<AuthorDM>?> GetAllAuthors()
        {
            var res = await _schoolDbContext.Authors.ToListAsync();
            if (res != null || res?.Count > 0)
                return res;
            return null;
        }

        public async Task<AuthorDM> GetSingleAuthor(int Id)
        {
            var res = await _schoolDbContext.Authors.FindAsync(Id);
            if (res != null)
                return res;
            else
                throw new Exception($"No author found on id {Id}");
        }

        public async Task<AuthorDM?> AddAuthor(AuthorDM authorDM)
        {
            if (authorDM == null)
                throw new Exception("Input data is null");

            await _schoolDbContext.Authors.AddAsync(authorDM);
            if (await _schoolDbContext.SaveChangesAsync() > 0)
                return authorDM;
            else
                throw new Exception($"Author could not be saved, please try again");
        }
    }
}
