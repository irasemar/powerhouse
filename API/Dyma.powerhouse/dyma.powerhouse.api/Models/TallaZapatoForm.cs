using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class TallaZapatoForm
    {
        [Required]
        public int NPK_TallaZapato { get; set; }
        [Required]
        public string TallaZapato { get; set; }
    }}