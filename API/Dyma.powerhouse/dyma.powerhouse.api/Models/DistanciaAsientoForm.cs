using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class DistanciaAsientoForm
    {
        [Required]
        public int NPK_DistanciaAsiento { get; set; }
        [Required]
        public string DistanciaAsiento { get; set; }
    }}