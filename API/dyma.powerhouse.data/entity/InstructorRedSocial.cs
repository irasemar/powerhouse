using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("InstructorRedSocial")]
    public class InstructorRedSocialCatalogo
    {
        [Key]
        public long NPK_InstructorRedSocial { get; set; }

        public int NFK_Instructor { get; set; }

        public int NFK_RedSocial { get; set; }

        public string RedSocial { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}