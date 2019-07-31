using System;
using Dapper.Contrib.Extensions;
using Newtonsoft.Json;

namespace dyma.powerhouse.data.views
{
    [Table("vwRespuesta")]
    public class vwRespuesta
    {
        public int NPK_Respuesta { get; set; }
        public string Respuesta { get; set; }
        public string DescError { get; set; }
        public int Error { get; set; }

    }
}