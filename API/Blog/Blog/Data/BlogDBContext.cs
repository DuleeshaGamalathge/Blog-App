using Blog.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Blog.Data
{
    public class BlogDBContext : DbContext
    {
        public BlogDBContext(DbContextOptions options) : base(options)
        {
        }

        //DBSet
        public DbSet<Post> Posts { get; set; }
    }
}
