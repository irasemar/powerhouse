﻿using System;
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
        public int ExpiracionDias { get; set; }
    }