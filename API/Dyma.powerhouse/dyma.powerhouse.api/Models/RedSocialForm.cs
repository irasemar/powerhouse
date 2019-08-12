using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class RedSocialForm
    {
        [Required]
        public int NPK_RedSocial { get; set; }
        [Required]
        public string RedSocial { get; set; }
        [Required]
        public string RedSocialImagen { get; set; }
    }}