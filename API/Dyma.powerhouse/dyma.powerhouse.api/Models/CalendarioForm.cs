﻿using System;
    public class CalendarioForm
    {
        [Required]
        public int NPK_Calendario { get; set; }
        [Required]
        public int NFK_Anio { get; set; }
        [Required]
        public int NFK_Semana { get; set; }
        [Required]
        public string Date { get; set; }
        [Required]
        public int NFK_Clase { get; set; }
    }