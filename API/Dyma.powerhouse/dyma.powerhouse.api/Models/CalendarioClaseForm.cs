﻿using System;
    public class CalendarioClaseForm
    {
        [Required]
        public int NPK_CalendarioClase { get; set; }
        [Required]
        public int NFK_Calendario { get; set; }
        [Required]
        public int NFK_Instructor { get; set; }
        [Required]
        public string HoraInicio { get; set; }
        [Required]
        public int Duracion { get; set; }
        [Required]
        public string Actividad { get; set; }
    }