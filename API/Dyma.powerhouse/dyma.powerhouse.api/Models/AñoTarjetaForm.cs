using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class AñoTarjetaForm
    {
        [Required]
        public int NPK_AñoTarjeta { get; set; }
        [Required]
        public int Anio { get; set; }
    }}