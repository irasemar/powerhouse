using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwDistanciaManubrio")]
    public class vwDistanciaManubrio
    {
        [Key]
        public int NPK_DistanciaManubrio { get; set; }

        public string DistanciaManubrio { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}