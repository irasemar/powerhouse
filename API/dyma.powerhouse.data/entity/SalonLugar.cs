﻿using System;
    [Table("SalonLugar")]
    public class SalonLugarCatalogo
    {
        [Key]
        public long NPK_SalonLugar { get; set; }

        public int NFK_Salon { get; set; }

        public string SalonLugar { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }