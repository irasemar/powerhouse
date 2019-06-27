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
    internal class UserRepository : RepositoryBase
    {
        public UserRepository(string ConnectionString) : base(ConnectionString)
        {

        }

        public vwUsuario AuthenticateUser(string username, string password)
        {
            var resp = new vwUsuario();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwUsuario>("Select * From vwUsuario with(nolock) Where Activo = 1 AND Usuario = @username AND Contrasena = @password", new { username, password }).FirstOrDefault();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }
        public vwUsuario GetUser(string username)
        {
            var resp = new vwUsuario();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwUsuario>("Select * From vwUsuario with(nolock) Where Activo = 1 AND Usuario = @username ", new { username }).FirstOrDefault();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }
        public vwRespuesta ValidateExistsUser(string username)
        {
            var resp = new vwRespuesta();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwRespuesta>("Select NPK_Usuario As NPK_Respuesta From vwUsuario with(nolock) Where Activo = 1 AND Usuario = @username", new { username }).FirstOrDefault();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }
        public vwUsuario RegisterUser(vwUsuario datos)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Usuario Datos requeridos");

            if (datos.NPK_Usuario == 0)
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
                            datos.FechaNacimiento = null;
                            datos.CreadoPor = 0;
                            datos.NPK_Usuario = connection.Insert<vwUsuario>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Usuario = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }           
            return datos;
        }

        public CatalogoUsuario UpdateProfileUser(CatalogoUsuario datos)
        {
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Usuario Datos requeridos");

            if (datos.NPK_Usuario == 0)
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
                            datos.FechaNacimiento = null;
                            datos.CreadoPor = 0;
                            datos.NPK_Usuario = connection.Insert<CatalogoUsuario>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Usuario = 0;
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
                            var fab = connection.Get<CatalogoUsuario>(datos.NPK_Usuario, tran);
                            datos.FechaModificacion = DateTime.UtcNow;
                            datos.ModificadoPor = 0;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            connection.Update<CatalogoUsuario>(datos, tran);
                            tran.Commit();
                        }
                        catch (Exception ex)
                        {
                            datos.NPK_Usuario = 0;
                            tran.Rollback();
                            throw ex;
                        }

                    }
                }
            }
            return datos;
        }

    }
}
