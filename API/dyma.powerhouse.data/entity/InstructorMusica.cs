using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.entity{
    [Table("InstructorMusica")]
    public class InstructorMusicaCatalogo
    {
        [Key]
        public long NPK_InstructorMusica { get; set; }

        public int NFK_Instructor { get; set; }

        public string Musica { get; set; }

        public string imagen { get; set; }

        public int Activo { get; set; }

        public int CreadoPor { get; set; }

        public DateTime FechaCreacion { get; set; }

        public int? ModificadoPor { get; set; }

        public DateTime? FechaModificacion { get; set; }
    }}