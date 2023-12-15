using AJ.School.API.DomainModal;
using Microsoft.EntityFrameworkCore;

namespace AJ.School.API.DAL
{
    public class SchoolDbContext : DbContext
    {
        public SchoolDbContext(DbContextOptions<SchoolDbContext> options)
            : base(options) 
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //Connection string - local server
            string connectionString = "Server=(localdb)\\MSSQLLocalDB; " +
                                      "Initial Catalog=SchooDb;" +
                                      "Integrated Security=true;";

            optionsBuilder.UseSqlServer(connectionString);
            base.OnConfiguring(optionsBuilder);
        }

        public DbSet<BookDM> Books { get; set; }  
        public DbSet<AuthorDM> Authors { get; set; }  

    }
}
