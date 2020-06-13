using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ZburseCo.Data;
using ZburseCo.Dtos;

namespace ZburseCo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController:ControllerBase
    {
        private readonly IRepository _repo;
        private readonly IMapper _mapper;

        public UserController(IRepository repo , IMapper mapper)
        {
            this._repo=repo;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users=await _repo.GetUsers();
            var usersToReturn=_mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToReturn);
        }

         [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user=await _repo.GetUser(id);
            var userToReturn=_mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }
    }
}