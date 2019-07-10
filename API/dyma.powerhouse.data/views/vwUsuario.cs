using System;
using Dapper.Contrib.Extensions;
using Newtonsoft.Json;

namespace dyma.powerhouse.data.views
{
    [Table("Usuario")]
    public class CatalogoUsuario
    {
        [Key]
        public long NPK_Usuario { get; set; }

        public string Usuario { get; set; }
        [JsonIgnore]
        public string Contrasena { get; set; }

        public string Nombre { get; set; }

        public string Apellidos { get; set; }

        public string Telefono{ get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public string Genero { get; set; }
        public string ContactoEmergencia { get; set; }
        public string TelefonoContacto { get; set; }
        public string BikeSetupAlturaAsiento { get; set; }
        public string BikeSetupDistanciaAsiento { get; set; }
        public string BikeSetupDistanciaManubrio { get; set; }
        public string BikeSetupAlturaManubrio { get; set; }
        public string TallaZapato { get; set; }
        public int QuieroOfertas { get; set; }

        [JsonIgnore]
        public int CreadoPor { get; set; }
        [JsonIgnore]
        public DateTime FechaCreacion { get; set; }
        [JsonIgnore]
        public int? ModificadoPor { get; set; }
        [JsonIgnore]
        public DateTime? FechaModificacion { get; set; }

        public short Activo { get; set; }
    }
    [Table("vwUsuario")]
    public class vwUsuario
    {
        [Key]
        public long NPK_Usuario { get; set; }

        public string Usuario { get; set; }
        [JsonIgnore]
        public string Contrasena { get; set; }

        public string Nombre { get; set; }

        public string Apellidos { get; set; }

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

        [JsonIgnore]
        public int CreadoPor { get; set; }
        [JsonIgnore]
        public DateTime FechaCreacion { get; set; }
        [JsonIgnore]
        public int? ModificadoPor { get; set; }
        [JsonIgnore]
        public DateTime? FechaModificacion { get; set; }

        public short Activo { get; set; }
    }
}
