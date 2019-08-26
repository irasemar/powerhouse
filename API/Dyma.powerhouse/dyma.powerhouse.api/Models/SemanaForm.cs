using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class SemanaForm
    {
        [Required]
        public int NPK_Semana { get; set; }
        [Required]
        public int NFK_Anio { get; set; }
        [Required]
        public int NumeroSemana { get; set; }
        [Required]
        public string FechaInicio { get; set; }
        [Required]
        public string FechaFin { get; set; }
    }}