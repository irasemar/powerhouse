using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwPaquete")]
    public class vwPaquete
    {
        [Key]
        public int NPK_Paquete { get; set; }

        public string Paquete { get; set; }

        public int CantidadClases { get; set; }

        public decimal Precio { get; set; }

        public int ExpiracionDias { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}