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
using Openpay;
using Openpay.Entities.Request;
using Openpay.Entities;
using System.Net.Mail;

namespace dyma.powerhouse.data.repositories
{
    internal class UserRepository : RepositoryBase
    {
        public UserRepository(string ConnectionString) : base(ConnectionString)
        {

        }

        public UsuarioCatalogo AuthenticateUser(string username, string password)
        {
            var resp = new UsuarioCatalogo();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<UsuarioCatalogo>("Select * From vwUsuario with(nolock) Where Activo = 1 AND Usuario = @username AND Contrasena = @password", new { username, password }).FirstOrDefault();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return resp;
        }
        public vwRespuesta RecuperarPass(string username,string ServidorSMTP, int puerto, string smtusuario, string smtpcontrasena)
        {
            var resp = new vwRespuesta();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    var usuario = connection.Query<vwUsuario>("Select NPK_Usuario, Nombre, Apellidos, Usuario,isnull(Correo,Usuario) as Correo,Contrasena From Usuario with(nolock) Where Usuario = @username Or isnull(Correo,Usuario) =  @username ", new { username }).FirstOrDefault();
                    if (usuario == null)
                    {
                        resp.Error = 1;
                        resp.DescError = "El usuario y/o contraseña actual no existen, Consulte a su administrador o Recupere su contraseña.";
                    }
                    else
                    {
                        MailMessage mensajeSoporteCSAM = new MailMessage();
                        SmtpClient smtpClienteCSAM = new SmtpClient();
                        smtpClienteCSAM.Host = ServidorSMTP;
                        smtpClienteCSAM.Port = puerto;
                        smtpClienteCSAM.Credentials = new System.Net.NetworkCredential(smtusuario, smtpcontrasena);
                        try
                        {
                            mensajeSoporteCSAM.From = new System.Net.Mail.MailAddress(smtusuario);
                            mensajeSoporteCSAM.To.Add(usuario.Correo);
                            mensajeSoporteCSAM.Body = "PowerHouse le envia su contraseña actual: " + usuario.Contrasena;
                            mensajeSoporteCSAM.Subject = "Recuperación de contraseña";
                            smtpClienteCSAM.Send(mensajeSoporteCSAM);
                            mensajeSoporteCSAM.Dispose();
                        }
                        catch (Exception errorCorreoCSAM)
                        {
                            resp.Error = 1;
                            resp.DescError = errorCorreoCSAM.ToString();
                        }
                        finally
                        {
                            mensajeSoporteCSAM.Dispose();
                        }
                        resp.Error = 0;
                        resp.DescError = "La contraseña se envio a su correo registrado exitosamente.";
                    }
                }
                catch (Exception ex)
                {
                    resp.Error = 1;
                    resp.DescError = "El usuario y/o contraseña actual no existen, Consulte a su administrador o Recupere su contraseña.";
                    throw ex;
                }
            }
            return resp;
        }
        public vwRespuesta ChangePass(string Usuario, string contrasenaactual, string contrasenanueva)
        {
            var resp = new vwRespuesta();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    var existe = connection.Query<vwUsuario>("Select * From vwUsuario with(nolock) Where Activo = 1 AND Usuario = @Usuario AND Contrasena = @contrasenaactual", new { Usuario, contrasenaactual }).FirstOrDefault();

                    if (existe == null)
                    {
                        resp.Error = 1;
                        resp.DescError = "El usuario y/o contraseña actual no existen, Consulte a su administrador o Recupere su contraseña.";
                    }
                    else
                    {                        
                        connection.Query("Update Usuario Set Contrasena = @contrasenanueva Where Usuario = @Usuario", new { @contrasenanueva,Usuario });
                        resp.Error = 0;
                        resp.DescError = "La contraseña se actualizo exitosamente.";
                    }
                }
                catch (Exception ex)
                {
                    resp.Error = 1;
                    resp.DescError = "El usuario y/o contraseña actual no existen, Consulte a su administrador o Recupere su contraseña.";
                    throw ex;
                }
            }
            return resp;
        }
        public UsuarioCatalogo AuthenticateUserAdmin(string username, string password)
        {
            var resp = new UsuarioCatalogo();
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                try
                {
                    connection.Open();
                    resp = connection.Query<UsuarioCatalogo>("Select * From vwUsuario with(nolock) Where Activo = 1 AND Usuario = @username AND Contrasena = @password And Administrador = 1", new { username, password }).FirstOrDefault();
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
        public UsuarioCatalogo RegisterUser(UsuarioCatalogo datos)
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
                            datos.NPK_Usuario = connection.Insert<UsuarioCatalogo>(datos, tran);
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

        public CatalogoUsuario UpdateProfileUser(CatalogoUsuario datos, string APIKEY, string MERCHANT_ID, bool PRODPAY)
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
                    var exist = connection.Get<CatalogoUsuario>(datos.NPK_Usuario);
                    #region AgregarCliente OpenPay
                    if (String.IsNullOrEmpty(exist.id)) { 
                        OpenpayAPI api = new OpenpayAPI(APIKEY, MERCHANT_ID, PRODPAY);
                        Customer request = new Customer();
                        request.ExternalId = "PWH-" + datos.NPK_Usuario.ToString();
                        request.Name = exist.Nombre;
                        request.LastName = exist.Apellidos;
                        request.Email = datos.Correo;
                        request.PhoneNumber = exist.Telefono;
                        request.RequiresAccount = false;
                        Address address = new Address();
                        address.City = "San Pedro Garza García";
                        address.CountryCode = "MX";
                        address.State = "Nuevo Leon";
                        address.PostalCode = "66254";
                        address.Line1 = "Av. Roberto Garza Sada #101";
                        address.Line2 = "";
                        address.Line3 = "San Pedro Garza García N.L.";
                        request.Address = address;

                        request = api.CustomerService.Create(request);
                        exist.id = request.Id;
                    }
                    #endregion

                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {
                            var fab = connection.Get<CatalogoUsuario>(datos.NPK_Usuario, tran);
                            datos.FechaModificacion = DateTime.UtcNow;
                            datos.ModificadoPor = 0;
                            datos.CreadoPor = fab.CreadoPor;
                            datos.FechaCreacion = fab.FechaCreacion;
                            datos.id = exist.id;
                            datos.Contrasena = fab.Contrasena;
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
        public RespuestaPago VentaUsuarioPago(vwVentaCarroPago datos, string APIKEY, string MERCHANT_ID, bool PRODPAY, string DeviceSessionId)
        {
            var Respuesta = new RespuestaPago();
            if (datos == null)
                throw new exceptions.BusinessRuleValidationException("Venta Pago List Data requiered");


            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                var resp = new List<vwMisTarjetas>();
                if (datos.NPK_Tarjeta == 0)
                {
                    connection.Open();
                    using (var tran = connection.BeginTransaction())
                    {
                        try
                        {

                            resp = connection.Query<vwMisTarjetas>("SP_Ins_Tarjeta",
                                new
                                {
                                    NFK_Usuario = datos.NFK_Usuario,
                                    Nombre = datos.Nombre,
                                    Numero = datos.Numero,
                                    CVV = datos.CVV,
                                    Mes = datos.Mes,
                                    Anio = datos.Anio,
                                    Ciudad = datos.Ciudad,
                                    Pais = datos.Pais,
                                    Estado = datos.Estado,
                                    CP = datos.CP,
                                    Direccion = datos.Direccion
                                },tran, true, commandType: System.Data.CommandType.StoredProcedure).ToList();
                            tran.Commit();
                            datos.NPK_Tarjeta = resp[0].NPK_Tarjeta;
                        }
                        catch (Exception ex)
                        {
                            tran.Rollback();
                            Respuesta.Error = 2;
                            Respuesta.Desc_Error = ex.ToString();
                            return Respuesta;
                        }
                    }
                }
                #region Agregar Tarjeta OpenPay
                if (datos.NPK_Tarjeta != 0)
                {
                    var tarjetas = connection.Query<vwMisTarjetas>("SP_Traer_Tarjeta", new { NPK_Tarjeta = datos.NPK_Tarjeta }, null, commandType: System.Data.CommandType.StoredProcedure).ToList();
                    if (tarjetas[0].id.Length == 0)
                    {
                        try
                        {
                            
                            OpenpayAPI api = new OpenpayAPI(APIKEY, MERCHANT_ID, PRODPAY);                            
                            Card request = new Card();
                            request.HolderName = datos.Nombre;
                            request.CardNumber = datos.Numero;
                            request.Cvv2 = datos.CVV;
                            request.ExpirationMonth = datos.Mes;
                            request.ExpirationYear = datos.Anio;
                            //request.DeviceSessionId = "kR1MiQhz2otdIuUlQkbEyitIqVMiI16f";
                            Address address = new Address();
                            address.City = datos.Ciudad;
                            address.CountryCode = datos.Pais;
                            address.State = datos.Estado;
                            address.PostalCode = datos.CP;
                            address.Line1 = datos.Direccion;
                            address.Line2 = "";
                            address.Line3 = "";
                            request.Address = address;

                            request = api.CardService.Create(resp[0].IdOpen, request);                            
                            using (var tran = connection.BeginTransaction())
                            {
                                try
                                {
                                    var affectedRows = connection.Execute("SP_Upd_Id_Tarjeta",
                                        new
                                        {
                                            NPK_Tarjeta = datos.NPK_Tarjeta,
                                            Id = request.Id
                                        }, tran, null, commandType: System.Data.CommandType.StoredProcedure);
                                    tran.Commit();
                                    tarjetas = connection.Query<vwMisTarjetas>("SP_Traer_Tarjeta", new { NPK_Tarjeta = datos.NPK_Tarjeta }, null, commandType: System.Data.CommandType.StoredProcedure).ToList();
                                }
                                catch (Exception ex2)
                                {
                                    datos.NPK_Tarjeta = 0;
                                    tran.Rollback();
                                    Respuesta.Error = 4;
                                    Respuesta.Desc_Error = ex2.ToString();
                                    return Respuesta;
                                }

                            }
                        }
                        catch (Exception ex)
                        {
                            using (var tran = connection.BeginTransaction())
                            {
                                try
                                {
                                    var affectedRows = connection.Execute("SP_Del_Tarjeta",
                                        new
                                        {
                                            NPK_Tarjeta = datos.NPK_Tarjeta
                                        }, tran, null, commandType: System.Data.CommandType.StoredProcedure);
                                    tran.Commit();
                                }
                                catch (Exception ex2)
                                {
                                    datos.NPK_Tarjeta = 0;
                                    tran.Rollback();
                                    
                                    throw ex2;
                                }

                            }
                            Respuesta.Error = 10;
                            Respuesta.Desc_Error = ex.ToString();
                            return Respuesta;
                        }
                    }
                    if (tarjetas[0].id.Length > 0)
                    {
                        #region Pagar Tarjeta OpenPay
                        try
                        {
                            OpenpayAPI api = new OpenpayAPI(APIKEY, MERCHANT_ID, PRODPAY);
                            Customer customer = new Customer();
                            customer.Name = tarjetas[0].Nombre;
                            customer.LastName = tarjetas[0].Apellidos;
                            customer.PhoneNumber = tarjetas[0].Telefono;
                            customer.Email = tarjetas[0].Correo;
                            customer.Id = tarjetas[0].IdOpen;

                            ChargeRequest request = new ChargeRequest();
                            request.Method = "card";
                            request.SourceId = tarjetas[0].id;
                            request.Amount = datos.Monto;// new Decimal();
                            request.Description = "Pago Por Paquete:" + tarjetas[0].Paquete;
                            request.OrderId = "pago-" + tarjetas[0].NPK_Venta.ToString();
                            //request.Capture = false;
                            request.DeviceSessionId = DeviceSessionId;// "kR1MiQhz2otdIuUlQkbEyitIqVMiI16f";
                            //request.Customer = customer;


                            Charge charge = api.ChargeService.Create(tarjetas[0].IdOpen, request);
                            Respuesta.Error = 0;
                            Respuesta.Desc_Error = charge.ErrorMessage;
                            Respuesta.NumeroTransaccion = charge.Authorization;
                            Respuesta.Monto = charge.Amount.ToString();
                            Respuesta.NumeroTarjeta = charge.Card.CardNumber;
                            Respuesta.description = charge.Description;
                            Respuesta.operation_date = charge.CreationDate.ToString();

                            using (var connection2 = util.DbManager.ConnectionFactory(sqlConnectionString))
                            {
                                connection2.Open();
                                using (var tran = connection2.BeginTransaction())
                                {
                                    try
                                    {
                                        var affectedRows = connection2.Execute("SP_Proc_Venta_Carro_Pago",
                                            new
                                            {
                                                NPK_Venta = tarjetas[0].NPK_Venta,
                                                NPK_Tarjeta = tarjetas[0].NPK_Tarjeta,
                                                NFK_Usuario = tarjetas[0].NFK_Usuario,
                                                TipoTarjeta = charge.PaymentMethod + " " + charge.Card.BankName,
                                                NumeroTarjeta = charge.Card.CardNumber,
                                                Titular = charge.Card.HolderName,
                                                CorreoElectronico = charge.Card.Brand,
                                                NumAutorizacion = charge.Authorization,
                                                MontoPago = charge.Amount
                                            }, tran, null, commandType: System.Data.CommandType.StoredProcedure);
                                        tran.Commit();
                                    }
                                    catch (Exception ex)
                                    {
                                        tran.Rollback();
                                        Respuesta.Error = 2;
                                        Respuesta.Desc_Error = ex.ToString();
                                        return Respuesta;
                                    }
                                    finally
                                    {
                                        connection2.Close();
                                    }

                                }
                            }
                        }
                        catch (Exception expago)
                        {
                            datos.NPK_Tarjeta = 0;
                            Respuesta.Error = 1;
                            Respuesta.Desc_Error = expago.ToString();
                            return Respuesta;
                        }
                        #endregion
                    }
                }
                #endregion
                //connection.Open();
                
            }

            return Respuesta;
        }
        public string ReservaLugar(int NFK_CalendarioClase, int NFK_Usuario, int NFK_Salon, int NFK_SalonLugar, string ServidorSMTP, int puerto, string smtusuario, string smtpcontrasena)
        {
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {

                        var reserva = connection.Query<vwReservaRespuesta>("SP_Reserva_Lugar",
                            new
                            {
                                NFK_CalendarioClase = NFK_CalendarioClase,
                                NFK_Usuario = NFK_Usuario,
                                NFK_Salon = NFK_Salon,
                                NFK_SalonLugar = NFK_SalonLugar
                            }, tran,commandType: System.Data.CommandType.StoredProcedure).ToList();
                        tran.Commit();
                        var resp = new vwRespuesta();
                        var usuario = connection.Query<vwUsuario>("Select NPK_Usuario, Nombre, Apellidos, Usuario,isnull(Correo,Usuario) as Correo,Contrasena From Usuario with(nolock) Where NPK_Usuario = @NFK_Usuario ", new { NFK_Usuario }).FirstOrDefault();
                        MailMessage mensajeSoporteCSAM = new MailMessage();
                        SmtpClient smtpClienteCSAM = new SmtpClient();
                        smtpClienteCSAM.Host = ServidorSMTP;
                        smtpClienteCSAM.Port = puerto;
                        smtpClienteCSAM.Credentials = new System.Net.NetworkCredential(smtusuario, smtpcontrasena);
                        try
                        {
                            mensajeSoporteCSAM.From = new System.Net.Mail.MailAddress(smtusuario);
                            mensajeSoporteCSAM.To.Add(usuario.Correo);
                            mensajeSoporteCSAM.Body = "Hola " + usuario.Nombre + " Tienes una Reserva Nueva en PowerHouse en la clase: " + reserva[0].Clase + " para el dia : " + reserva[0].DescDia + " hora : " + reserva[0].HoraInicio + 
                                " Con el instructor: " + reserva[0].Instructor + ", TE ESPERAMOS!!";
                            mensajeSoporteCSAM.Subject = "Reserva Powerhouse Realizada";
                            smtpClienteCSAM.Send(mensajeSoporteCSAM);
                            mensajeSoporteCSAM.Dispose();
                        }
                        catch (Exception errorCorreoCSAM)
                        {
                            resp.Error = 1;
                            resp.DescError = errorCorreoCSAM.ToString();
                        }
                        finally
                        {
                            mensajeSoporteCSAM.Dispose();
                        }
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
        public string CancelarReservaLugar(int NPK_ReservaClase, int NFK_Usuario, string ServidorSMTP, int puerto, string smtusuario, string smtpcontrasena)
        {
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {

                        var reserva = connection.Query<vwReservaRespuesta>("SP_Cancelar_Reserva_Lugar",
                            new
                            {
                                NPK_ReservaClase = NPK_ReservaClase,
                                NFK_Usuario = NFK_Usuario
                            }, tran, commandType: System.Data.CommandType.StoredProcedure).ToList();
                        tran.Commit();
                        var resp = new vwRespuesta();
                        var usuario = connection.Query<vwUsuario>("Select NPK_Usuario, Nombre, Apellidos, Usuario,isnull(Correo,Usuario) as Correo,Contrasena From Usuario with(nolock) Where NPK_Usuario = @NFK_Usuario ", new { NFK_Usuario }).FirstOrDefault();
                        MailMessage mensajeSoporteCSAM = new MailMessage();
                        SmtpClient smtpClienteCSAM = new SmtpClient();
                        smtpClienteCSAM.Host = ServidorSMTP;
                        smtpClienteCSAM.Port = puerto;
                        smtpClienteCSAM.Credentials = new System.Net.NetworkCredential(smtusuario, smtpcontrasena);
                        try
                        {
                            mensajeSoporteCSAM.From = new System.Net.Mail.MailAddress(smtusuario);
                            mensajeSoporteCSAM.To.Add(usuario.Correo);
                            mensajeSoporteCSAM.Body = "Hola " + usuario.Nombre + " Cancelaste una Reserva en PowerHouse en la clase: " + reserva[0].Clase + " para el dia : " + reserva[0].DescDia + " hora : " + reserva[0].HoraInicio +
                                " Con el instructor: " + reserva[0].Instructor + ", NO PIERDAS TUS CLASES, VUELVE A RESERVAR. TE ESPERAMOS!!";
                            mensajeSoporteCSAM.Subject = "Cancelación de Reserva Powerhouse";
                            smtpClienteCSAM.Send(mensajeSoporteCSAM);
                            mensajeSoporteCSAM.Dispose();
                        }
                        catch (Exception errorCorreoCSAM)
                        {
                            resp.Error = 1;
                            resp.DescError = errorCorreoCSAM.ToString();
                        }
                        finally
                        {
                            mensajeSoporteCSAM.Dispose();
                        }
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
        public string PagarPaquete(int NPK_Paquete, int NFK_Usuario)
        {
            using (var connection = util.DbManager.ConnectionFactory(sqlConnectionString))
            {
                connection.Open();
                using (var tran = connection.BeginTransaction())
                {
                    try
                    {

                        //var affectedRows = connection.Execute("SP_Cancelar_Reserva_Lugar",
                        //    new
                        //    {
                        //        NPK_ReservaClase = NPK_ReservaClase,
                        //        NFK_Usuario = NFK_Usuario
                        //    }, tran, null, commandType: System.Data.CommandType.StoredProcedure);
                        //tran.Commit();
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
