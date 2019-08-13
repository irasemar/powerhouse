using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("AñoTarjeta")]
    public class AñoTarjetaCatalogo
    {
        [Key]
        public long NPK_AñoTarjeta { get; set; }

        public int Anio { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}