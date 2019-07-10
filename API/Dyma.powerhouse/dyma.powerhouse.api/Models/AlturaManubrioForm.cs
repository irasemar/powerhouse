using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class AlturaManubrioForm
    {
        [Required]
        public int NPK_AlturaManubrio { get; set; }
        [Required]
        public string AlturaManubrio { get; set; }
    }}