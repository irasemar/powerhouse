using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("TallaZapato")]
    public class TallaZapatoCatalogo
    {
        [Key]
        public long NPK_TallaZapato { get; set; }

        public string TallaZapato { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}