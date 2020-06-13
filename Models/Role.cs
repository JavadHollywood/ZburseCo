using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace ZburseCo.Models
{
    public class Role:IdentityRole<int>
    {
        public ICollection<UserRole> UserRoles{set;get;}
    }
}