using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwPowerHouse")]
    public class vwPowerHouse
    {
        [Key]
        public int NPK_PowerHouse { get; set; }

        public string Direccion { get; set; }

        public string Telefonos { get; set; }

        public string Latitud { get; set; }

        public string Longitud { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}