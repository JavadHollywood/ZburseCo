using System;
using System.Collections.Generic;

namespace ZburseCo.Dtos
{
    public class UserForDetailedDto
    {
         public int Id { get; set; }
        public string Username {  get; set; }
        public string Gender{set;get;}
        public int Age{set;get;}
        public string KnownAs{set;get;}
        public DateTime Created{set;get;}
        public DateTime LastActive{set;get;}
        public string Introduction{set;get;}
        public string LookingFor{set;get;}
        public string Interests{set;get;}
        public string City{set;get;}
        public string Country{set;get;}
        public string PhotoUrl{set;get;}
        public ICollection<PhotosForDetailedDto> Photos{set;get;}
    }
}