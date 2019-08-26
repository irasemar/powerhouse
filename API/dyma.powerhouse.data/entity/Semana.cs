using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("Semana")]
    public class SemanaCatalogo
    {
        [Key]
        public long NPK_Semana { get; set; }

        public int NFK_Año { get; set; }

        public int NumeroSemana { get; set; }

        public DateTime FechaInicio { get; set; }

        public DateTime FechaFin { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}