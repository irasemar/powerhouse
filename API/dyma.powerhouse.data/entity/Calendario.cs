using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("Calendario")]
    public class CalendarioCatalogo
    {
        [Key]
        public long NPK_Calendario { get; set; }

        public int NFK_Año { get; set; }

        public int NFK_Semana { get; set; }

        public DateTime Date { get; set; }

        public int NFK_Clase { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}