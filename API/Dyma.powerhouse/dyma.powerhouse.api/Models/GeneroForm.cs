using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class GeneroForm
    {
        [Required]
        public int NPK_Genero { get; set; }
        [Required]
        public string Genero { get; set; }
    }}