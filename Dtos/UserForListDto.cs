using System;

namespace ZburseCo.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Gender{set;get;}
        public int Age{set;get;}
        public string KnownAs{set;get;}
        public DateTime Created{set;get;}
        public DateTime LastActive{set;get;}
        public string City{set;get;}
        public string Country{set;get;}
        public string PhotoUrl{set;get;}
    }
}