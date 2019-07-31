using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwDistanciaAsiento")]
    public class vwDistanciaAsiento
    {
        [Key]
        public int NPK_DistanciaAsiento { get; set; }

        public string DistanciaAsiento { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}