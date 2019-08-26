using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("Año")]
    public class AñoCatalogo
    {
        [Key]
        public long NPK_Año { get; set; }

        public int Año { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}