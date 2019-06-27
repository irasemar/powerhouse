using System;
using Dapper.Contrib.Extensions;

namespace yfos.att.data.entity
{
    [Table("ClientReference")]
    public class ClientReference
    {
        [Key]
        public long NPK_ClientReference { get; set; }

        public int NFK_ReferenceType { get; set; }

        public string FirstName { get; set; }

        public string LastFatherName { get; set; }

        public string LastMotherName { get; set; }

        public int NFK_PhoneType { get; set; }

        public string Phone { get; set; }

    }
}
