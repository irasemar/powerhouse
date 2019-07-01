using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web;
using System.Web.Http;

namespace dyma.powerhouse.api.Controllers
{
    public class BaseController : ApiController
    {
        public string GetConnectionString()
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["sitDB"].ToString();
        }
        public void CreateDirectoryIfNotExists(string filePath)
        {
            var directory = new FileInfo(filePath).Directory;
            if (directory == null) throw new Exception("Directory not found");
            Directory.CreateDirectory(directory.FullName);
        }

        public int GetNpkSeller()
        {
            var usuario = HttpContext.Current.User.Identity as ClaimsIdentity;
            var npk = 0;
            if (usuario != null)
                npk = int.Parse(usuario.Claims.Where(r => r.Type == ClaimTypes.PrimarySid).FirstOrDefault().Value);
            return npk;
           
        }
        public int GetNpkUser()
        {
            var usuario = HttpContext.Current.User.Identity as ClaimsIdentity;
            var npk = 0;
            if (usuario != null)
                npk = int.Parse(usuario.Claims.Where(r => r.Type == ClaimTypes.Sid).FirstOrDefault().Value);
            return npk;

        }
        public int GetNpkStore()
        {
            var usuario = HttpContext.Current.User.Identity as ClaimsIdentity;
            var npk = 0;
            if (usuario != null)
                npk = int.Parse(usuario.Claims.Where(r => r.Type == ClaimTypes.PrimaryGroupSid).FirstOrDefault().Value);
            return npk;

        }
    }
}
