﻿using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("DistanciaAsiento")]
    public class DistanciaAsientoCatalogo
    {
        [Key]
        public long NPK_DistanciaAsiento { get; set; }

        public string DistanciaAsiento { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}