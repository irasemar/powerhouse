using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("Instructor")]
    public class InstructorCatalogo
    {
        [Key]
        public long NPK_Instructor { get; set; }

        public string Nombre { get; set; }

        public string Apellidos { get; set; }

        public string PasoFavoritoBici { get; set; }

        public string PasoFavoritoHiit { get; set; }

        public string ArtistaFavorito { get; set; }

        public string AnimalFavorito { get; set; }

        public string PeliculaFavorito { get; set; }

        public string Frase { get; set; }

        public string DescripcionSuClase { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}