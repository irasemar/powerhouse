using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class MesForm
    {
        [Required]
        public int NPK_Mes { get; set; }
        [Required]
        public int NumeroMes { get; set; }
        [Required]
        public string MesDescripcion { get; set; }
    }}