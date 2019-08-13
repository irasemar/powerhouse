using System;using System.Collections.Generic;using System.Linq;using System.Web;using System.ComponentModel.DataAnnotations;namespace dyma.powerhouse.api.Models{
    public class TipoTarjetaForm
    {
        [Required]
        public int NPK_TipoTarjeta { get; set; }
        [Required]
        public string TipoTarjeta { get; set; }
    }}