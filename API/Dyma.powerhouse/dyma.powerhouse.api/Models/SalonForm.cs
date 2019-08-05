using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class SalonForm
    {
        [Required]
        public int NPK_Salon { get; set; }
        [Required]
        public string Salon { get; set; }
    }}