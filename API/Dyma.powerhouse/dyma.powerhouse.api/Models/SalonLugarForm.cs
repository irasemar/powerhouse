﻿using System;
    public class SalonLugarForm
    {
        [Required]
        public int NPK_SalonLugar { get; set; }
        [Required]
        public int NFK_Salon { get; set; }
        [Required]
        public string SalonLugar { get; set; }
    }