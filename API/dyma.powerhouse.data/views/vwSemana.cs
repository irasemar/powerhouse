using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwSemana")]
    public class vwSemana
    {
        [Key]
        public int NPK_Semana { get; set; }

        public int NFK_Anio { get; set; }
        public string Anio { get; set; }

        public int NumeroSemana { get; set; }

        public string FechaInicio { get; set; }

        public string FechaFin { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}