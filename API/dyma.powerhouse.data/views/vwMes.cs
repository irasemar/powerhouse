using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwMes")]
    public class vwMes
    {
        [Key]
        public int NPK_Mes { get; set; }

        public int NumeroMes { get; set; }

        public string MesDescripcion { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}