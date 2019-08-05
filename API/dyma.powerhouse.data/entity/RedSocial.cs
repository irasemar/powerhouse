using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("RedSocial")]
    public class RedSocialCatalogo
    {
        [Key]
        public long NPK_RedSocial { get; set; }

        public string RedSocial { get; set; }

        public string RedSocialImagen { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}