using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ZburseCo.Models;

namespace ZburseCo.Data
{
    public class DataContext:IdentityDbContext<User,Role,int,
    IdentityUserClaim<int>,UserRole,IdentityUserLogin<int>,
    IdentityRoleClaim<int>,IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options):base(options) {}

        // public DbSet<User> Users{set;get;}
        public DbSet<Photo> Photos{set;get;}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            
            builder.Entity<UserRole>(UserRole=>{

                UserRole.HasKey(ur=>new {ur.UserId,ur.RoleId});

                UserRole.HasOne(ur=>ur.Role)
                .WithMany(r=>r.UserRoles)
                .HasForeignKey(ur=>ur.RoleId)
                .IsRequired();

                
                UserRole.HasOne(ur=>ur.User)
                .WithMany(r=>r.UserRoles)
                .HasForeignKey(ur=>ur.UserId)
                .IsRequired();

            });
        }

    }
}