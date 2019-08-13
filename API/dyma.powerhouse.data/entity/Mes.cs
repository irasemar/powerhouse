using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("Mes")]
    public class MesCatalogo
    {
        [Key]
        public long NPK_Mes { get; set; }

        public int NumeroMes { get; set; }

        public string MesDescripcion { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}