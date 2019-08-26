using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwCalendario")]
    public class vwCalendario
    {
        [Key]
        public int NPK_Calendario { get; set; }

        public int NFK_Año { get; set; }

        public int NFK_Semana { get; set; }

        public string Date { get; set; }

        public int NFK_Clase { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
        public string Anio { get; set; }
        public string NumeroSemana { get; set; }
        public string Clase { get; set; }
    }}