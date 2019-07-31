using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class AlturaAsientoForm
    {
        [Required]
        public int NPK_AlturaAsiento { get; set; }
        [Required]
        public string AlturaAsiento { get; set; }
    }}