using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("Paquete")]
    public class PaqueteCatalogo
    {
        [Key]
        public long NPK_Paquete { get; set; }

        public string Paquete { get; set; }

        public int CantidadClases { get; set; }

        public decimal Precio { get; set; }

        public int ExpiracionDias { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}