using AJ.School.API.DAL;
using AJ.School.API.DomainModal;
using Microsoft.EntityFrameworkCore;

namespace AJ.School.API.BAL
{
    public class BookProcess
    {
        private readonly SchoolDbContext _schoolDbContext;
        public BookProcess(SchoolDbContext schoolDbContext)
        {
            _schoolDbContext = schoolDbContext;
        }

        public async Task<List<BookDM>> GetAllBooks()
        {
            var res = await _schoolDbContext.Books.ToListAsync();
            if (res != null)
                return res;
            else
                throw new Exception("No book found");
        }


        public async Task<BookDM> GetSingleBook(int Id)
        {
            var res = await _schoolDbContext.Books.FindAsync(Id);
            if (res != null)
                return res;
            else
                throw new Exception($"No book found on id {Id}");
        }

        public async Task<BookDM> AddBook(BookDM bookDM)
        {
            if (bookDM == null)
                throw new Exception("Input data is null");

            await _schoolDbContext.Books.AddAsync(bookDM);
            if (await _schoolDbContext.SaveChangesAsync() > 0)
                return bookDM;
            else
                throw new Exception($"Book could not be saved, please try again");
        }

    }
}
