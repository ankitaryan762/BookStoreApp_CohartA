using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Manager.IManager;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.UI.Pages.Account.Internal;
using Microsoft.AspNetCore.Mvc;
using Model.ModelCLasses;
using Repository.Context;

namespace BookStoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginBLManager _loginManager;

        public LoginController(ILoginBLManager loginManager)
        {
            this._loginManager = loginManager;
        }

        [Route("login")]
        [HttpPost]
        public IActionResult LogIn(LogInModel loginModel)
        {
            var result =  this._loginManager.LogIn(loginModel);
            return this.Ok(result);
        }

        [Route("signup")]
        [HttpPost]
        public IActionResult SignUp(LogInModel loginModel)
        {
            var result = this._loginManager.SignUp(loginModel);
            return this.Ok(result);
        }
    }
}




