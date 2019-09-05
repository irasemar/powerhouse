using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace dyma.powerhouse.api.Models
{
    public class LoginForm
    {
        [Required]
        public string username { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string password { get; set; }
    }
    public class ChangePassForm
    {
        [Required]
        public string username { get; set; }
        [Required]
        public string passwordactual { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string passwordnuevo { get; set; }
    }
    public class recuperarPassForm
    {
        [Required]
        public string username { get; set; }        
    }
}