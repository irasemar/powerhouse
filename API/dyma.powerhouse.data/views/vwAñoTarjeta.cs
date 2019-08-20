using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwAñoTarjeta")]
    public class vwAñoTarjeta
    {
        [Key]
        public int NPK_AñoTarjeta { get; set; }

        public int Anio { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}