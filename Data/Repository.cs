using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ZburseCo.Models;

namespace ZburseCo.Data
{
    public class Repository:IRepository
    {

        private readonly DataContext _context;  
        public Repository(DataContext context)
        {
            this._context=context;
        }

        public void Add<T> (T entity) where T:class 
        {
            _context.Add(entity);
        }

         public void Delete<T> (T entity) where T:class 
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user=await _context.Users.Include(i=>i.Photos).SingleOrDefaultAsync(u=>u.Id==id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
           var users=await _context.Users.Include(i=>i.Photos).ToListAsync();
           return users;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync()>0;
        }

       
    }
}