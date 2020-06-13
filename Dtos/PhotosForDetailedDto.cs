using System;

namespace ZburseCo.Dtos
{
    public class PhotosForDetailedDto
    {
        public int Id{set;get;}
        public string Url{set;get;}
        public string Description{set;get;}
        public DateTime DateAdded{set;get;}
        public bool IsMain{set;get;}

    }
}