using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwClase")]
    public class vwClase
    {
        [Key]
        public int NPK_Clase { get; set; }

        public string Clase { get; set; }

        public string DescripcionClase { get; set; }
        public string Color { get; set; }

        public int Tiempo { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}