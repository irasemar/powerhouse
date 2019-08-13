using System;
using Dapper.Contrib.Extensions;
using Newtonsoft.Json;
using System.Collections.Generic;

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
        //public int AnioInicio { get; set; }
        //public int CantidadClasesTomadas { get; set; }
    }
    public class vwUsuarioDatos
    {
        [Key]
        public long NPK_Usuario { get; set; }

        public int AnioInicio { get; set; }
        public int CantidadClasesTomadas { get; set; }
        public string NombreCompleto { get; set; }
    }
    public class vwVenta
    {
        [Key]
        public long NFK_Usuario { get; set; }

        public int NFK_Paquete { get; set; }
        public int Cantidad { get; set; }
    }
    public class vwVentaCarro
    {
        public int NFK_Usuario { get; set; }
        public int NFK_Paquete { get; set; }
        public int Cantidad { get; set; }
        public decimal PrecioVenta { get; set; }
        public string FechaVenta { get; set; }
        public string FechaPago { get; set; }
        public string Paquete { get; set; }
        public int CantidadClases { get; set; }
        public int ExpiracionDias { get; set; }
    }
    public class vwVentaCarroPago
    {
        public int NFK_Usuario { get; set; }
        public string TipoTarjeta { get; set; }
        public string NumeroTarjeta { get; set; }
        public string Titular { get; set; }
        public string CorreoElectronico { get; set; }
        public string NumAutorizacion { get; set; }
    }
    public class vwClasesDisponiblesWeeks
    {
        public int NumeroSemana { get; set; }
        public int NPK_Calendario { get; set; }
        public int NFK_Semana { get; set; }
        public int Anio { get; set; }
        public int NFK_Clase { get; set; }
        public List<vwClasesDisponiblesDia> days { get; set; }
    }
    public class vwClasesDisponiblesDia
    {
        public string DiaSemana { get; set; }
        public int Dia { get; set; }
        public List<vwClasesDisponibles> classes { get; set; }
    }
    public class vwClasesDisponibles
    {
        public int NFK_Calendario { get; set; }
        public string Fecha { get; set; }
        public int Anio { get; set; }
        public string FechaInicio { get; set; }
        public string FechaFin { get; set; }
        public int NPK_CalendarioClase { get; set; }
        public int NFK_Instructor { get; set; }
        public string HoraInicio { get; set; }
        public string Instructor { get; set; }
        public string Duracion { get; set; }
        public bool Reservado { get; set; }
    }
    public class vwClaseHeader
    {
        public int NPK_CalendarioClase { get; set; }
        public int NFK_Instructor { get; set; }
        public string Instructor { get; set; }        
        public string Fecha { get; set; }
        public string Clase { get; set; }
        public string Fotografia { get; set; }
        public int TengoClase { get; set; }
    }
    public class vwClaseReserva
    {
        public int NPK_Salon { get; set; }
        public string Salon { get; set; }
        public int NPK_SalonLugar { get; set; }
        public string LugarSalon { get; set; }
        public int NPK_ReservaClase { get; set; }
        public int NPK_CalendarioClase { get; set; }
        public bool Estatus { get; set; }
        public int NFK_Usuario { get; set; }
        
    }
}
