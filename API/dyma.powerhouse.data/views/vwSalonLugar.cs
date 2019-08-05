using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwSalonLugar")]
    public class vwSalonLugar
    {
        [Key]
        public int NPK_SalonLugar { get; set; }

        public int NFK_Salon { get; set; }

        public string SalonLugar { get; set; }
        public string Salon { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}