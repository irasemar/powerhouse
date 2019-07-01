using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class DistanciaManubrioForm
    {
        [Required]
        public int NPK_DistanciaManubrio { get; set; }
        [Required]
        public string DistanciaManubrio { get; set; }
    }}