using System;
using Dapper.Contrib.Extensions;

namespace yfos.att.data.entity
{
    [Table("Client")]
    public class Client
    {
        [Key]
        public long NPK_Client { get; set; }

        public int NFK_ClientType { get; set; }

        public string Account { get; set; }

        public string CompanyName { get; set; }

        public string FirstName { get; set; }

        public string LastFatherName { get; set; }

        public string LastMotherName { get; set; }

        public DateTime? Birthdate { get; set; }

        public int? NFK_IdentificationType { get; set; }

        public string NumberIdentification { get; set; }

        public string RFC { get; set; }

        public int? NFK_IncomeRange { get; set; }

        public string Other_IncomeRange { get; set; }

        public string Email { get; set; }

    }
}
