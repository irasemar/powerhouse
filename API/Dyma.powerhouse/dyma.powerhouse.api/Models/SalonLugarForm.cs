using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class SalonLugarForm
    {
        [Required]
        public int NPK_SalonLugar { get; set; }
        [Required]
        public int NFK_Salon { get; set; }
        [Required]
        public string SalonLugar { get; set; }
    }}