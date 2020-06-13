using System;

namespace ZburseCo.Models
{
    public class Photo
    {
        public int Id{set;get;}
        public string Url{set;get;}
        public string Description{set;get;}
        public DateTime DateAdded{set;get;}
        public bool IsMain{set;get;}
        public User User{set;get;}
        public int UserId{set;get;}
    }
}