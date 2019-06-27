using System;

using System.Data.Common;
using System.Data.SqlClient;


namespace dyma.powerhouse.data.util
{
    public static class DbManager
    {
        public static Func<string, DbConnection> ConnectionFactory = (clientConnectionString) => new SqlConnection(clientConnectionString);        
    }
}
