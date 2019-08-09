using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class InstructorRedSocialForm
    {
        [Required]
        public int NPK_InstructorRedSocial { get; set; }
        [Required]
        public int NFK_Instructor { get; set; }
        [Required]
        public int NFK_RedSocial { get; set; }
        [Required]
        public string RedSocial { get; set; }
    }}