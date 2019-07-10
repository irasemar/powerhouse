using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace dyma.powerhouse.api.Models
{
    public class RegisterForm
    {
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string Usuario { get; set; }
        [Required]
        public string Contrasena { get; set; }
        [Required]
        public string ContactoEmergencia { get; set; }
        [Required]
        public string TelefonoContacto { get; set; }
        [Required]
        public int QuieroOfertas { get; set; }
    }
}