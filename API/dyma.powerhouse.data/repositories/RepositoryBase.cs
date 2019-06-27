using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dyma.powerhouse.data.repositories
{
    internal class RepositoryBase
    {
        protected string sqlConnectionString;

        /// <summary>
        /// Initializes a new instance of the <see cref="RepositoryBase"/> class.
        /// </summary>
        /// <param name="connectionString">The connection string.</param>
        protected RepositoryBase(string connectionString)
        {
            sqlConnectionString = connectionString;
        }
    }
}
