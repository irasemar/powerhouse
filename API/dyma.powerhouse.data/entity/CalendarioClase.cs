using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("CalendarioClase")]
    public class CalendarioClaseCatalogo
    {
        [Key]
        public long NPK_CalendarioClase { get; set; }

        public int NFK_Calendario { get; set; }

        public int NFK_Instructor { get; set; }

        public string HoraInicio { get; set; }

        public int Duracion { get; set; }

        public string Actividad { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}