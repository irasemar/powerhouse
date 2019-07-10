using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("AlturaManubrio")]
    public class AlturaManubrioCatalogo
    {
        [Key]
        public long NPK_AlturaManubrio { get; set; }

        public string AlturaManubrio { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}