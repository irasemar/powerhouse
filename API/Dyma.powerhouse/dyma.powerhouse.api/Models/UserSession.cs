using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dyma.powerhouse.api.Models
{
    public class UserSession
    {
        public long NPK_Usuario { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Usuario { get; set; }
        public string Token { get; set; }
        public int AnioInicio { get; set; }
        public int CantidadClasesTomadas { get; set; }
    }
}