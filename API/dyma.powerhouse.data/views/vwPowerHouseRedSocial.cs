using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwPowerHouseRedSocial")]
    public class vwPowerHouseRedSocial
    {
        [Key]
        public int NPK_PowerHouseRedSocial { get; set; }

        public int NFK_RedSocial { get; set; }

        public string RedSocial { get; set; }
        public string RedSocialDesc { get; set; }
        public string RedSocialImagen { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}