using System;
using Dapper.Contrib.Extensions;

namespace yfos.att.data.entity
{
    [Table("ClientAddress")]
    public class ClientAddress
    {
        [Key]
        public long NPK_ClientAddress { get; set; }

        public long NFK_Client { get; set; }

        public int NFK_AddressType { get; set; }

        public string ExternalNumber { get; set; }

        public string InternalNumber { get; set; }

        public string Street { get; set; }

        public string Neighborhood { get; set; }

        public string City { get; set; }

        public int NFK_State { get; set; }

        public string Comments { get; set; }

    }
}
