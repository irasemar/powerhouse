using System;
using Dapper.Contrib.Extensions;
using Newtonsoft.Json;
namespace yfos.att.data.entity
{
    [Table("ClientType")]
    public class ClientTypes
    {
        [Key]
        public int NPK_ClientType { get; set; }

        public string ClientType { get; set; }
        [JsonIgnore]
        public int CreatedBy { get; set; }
        [JsonIgnore]
        public DateTime CreationDate { get; set; }
        [JsonIgnore]
        public int? ModifiedBy { get; set; }
        [JsonIgnore]
        public DateTime? ModificationDate { get; set; }

        public short Active { get; set; }

    }
}
