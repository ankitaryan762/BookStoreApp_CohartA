using Manager.IManager;
using Model.ModelCLasses;
using Repository.Context;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager.ManagerIMPL
{
    public class LoginManager : ILoginBLManager
    {
        private readonly ILoginRepo _loginRepo;

        public LoginManager(ILoginRepo loginRepo)
        {
            this._loginRepo = loginRepo;
        }

        public bool LogIn(LogInModel loginModel)
        {
           return  this._loginRepo.LogIn(loginModel);
        }

        public bool SignUp(LogInModel loginModel)
        {
            return this._loginRepo.SignUp(loginModel);
        }
    }
}
