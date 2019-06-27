using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("DistanciaManubrio")]
    public class DistanciaManubrioCatalogo
    {
        [Key]
        public long NPK_DistanciaManubrio { get; set; }

        public string DistanciaManubrio { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}