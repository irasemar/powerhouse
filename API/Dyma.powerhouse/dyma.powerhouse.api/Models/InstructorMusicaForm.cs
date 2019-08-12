using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class InstructorMusicaForm
    {
        [Required]
        public int NPK_InstructorMusica { get; set; }
        [Required]
        public int NFK_Instructor { get; set; }
        [Required]
        public string Musica { get; set; }
        [Required]
        public string imagen { get; set; }
    }}