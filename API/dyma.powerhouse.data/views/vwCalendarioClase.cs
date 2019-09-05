using System;using Dapper.Contrib.Extensions;namespace dyma.powerhouse.data.views{
    [Table("vwCalendarioClase")]
    public class vwCalendarioClase
    {
        [Key]
        public int NPK_CalendarioClase { get; set; }

        public int NFK_Calendario { get; set; }

        public int NFK_Instructor { get; set; }
        public string Instructor { get; set; }
        public int NFK_InstructorAdjunto { get; set; }
        public string InstructorAdjunto { get; set; }

        public string HoraInicio { get; set; }

        public int Duracion { get; set; }

        public string Actividad { get; set; }

        public int CreadoPor { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int? ModificadoPor { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public short Activo { get; set; }
    }}