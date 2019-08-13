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

        public List<vwClase> TraerClases(int? Activo)
        {
            var resp = new List<vwClase>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwClase>("Select * From vwClase with(nolock) Where Activo = IsNull(@Activo, Activo) order by Clase", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public ClaseCatalogo GuardarClase(ClaseCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Clase Datos requeridos");

            if (datos.NPK_Clase == 0)
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
                            datos.NPK_Clase = connection.Insert<ClaseCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Clase = 0;
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
                            var fab = connection.Get<ClaseCatalogo>(datos.NPK_Clase, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<ClaseCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Clase = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public ClaseCatalogo GuardarClaseActivo(long NPK_Clase, int Activo, int NFK_User)
        {
            ClaseCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<ClaseCatalogo>(NPK_Clase, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<ClaseCatalogo>(fab, tran);
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

        public List<vwInstructor> TraerInstructors(int? Activo)
        {
            var resp = new List<vwInstructor>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwInstructor>("Select * From vwInstructor with(nolock) Where Activo = IsNull(@Activo, Activo) order by Nombre, Apellidos", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }
        public List<vwInstructor> DetalleInstructorPublico(int NPK_Instructor)
        {
            var resp = new List<vwInstructor>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwInstructor>("Select * From vwInstructor with(nolock) Where NPK_Instructor = @NPK_Instructor order by Nombre, Apellidos", new { NPK_Instructor }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public InstructorCatalogo GuardarInstructor(InstructorCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Instructor Datos requeridos");

            if (datos.NPK_Instructor == 0)
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
                            datos.Fotografia = "";
                            datos.NPK_Instructor = connection.Insert<InstructorCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Instructor = 0;
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
                            var fab = connection.Get<InstructorCatalogo>(datos.NPK_Instructor, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            datos.Fotografia = fab.Fotografia;
                            connection.Update<InstructorCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Instructor = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public InstructorCatalogo GuardarInstructorActivo(long NPK_Instructor, int Activo, int NFK_User)
        {
            InstructorCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<InstructorCatalogo>(NPK_Instructor, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<InstructorCatalogo>(fab, tran);
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

        public List<vwPaquete> TraerPaquetes(int? Activo)
        {
            var resp = new List<vwPaquete>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwPaquete>("Select * From vwPaquete with(nolock) Where Activo = IsNull(@Activo, Activo) order by Paquete", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public PaqueteCatalogo GuardarPaquete(PaqueteCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Paquete Datos requeridos");

            if (datos.NPK_Paquete == 0)
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
                            datos.NPK_Paquete = connection.Insert<PaqueteCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Paquete = 0;
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
                            var fab = connection.Get<PaqueteCatalogo>(datos.NPK_Paquete, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<PaqueteCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Paquete = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public PaqueteCatalogo GuardarPaqueteActivo(long NPK_Paquete, int Activo, int NFK_User)
        {
            PaqueteCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<PaqueteCatalogo>(NPK_Paquete, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<PaqueteCatalogo>(fab, tran);
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

        public List<vwPowerHouse> TraerPowerHouses(int? Activo)
        {
            var resp = new List<vwPowerHouse>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwPowerHouse>("Select * From vwPowerHouse with(nolock) Where Activo = IsNull(@Activo, Activo) order by Direccion", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public PowerHouseCatalogo GuardarPowerHouse(PowerHouseCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("PowerHouse Datos requeridos");

            if (datos.NPK_PowerHouse == 0)
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
                            datos.NPK_PowerHouse = connection.Insert<PowerHouseCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_PowerHouse = 0;
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
                            var fab = connection.Get<PowerHouseCatalogo>(datos.NPK_PowerHouse, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<PowerHouseCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_PowerHouse = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public PowerHouseCatalogo GuardarPowerHouseActivo(long NPK_PowerHouse, int Activo, int NFK_User)
        {
            PowerHouseCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<PowerHouseCatalogo>(NPK_PowerHouse, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<PowerHouseCatalogo>(fab, tran);
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

        public List<vwRedSocial> TraerRedSocials(int? Activo)
        {
            var resp = new List<vwRedSocial>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwRedSocial>("Select * From vwRedSocial with(nolock) Where Activo = IsNull(@Activo, Activo) order by RedSocial", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public RedSocialCatalogo GuardarRedSocial(RedSocialCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("RedSocial Datos requeridos");

            if (datos.NPK_RedSocial == 0)
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
                            datos.RedSocialImagen = null;
                            datos.NPK_RedSocial = connection.Insert<RedSocialCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_RedSocial = 0;
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
                            var fab = connection.Get<RedSocialCatalogo>(datos.NPK_RedSocial, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            datos.RedSocialImagen = fab.RedSocialImagen;
                            connection.Update<RedSocialCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_RedSocial = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public RedSocialCatalogo GuardarRedSocialActivo(long NPK_RedSocial, int Activo, int NFK_User)
        {
            RedSocialCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<RedSocialCatalogo>(NPK_RedSocial, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<RedSocialCatalogo>(fab, tran);
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

        public List<vwPowerHouseRedSocial> TraerPowerHouseRedSocials(int? Activo)
        {
            var resp = new List<vwPowerHouseRedSocial>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwPowerHouseRedSocial>("Select * From vwPowerHouseRedSocial with(nolock) Where Activo = IsNull(@Activo, Activo) order by RedSocial", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public PowerHouseRedSocialCatalogo GuardarPowerHouseRedSocial(PowerHouseRedSocialCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("PowerHouseRedSocial Datos requeridos");

            if (datos.NPK_PowerHouseRedSocial == 0)
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
                            datos.NPK_PowerHouseRedSocial = connection.Insert<PowerHouseRedSocialCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_PowerHouseRedSocial = 0;
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
                            var fab = connection.Get<PowerHouseRedSocialCatalogo>(datos.NPK_PowerHouseRedSocial, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<PowerHouseRedSocialCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_PowerHouseRedSocial = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public PowerHouseRedSocialCatalogo GuardarPowerHouseRedSocialActivo(long NPK_PowerHouseRedSocial, int Activo, int NFK_User)
        {
            PowerHouseRedSocialCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<PowerHouseRedSocialCatalogo>(NPK_PowerHouseRedSocial, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<PowerHouseRedSocialCatalogo>(fab, tran);
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

        public List<vwSalon> TraerSalons(int? Activo)
        {
            var resp = new List<vwSalon>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwSalon>("Select * From vwSalon with(nolock) Where Activo = IsNull(@Activo, Activo) order by Salon", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public SalonCatalogo GuardarSalon(SalonCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Salon Datos requeridos");

            if (datos.NPK_Salon == 0)
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
                            datos.NPK_Salon = connection.Insert<SalonCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Salon = 0;
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
                            var fab = connection.Get<SalonCatalogo>(datos.NPK_Salon, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<SalonCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Salon = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public SalonCatalogo GuardarSalonActivo(long NPK_Salon, int Activo, int NFK_User)
        {
            SalonCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<SalonCatalogo>(NPK_Salon, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<SalonCatalogo>(fab, tran);
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

        public List<vwSalonLugar> TraerSalonLugars(int? Activo)
        {
            var resp = new List<vwSalonLugar>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwSalonLugar>("Select * From vwSalonLugar with(nolock) Where Activo = IsNull(@Activo, Activo) order by SalonLugar", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public SalonLugarCatalogo GuardarSalonLugar(SalonLugarCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("SalonLugar Datos requeridos");

            if (datos.NPK_SalonLugar == 0)
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
                            datos.NPK_SalonLugar = connection.Insert<SalonLugarCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_SalonLugar = 0;
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
                            var fab = connection.Get<SalonLugarCatalogo>(datos.NPK_SalonLugar, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<SalonLugarCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_SalonLugar = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public SalonLugarCatalogo GuardarSalonLugarActivo(long NPK_SalonLugar, int Activo, int NFK_User)
        {
            SalonLugarCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<SalonLugarCatalogo>(NPK_SalonLugar, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<SalonLugarCatalogo>(fab, tran);
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
        public InstructorCatalogo UpdateInstructorFotografia(int NPK_Instructor, string FotografiaURL, int NFK_User)
        {
            InstructorCatalogo datos = new InstructorCatalogo();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();

                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        datos = connection.Get<InstructorCatalogo>(NPK_Instructor, tran);
                        datos.FechaModificacion = DateTime.Now;
                        datos.ModificadoPor = NFK_User;
                        datos.Fotografia = FotografiaURL;
                        connection.Update<InstructorCatalogo>(datos, tran);
                        tran.Commit();
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
        public RedSocialCatalogo UpdateRedSocialFotografia(int NPK_RedSocial, string FotografiaURL, int NFK_User)
        {
            RedSocialCatalogo datos = new RedSocialCatalogo();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();

                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        datos = connection.Get<RedSocialCatalogo>(NPK_RedSocial, tran);
                        datos.FechaModificacion = DateTime.Now;
                        datos.ModificadoPor = NFK_User;
                        datos.RedSocialImagen = FotografiaURL;
                        connection.Update<RedSocialCatalogo>(datos, tran);
                        tran.Commit();
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
        public InstructorMusicaCatalogo UpdateInstructorMusicaFotografia(int NPK_InstructorMusica, string FotografiaURL, int NFK_User)
        {
            InstructorMusicaCatalogo datos = new InstructorMusicaCatalogo();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();

                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        datos = connection.Get<InstructorMusicaCatalogo>(NPK_InstructorMusica, tran);
                        datos.FechaModificacion = DateTime.Now;
                        datos.ModificadoPor = NFK_User;
                        datos.imagen = FotografiaURL;
                        connection.Update<InstructorMusicaCatalogo>(datos, tran);
                        tran.Commit();
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

        public List<vwInstructorMusica> TraerInstructorMusicas(int NFK_Instructor)
        {
            var resp = new List<vwInstructorMusica>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwInstructorMusica>("Select * From vwInstructorMusica with(nolock) Where NFK_Instructor = @NFK_Instructor order by Musica", new { NFK_Instructor }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public InstructorMusicaCatalogo GuardarInstructorMusica(InstructorMusicaCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("InstructorMusica Datos requeridos");

            if (datos.NPK_InstructorMusica == 0)
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
                            datos.NPK_InstructorMusica = connection.Insert<InstructorMusicaCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_InstructorMusica = 0;
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
                            var fab = connection.Get<InstructorMusicaCatalogo>(datos.NPK_InstructorMusica, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<InstructorMusicaCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_InstructorMusica = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public InstructorMusicaCatalogo EliminarInstructorMusica(long NPK_InstructorMusica)
        {
            InstructorMusicaCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<InstructorMusicaCatalogo>(NPK_InstructorMusica, tran);
                        connection.Delete<InstructorMusicaCatalogo>(fab, tran);
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
        public List<vwInstructorRedSocial> TraerInstructorRedSocials(int NFK_Instructor)
        {
            var resp = new List<vwInstructorRedSocial>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwInstructorRedSocial>("Select * From vwInstructorRedSocial with(nolock) Where NFK_Instructor = @NFK_Instructor order by RedSocial", new { NFK_Instructor }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public InstructorRedSocialCatalogo GuardarInstructorRedSocial(InstructorRedSocialCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("InstructorRedSocial Datos requeridos");

            if (datos.NPK_InstructorRedSocial == 0)
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
                            datos.NPK_InstructorRedSocial = connection.Insert<InstructorRedSocialCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_InstructorRedSocial = 0;
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
                            var fab = connection.Get<InstructorRedSocialCatalogo>(datos.NPK_InstructorRedSocial, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<InstructorRedSocialCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_InstructorRedSocial = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public InstructorRedSocialCatalogo EliminarInstructorRedSocial(long NPK_InstructorRedSocial)
        {
            InstructorRedSocialCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<InstructorRedSocialCatalogo>(NPK_InstructorRedSocial, tran);
                        connection.Delete<InstructorRedSocialCatalogo>(fab, tran);
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

        public List<vwAñoTarjeta> TraerAñoTarjetas(int? Activo)
        {
            var resp = new List<vwAñoTarjeta>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwAñoTarjeta>("Select * From vwAñoTarjeta with(nolock) Where Activo = IsNull(@Activo, Activo) order by Anio", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public AñoTarjetaCatalogo GuardarAñoTarjeta(AñoTarjetaCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("AñoTarjeta Datos requeridos");

            if (datos.NPK_AñoTarjeta == 0)
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
                            datos.NPK_AñoTarjeta = connection.Insert<AñoTarjetaCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_AñoTarjeta = 0;
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
                            var fab = connection.Get<AñoTarjetaCatalogo>(datos.NPK_AñoTarjeta, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<AñoTarjetaCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_AñoTarjeta = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public AñoTarjetaCatalogo GuardarAñoTarjetaActivo(long NPK_AñoTarjeta, int Activo, int NFK_User)
        {
            AñoTarjetaCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<AñoTarjetaCatalogo>(NPK_AñoTarjeta, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<AñoTarjetaCatalogo>(fab, tran);
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

        public List<vwMes> TraerMess(int? Activo)
        {
            var resp = new List<vwMes>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwMes>("Select * From vwMes with(nolock) Where Activo = IsNull(@Activo, Activo) order by NumeroMes", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public MesCatalogo GuardarMes(MesCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Mes Datos requeridos");

            if (datos.NPK_Mes == 0)
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
                            datos.NPK_Mes = connection.Insert<MesCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Mes = 0;
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
                            var fab = connection.Get<MesCatalogo>(datos.NPK_Mes, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<MesCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Mes = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public MesCatalogo GuardarMesActivo(long NPK_Mes, int Activo, int NFK_User)
        {
            MesCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<MesCatalogo>(NPK_Mes, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<MesCatalogo>(fab, tran);
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
        public List<vwTipoTarjeta> TraerTipoTarjetas(int? Activo)
        {
            var resp = new List<vwTipoTarjeta>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwTipoTarjeta>("Select * From vwTipoTarjeta with(nolock) Where Activo = IsNull(@Activo, Activo) order by TipoTarjeta", new { Activo }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }

        public TipoTarjetaCatalogo GuardarTipoTarjeta(TipoTarjetaCatalogo datos, int NFK_User)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("TipoTarjeta Datos requeridos");

            if (datos.NPK_TipoTarjeta == 0)
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
                            datos.NPK_TipoTarjeta = connection.Insert<TipoTarjetaCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_TipoTarjeta = 0;
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
                            var fab = connection.Get<TipoTarjetaCatalogo>(datos.NPK_TipoTarjeta, tran);
                            datos.FechaModificacion = DateTime.Now;
                            datos.ModificadoPor = NFK_User;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<TipoTarjetaCatalogo>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_TipoTarjeta = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

        public TipoTarjetaCatalogo GuardarTipoTarjetaActivo(long NPK_TipoTarjeta, int Activo, int NFK_User)
        {
            TipoTarjetaCatalogo datos;

            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        var fab = connection.Get<TipoTarjetaCatalogo>(NPK_TipoTarjeta, tran);
                        fab.FechaModificacion = DateTime.Now;
                        fab.ModificadoPor = NFK_User;
                        fab.Activo = Activo;
                        connection.Update<TipoTarjetaCatalogo>(fab, tran);
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
        }        public List<vwClasesDisponiblesWeeks> ClasesDisponibles(int NFK_Clase)
        {
            var semanas = new List<vwClasesDisponiblesWeeks>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                var query = @"  Select	b.DiaSemana,b.Dia,b.Clase,b.Anio,b.FechaInicio,b.FechaFin,b.NPK_CalendarioClase,b.NFK_Instructor,b.Instructor,
		                                b.HoraInicio,b.Duracion,b.Reservado
                                From	vwClasesDisponibles b WITH (NOLOCK) 
                                Where   b.NFK_Semana = @NFK_Semana
                                        And b.Dia = @Dia
                                        And b.NFK_Clase = @NFK_Clase
                                Order by [Date]";
                semanas = connection.Query<vwClasesDisponiblesWeeks>("Select	Distinct a.NumeroSemana,a.NFK_Semana, a.Anio, a.NFK_Clase From vwClasesDisponiblesWeeks a WITH (NOLOCK) Where a.NFK_Clase = @NFK_Clase Order by a.Anio,a.NumeroSemana", new { NFK_Clase }).ToList();

                foreach (vwClasesDisponiblesWeeks week in semanas)
                {
                    var diassemana = new List<vwClasesDisponiblesDia>();
                    diassemana = connection.Query<vwClasesDisponiblesDia>("select Distinct b.DiaSemana,b.Dia from vwClasesDisponibles b WITH (NOLOCK) Where b.NFK_Semana = @NFK_Semana And b.NFK_Clase = @NFK_Clase Order by b.Dia", new { week.NFK_Semana, NFK_Clase }).ToList();
                    foreach (vwClasesDisponiblesDia dia in diassemana)
                    {
                        var clases = new List<vwClasesDisponibles>();
                        clases = connection.Query<vwClasesDisponibles>(query, new { week.NFK_Semana, dia.Dia, NFK_Clase }).ToList();
                        dia.classes = clases;
                    }
                    week.days = diassemana;
                }
                //


                //var resultList = lookup.Values;
                return semanas;
            }
        }        public List<vwClaseHeader> Estatus_Salon_PorDia_Header(int NFK_Clase, int NFK_Semana, int Dia, int NPK_CalendarioClase, int NFK_Usuario)
        {
            var resp = new List<vwClaseHeader>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                resp = connection.Query<vwClaseHeader>("SP_Estatus_Salon_PorDia_Header",
                    new
                    {
                        NFK_Clase = NFK_Clase,
                        NFK_Semana = NFK_Semana,
                        Dia = Dia,
                        NPK_CalendarioClase = NPK_CalendarioClase,
                        NFK_Usuario = NFK_Usuario
                    }, null, commandType: System.Data.CommandType.StoredProcedure).ToList();                
                return resp;
            }
        }        public List<vwClaseReserva> Estatus_Salon_PorDia(int NFK_Clase, int NFK_Semana, int Dia, int NPK_CalendarioClase)
        {
            var resp = new List<vwClaseReserva>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                resp = connection.Query<vwClaseReserva>("SP_Estatus_Salon_PorDia",
                    new
                    {
                        NFK_Clase = NFK_Clase,
                        NFK_Semana = NFK_Semana,
                        Dia = Dia,
                        NPK_CalendarioClase = NPK_CalendarioClase
                    }, null, commandType: System.Data.CommandType.StoredProcedure).ToList();
                return resp;
            }
        }
    }
}
