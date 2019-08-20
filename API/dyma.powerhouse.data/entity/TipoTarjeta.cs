using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("TipoTarjeta")]
    public class TipoTarjetaCatalogo
    {
        [Key]
        public long NPK_TipoTarjeta { get; set; }

        public string TipoTarjeta { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}