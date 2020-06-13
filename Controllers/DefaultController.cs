using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ZburseCo.Controllers
{
   [AllowAnonymous]
   
  
    public class DefaultController:Controller
    {
        [AllowAnonymous]
        public ActionResult Index(){
            return Redirect("Home");
        }
    }
}