using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace ZburseCo.Models
{
    public class User :IdentityUser<int>
    {
        public string Gender{set;get;}
        public DateTime DateOfBirth{set;get;}
        public string KnownAs{set;get;}
        public DateTime Created{set;get;}
        public DateTime LastActive{set;get;}
        public string Introduction{set;get;}
        public string LookingFor{set;get;}
        public string Interests{set;get;}
        public string City{set;get;}
        public string Country{set;get;}
        public ICollection<Photo> Photos{set;get;}
        public ICollection<UserRole> UserRoles{set;get;}
    }
}
