using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwInstructor")]
    public class vwInstructor
    {
        [Key]
        public int NPK_Instructor { get; set; }

        public string Nombre { get; set; }

        public string Apellidos { get; set; }

        public string PasoFavoritoBici { get; set; }

        public string PasoFavoritoHiit { get; set; }

        public string ArtistaFavorito { get; set; }

        public string AnimalFavorito { get; set; }

        public string PeliculaFavorito { get; set; }

        public string Frase { get; set; }

        public string DescripcionSuClase { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
        public string Fotografia { get; set; }
        public string name { get; set; }
        public string image { get; set; }
    }}