using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class PaqueteForm
    {
        [Required]
        public int NPK_Paquete { get; set; }
        [Required]
        public string Paquete { get; set; }
        [Required]
        public int CantidadClases { get; set; }
        [Required]
        public decimal Precio { get; set; }
        [Required]
        public string DescripcionExpiracion { get; set; }

        public int ExpiracionDias { get; set; }
    }}