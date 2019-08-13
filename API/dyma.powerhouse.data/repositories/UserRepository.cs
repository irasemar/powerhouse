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
        public vwUsuario AuthenticateUserAdmin(string username, string password)
        {
            var resp = new vwUsuario();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwUsuario>("Select * From vwUsuario with(nolock) Where Activo = 1 AND Usuario = @username AND Contrasena = @password And Administrador = 1", new { username, password }).FirstOrDefault();
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
        public vwUsuarioDatos GetUserDatos(int NPK_Usuario)
        {
            var resp = new vwUsuarioDatos();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwUsuarioDatos>("Select NPK_Usuario,DatePart(yy,FechaCreacion) As AnioInicio,10 As CantidadClasesTomadas, Nombre + ' ' + Apellidos As NombreCompleto From Usuario with(nolock) Where NPK_Usuario = @NPK_Usuario ", new { NPK_Usuario }).FirstOrDefault();
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

        public string VentaUsuario(vwVenta datos)
        {

            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Venta List Data requiered");


            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {
                        
                        var affectedRows = connection.Execute("SP_Proc_Venta_Carro",
                            new
                            {
                                NFK_Usuario = datos.NFK_Usuario,
                                NFK_Paquete = datos.NFK_Paquete,
                                Cantidad = datos.Cantidad
                            }, tran, null, commandType: System.Data.CommandType.StoredProcedure);
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        throw ex;
                    }

                }
            }

            return "";
        }

        public List<vwVentaCarro> VentaUsuarioCarro(int NFK_Usuario)
        {
            var resp = new List<vwVentaCarro>();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<vwVentaCarro>("Select * From vwVenta with(nolock) Where NFK_Usuario = @NFK_Usuario And Len(FechaPago) = 0", new { NFK_Usuario }).ToList();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }
        public string VentaUsuarioPago(vwVentaCarroPago datos)
        {

            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Venta Pago List Data requiered");


            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {

                        var affectedRows = connection.Execute("SP_Proc_Venta_Carro_Pago",
                            new
                            {
                                NFK_Usuario = datos.NFK_Usuario,
                                TipoTarjeta = datos.TipoTarjeta,
                                NumeroTarjeta = datos.NumeroTarjeta,
                                Titular = datos.Titular,
                                CorreoElectronico = datos.CorreoElectronico,
                                NumAutorizacion = datos.NumAutorizacion
                            }, tran, null, commandType: System.Data.CommandType.StoredProcedure);
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        throw ex;
                    }

                }
            }

            return "";
        }
        public string ReservaLugar(int NFK_CalendarioClase, int NFK_Usuario, int NFK_Salon, int NFK_SalonLugar)
        {
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {

                        var affectedRows = connection.Execute("SP_Reserva_Lugar",
                            new
                            {
                                NFK_CalendarioClase = NFK_CalendarioClase,
                                NFK_Usuario = NFK_Usuario,
                                NFK_Salon = NFK_Salon,
                                NFK_SalonLugar = NFK_SalonLugar
                            }, tran, null, commandType: System.Data.CommandType.StoredProcedure);
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        tran.Rollback();
                        throw ex;
                    }

                }
            }

            return "";
        }
    }
}
