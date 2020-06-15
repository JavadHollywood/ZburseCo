using System.ComponentModel.DataAnnotations;

namespace ZburseCo.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "you must specify password between 4 and 8")]
        public string Password { get; set; }

        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        [Required]
        public string Email { get; set; }
    }
}