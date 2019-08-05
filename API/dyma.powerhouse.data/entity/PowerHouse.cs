using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("PowerHouse")]
    public class PowerHouseCatalogo
    {
        [Key]
        public long NPK_PowerHouse { get; set; }

        public string Direccion { get; set; }

        public string Telefonos { get; set; }

        public string Latitud { get; set; }

        public string Longitud { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}