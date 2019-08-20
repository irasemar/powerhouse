using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwTipoTarjeta")]
    public class vwTipoTarjeta
    {
        [Key]
        public int NPK_TipoTarjeta { get; set; }

        public string TipoTarjeta { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}