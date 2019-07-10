using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwAlturaManubrio")]
    public class vwAlturaManubrio
    {
        [Key]
        public int NPK_AlturaManubrio { get; set; }

        public string AlturaManubrio { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}