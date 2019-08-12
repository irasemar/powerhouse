using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("SalonLugar")]
    public class SalonLugarCatalogo
    {
        [Key]
        public long NPK_SalonLugar { get; set; }

        public int NFK_Salon { get; set; }

        public string SalonLugar { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}