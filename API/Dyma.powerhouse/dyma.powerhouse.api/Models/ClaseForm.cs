using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class ClaseForm
    {
        [Required]
        public int NPK_Clase { get; set; }
        [Required]
        public string Clase { get; set; }
        [Required]
        public string DescripcionClase { get; set; }
        [Required]
        public int Tiempo { get; set; }
        public string Color { get; set; }
    }}