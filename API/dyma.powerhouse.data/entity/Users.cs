using System;
using Dapper.Contrib.Extensions;
using Newtonsoft.Json;

namespace dyma.powerhouse.data.entity
{
    [Table("User")]
    public class User
    {
        [Key]
        public int NPK_User { get; set; }

        public string Username { get; set; }
        [JsonIgnore]
        public string Passsword { get; set; }

        public string FirstName { get; set; }

        public string LastFatherName { get; set; }

        public string LastMotherName { get; set; }
        [JsonIgnore]
        public int CreatedBy { get; set; }
        [JsonIgnore]
        public DateTime CreationDate { get; set; }
        [JsonIgnore]
        public int? ModifiedBy { get; set; }
        [JsonIgnore]
        public DateTime? ModificationDate { get; set; }

        public short Active { get; set; }
        public DateTime Birthdate { get; set; }
        public DateTime AdmissionDate { get; set; }
        public string urlPhoto { get; set; }

    }
}
