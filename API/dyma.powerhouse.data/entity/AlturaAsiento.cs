using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("AlturaAsiento")]
    public class AlturaAsientoCatalogo
    {
        [Key]
        public long NPK_AlturaAsiento { get; set; }

        public string AlturaAsiento { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}