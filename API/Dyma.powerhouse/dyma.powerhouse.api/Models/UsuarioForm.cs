using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class UsuarioForm
    {
        [Required]
        public int NPK_Usuario { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string Usuario { get; set; }
        [Required]
        public string Contrasena { get; set; }

        public string Telefono { get; set; }

        public string FechaNacimiento { get; set; }

        public string Genero { get; set; }

        public string ContactoEmergencia { get; set; }

        public string TelefonoContacto { get; set; }

        public string BikeSetupAlturaAsiento { get; set; }

        public string BikeSetupDistanciaAsiento { get; set; }

        public string BikeSetupDistanciaManubrio { get; set; }

        public string BikeSetupAlturaManubrio { get; set; }

        public string TallaZapato { get; set; }

        public int QuieroOfertas { get; set; }
        public string Correo { get; set; }
    }}
