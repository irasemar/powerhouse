using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwUsuario")]
    public class vwUser
    {
        [Key]
        public int NPK_Usuario { get; set; }

        public string Nombre { get; set; }

        public string Apellidos { get; set; }

        public string Usuario { get; set; }

        public string Contrasena { get; set; }

        public string Telefono { get; set; }

        public DateTime? FechaNacimiento { get; set; }

        public string Genero { get; set; }

        public string ContactoEmergencia { get; set; }

        public string TelefonoContacto { get; set; }

        public int? BikeSetupAlturaAsiento { get; set; }

        public int? BikeSetupDistanciaAsiento { get; set; }

        public int? BikeSetupDistanciaManubrio { get; set; }

        public int? BikeSetupAlturaManubrio { get; set; }

        public decimal? TallaZapato { get; set; }

        public int? QuieroOfertas { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}