using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("Clase")]
    public class ClaseCatalogo
    {
        [Key]
        public long NPK_Clase { get; set; }

        public string Clase { get; set; }

        public string DescripcionClase { get; set; }

        public int Tiempo { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}