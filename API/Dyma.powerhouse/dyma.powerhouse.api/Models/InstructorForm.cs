using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class InstructorForm
    {
        [Required]
        public int NPK_Instructor { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string PasoFavoritoBici { get; set; }
        [Required]
        public string PasoFavoritoHiit { get; set; }
        [Required]
        public string ArtistaFavorito { get; set; }
        [Required]
        public string AnimalFavorito { get; set; }
        [Required]
        public string PeliculaFavorito { get; set; }
        [Required]
        public string Frase { get; set; }
        [Required]
        public string DescripcionSuClase { get; set; }
    }}