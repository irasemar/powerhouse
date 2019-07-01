using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwAlturaAsiento")]
    public class vwAlturaAsiento
    {
        [Key]
        public int NPK_AlturaAsiento { get; set; }

        public string AlturaAsiento { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}