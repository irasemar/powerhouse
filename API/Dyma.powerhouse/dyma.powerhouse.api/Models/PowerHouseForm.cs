﻿using System;
    public class PowerHouseForm
    {
        [Required]
        public int NPK_PowerHouse { get; set; }
        [Required]
        public string Direccion { get; set; }
        [Required]
        public string Telefonos { get; set; }

        public string Latitud { get; set; }

        public string Longitud { get; set; }
    }