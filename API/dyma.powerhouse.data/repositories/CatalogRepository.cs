using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Dapper.Contrib.Extensions;
using System.Data;
using dyma.powerhouse.data.entity;
using dyma.powerhouse.data.views;

namespace dyma.powerhouse.data.repositories
{
    internal class CatalogRepository : RepositoryBase
    {
        public CatalogRepository(string ConnectionString) : base(ConnectionString)
        {

        }
        public List<vwGenero> TraerGeneros(int? Activo)
        {
            var resp = new List<vwGenero>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwGenero>("Select * From vwGenero with(nolock) Where Activo = IsNull(@Activo, Activo) order by Genero", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public GeneroCatalogo GuardarGenero(GeneroCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Genero Datos requeridos");

            if (datos.NPK_Genero == 0)
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            datos.Activo = 1;
                            datos.FechaCreacion = DateTime.Now;
                            datos.CreadoPor = NFK_User;
                            datos.NPK_Genero = connection.Insert<GeneroCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Genero = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            else
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            var fab = connection.Get<GeneroCatalogo>(datos.NPK_Genero, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<GeneroCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Genero = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public GeneroCatalogo GuardarGeneroActivo(long NPK_Genero, int Activo, int NFK_User)
        {
            GeneroCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<GeneroCatalogo>(NPK_Genero, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<GeneroCatalogo>(fab, tran);
                        tran.Commit();
                        datos = fab;
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        throw ex;
                    }

                }
            }

            return datos;
        }
        public List<vwAlturaAsiento> TraerAlturaAsientos(int? Activo)
        {
            var resp = new List<vwAlturaAsiento>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwAlturaAsiento>("Select * From vwAlturaAsiento with(nolock) Where Activo = IsNull(@Activo, Activo) order by AlturaAsiento", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public AlturaAsientoCatalogo GuardarAlturaAsiento(AlturaAsientoCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("AlturaAsiento Datos requeridos");

            if (datos.NPK_AlturaAsiento == 0)
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            datos.Activo = 1;
                            datos.FechaCreacion = DateTime.Now;
                            datos.CreadoPor = NFK_User;
                            datos.NPK_AlturaAsiento = connection.Insert<AlturaAsientoCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_AlturaAsiento = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            else
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            var fab = connection.Get<AlturaAsientoCatalogo>(datos.NPK_AlturaAsiento, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<AlturaAsientoCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_AlturaAsiento = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public AlturaAsientoCatalogo GuardarAlturaAsientoActivo(long NPK_AlturaAsiento, int Activo, int NFK_User)
        {
            AlturaAsientoCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<AlturaAsientoCatalogo>(NPK_AlturaAsiento, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<AlturaAsientoCatalogo>(fab, tran);
                        tran.Commit();
                        datos = fab;
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        throw ex;
                    }

                }
            }

            return datos;
        }

        public List<vwDistanciaAsiento> TraerDistanciaAsientos(int? Activo)
        {
            var resp = new List<vwDistanciaAsiento>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwDistanciaAsiento>("Select * From vwDistanciaAsiento with(nolock) Where Activo = IsNull(@Activo, Activo) order by DistanciaAsiento", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public DistanciaAsientoCatalogo GuardarDistanciaAsiento(DistanciaAsientoCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("DistanciaAsiento Datos requeridos");

            if (datos.NPK_DistanciaAsiento == 0)
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            datos.Activo = 1;
                            datos.FechaCreacion = DateTime.Now;
                            datos.CreadoPor = NFK_User;
                            datos.NPK_DistanciaAsiento = connection.Insert<DistanciaAsientoCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_DistanciaAsiento = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            else
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            var fab = connection.Get<DistanciaAsientoCatalogo>(datos.NPK_DistanciaAsiento, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<DistanciaAsientoCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_DistanciaAsiento = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public DistanciaAsientoCatalogo GuardarDistanciaAsientoActivo(long NPK_DistanciaAsiento, int Activo, int NFK_User)
        {
            DistanciaAsientoCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<DistanciaAsientoCatalogo>(NPK_DistanciaAsiento, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<DistanciaAsientoCatalogo>(fab, tran);
                        tran.Commit();
                        datos = fab;
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        throw ex;
                    }

                }
            }

            return datos;
        }

        public List<vwAlturaManubrio> TraerAlturaManubrios(int? Activo)
        {
            var resp = new List<vwAlturaManubrio>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwAlturaManubrio>("Select * From vwAlturaManubrio with(nolock) Where Activo = IsNull(@Activo, Activo) order by AlturaManubrio", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public AlturaManubrioCatalogo GuardarAlturaManubrio(AlturaManubrioCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("AlturaManubrio Datos requeridos");

            if (datos.NPK_AlturaManubrio == 0)
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            datos.Activo = 1;
                            datos.FechaCreacion = DateTime.Now;
                            datos.CreadoPor = NFK_User;
                            datos.NPK_AlturaManubrio = connection.Insert<AlturaManubrioCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_AlturaManubrio = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            else
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            var fab = connection.Get<AlturaManubrioCatalogo>(datos.NPK_AlturaManubrio, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<AlturaManubrioCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_AlturaManubrio = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public AlturaManubrioCatalogo GuardarAlturaManubrioActivo(long NPK_AlturaManubrio, int Activo, int NFK_User)
        {
            AlturaManubrioCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<AlturaManubrioCatalogo>(NPK_AlturaManubrio, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<AlturaManubrioCatalogo>(fab, tran);
                        tran.Commit();
                        datos = fab;
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        throw ex;
                    }

                }
            }

            return datos;
        }

        public List<vwDistanciaManubrio> TraerDistanciaManubrios(int? Activo)
        {
            var resp = new List<vwDistanciaManubrio>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwDistanciaManubrio>("Select * From vwDistanciaManubrio with(nolock) Where Activo = IsNull(@Activo, Activo) order by DistanciaManubrio", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public DistanciaManubrioCatalogo GuardarDistanciaManubrio(DistanciaManubrioCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("DistanciaManubrio Datos requeridos");

            if (datos.NPK_DistanciaManubrio == 0)
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            datos.Activo = 1;
                            datos.FechaCreacion = DateTime.Now;
                            datos.CreadoPor = NFK_User;
                            datos.NPK_DistanciaManubrio = connection.Insert<DistanciaManubrioCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_DistanciaManubrio = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            else
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            var fab = connection.Get<DistanciaManubrioCatalogo>(datos.NPK_DistanciaManubrio, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<DistanciaManubrioCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_DistanciaManubrio = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public DistanciaManubrioCatalogo GuardarDistanciaManubrioActivo(long NPK_DistanciaManubrio, int Activo, int NFK_User)
        {
            DistanciaManubrioCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<DistanciaManubrioCatalogo>(NPK_DistanciaManubrio, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<DistanciaManubrioCatalogo>(fab, tran);
                        tran.Commit();
                        datos = fab;
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        throw ex;
                    }

                }
            }

            return datos;
        }

        public List<vwTallaZapato> TraerTallaZapatos(int? Activo)
        {
            var resp = new List<vwTallaZapato>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwTallaZapato>("Select * From vwTallaZapato with(nolock) Where Activo = IsNull(@Activo, Activo) order by TallaZapato", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public TallaZapatoCatalogo GuardarTallaZapato(TallaZapatoCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("TallaZapato Datos requeridos");

            if (datos.NPK_TallaZapato == 0)
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            datos.Activo = 1;
                            datos.FechaCreacion = DateTime.Now;
                            datos.CreadoPor = NFK_User;
                            datos.NPK_TallaZapato = connection.Insert<TallaZapatoCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_TallaZapato = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            else
            {
                using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
                {
                    connection.Open();

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            var fab = connection.Get<TallaZapatoCatalogo>(datos.NPK_TallaZapato, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<TallaZapatoCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_TallaZapato = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public TallaZapatoCatalogo GuardarTallaZapatoActivo(long NPK_TallaZapato, int Activo, int NFK_User)
        {
            TallaZapatoCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<TallaZapatoCatalogo>(NPK_TallaZapato, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<TallaZapatoCatalogo>(fab, tran);
                        tran.Commit();
                        datos = fab;
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        throw ex;
                    }

                }
            }

            return datos;
        }
    }
}
