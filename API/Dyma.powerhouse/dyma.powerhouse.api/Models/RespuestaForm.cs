using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace dyma.powerhouse.api.Models
{
    public class RespuestaForm
    {
        public int NPK_Respuesta { get; set; }
        public string Respuesta { get; set; }
        public string DescError { get; set; }
        public int Error { get; set; }
    }
}