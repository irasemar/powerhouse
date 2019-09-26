using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using System.Web;
using System.IO;
using dyma.powerhouse.data.actions;
using dyma.powerhouse.api.Jwt;
using dyma.powerhouse.data.entity;

namespace dyma.powerhouse.api.Controllers
{
   [EnableCors("*", "*", "GET,POST,PUT,DELETE, OPTIONS")]
    [RoutePrefix("api/v1/auth")]
    public class AuthController : BaseController
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        [AllowAnonymous]
        [Route("login"), HttpPost, ResponseType(typeof(List<Models.UserSession>))]
        public HttpResponseMessage Login(Models.LoginForm datos)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var proxy = new Tasks(this.GetConnectionString());
                    var user = proxy.AuthenticateUser(datos.username, datos.password);
                    if (user == null)
                        throw new data.exceptions.BusinessRuleValidationException("Usuario No Existe");

                    var token = Jwt.JwtManager.GenerateToken(user);
                    var sesion = new Models.UserSession()
                    {
                        Nombre = user.Nombre,
                        Apellidos = user.Apellidos,
                        Usuario = user.Usuario,
                        NPK_Usuario = user.NPK_Usuario,
                        Token = token,
                    };
                    return Request.CreateResponse(HttpStatusCode.OK, sesion);
                }
                else
                {
                    log.Error(ModelState);
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.Conflict, ex.Message);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [AllowAnonymous]
        [Route("CambiarPassword"), HttpPost, ResponseType(typeof(dyma.powerhouse.data.views.vwRespuesta))]
        public HttpResponseMessage CambiarPassword(Models.ChangePassForm datos)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var proxy = new Tasks(this.GetConnectionString());
                    var user = proxy.ChangePass(datos.username, datos.passwordactual, datos.passwordnuevo);
                    
                    return Request.CreateResponse(HttpStatusCode.OK, user);
                }
                else
                {
                    log.Error(ModelState);
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.Conflict, ex.Message);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [AllowAnonymous]
        [Route("RecuperarPass"), HttpPost, ResponseType(typeof(dyma.powerhouse.data.views.vwRespuesta))]
        public HttpResponseMessage RecuperarPass(Models.recuperarPassForm datos)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var proxy = new Tasks(this.GetConnectionString());
                    var user = proxy.RecuperarPass(datos.username, System.Configuration.ConfigurationManager.AppSettings["SMTP"].ToString(),
                        Convert.ToInt32(System.Configuration.ConfigurationManager.AppSettings["PUERTO"].ToString()),
                        System.Configuration.ConfigurationManager.AppSettings["CUENTACORREO"].ToString(),
                        System.Configuration.ConfigurationManager.AppSettings["CONTRASENA"].ToString());

                    return Request.CreateResponse(HttpStatusCode.OK, user);
                }
                else
                {
                    log.Error(ModelState);
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.Conflict, ex.Message);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [AllowAnonymous]
        [Route("loginAdmin"), HttpPost, ResponseType(typeof(List<Models.UserSession>))]
        public HttpResponseMessage LoginAdmin(Models.LoginForm datos)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var proxy = new Tasks(this.GetConnectionString());
                    var user = proxy.AuthenticateUserAdmin(datos.username, datos.password);
                    if (user == null)
                        throw new data.exceptions.BusinessRuleValidationException("Usuario No Existe");

                    var token = Jwt.JwtManager.GenerateToken(user);
                    var sesion = new Models.UserSession()
                    {
                        Nombre = user.Nombre,
                        Apellidos = user.Apellidos,
                        Usuario = user.Usuario,
                        NPK_Usuario = user.NPK_Usuario,
                        Token = token
                    };
                    return Request.CreateResponse(HttpStatusCode.OK, sesion);
                }
                else
                {
                    log.Error(ModelState);
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }

            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.Conflict, ex.Message);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [AllowAnonymous]
        [Route("ValidateExistsUser"), HttpPost, ResponseType(typeof(List<Models.RespuestaForm>))]
        public HttpResponseMessage ValidateExistsUser(Models.LoginForm datos)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var proxy = new Tasks(this.GetConnectionString());
                    var user = proxy.ValidateExistsUser(datos.username);
                    if (user == null)
                    {
                        var sesion = new Models.RespuestaForm()
                        {
                            NPK_Respuesta = 0,
                            Error = 0,
                            DescError = "No Existe"
                        };
                        return Request.CreateResponse(HttpStatusCode.OK, sesion);
                    }
                    else
                    {
                        var sesion = new Models.RespuestaForm()
                        {
                            NPK_Respuesta = user.NPK_Respuesta,
                            Error = 1,
                            DescError = "Usuario Existe"
                        };
                        return Request.CreateResponse(HttpStatusCode.OK, sesion);
                    }
                }
                else
                {
                    log.Error(ModelState);
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.Conflict, ex.Message);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [AllowAnonymous]
        [Route("Register"), HttpPost, ResponseType(typeof(List<Models.UserSession>))]
        public HttpResponseMessage Registrarme(Models.RegisterForm datos)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var proxy = new Tasks(this.GetConnectionString());
                    var resp = new UsuarioCatalogo()
                    {
                        Nombre = datos.Nombre,
                        Apellidos = datos.Apellidos,
                        Usuario = datos.Usuario,
                        Contrasena = datos.Contrasena,
                        ContactoEmergencia = datos.ContactoEmergencia,
                        TelefonoContacto = datos.TelefonoContacto,
                        QuieroOfertas = datos.QuieroOfertas
                    };
                    var user = proxy.RegisterUser(resp);
                    if (user == null)
                        throw new data.exceptions.BusinessRuleValidationException("Usuario Ya Existe");

                    var token = Jwt.JwtManager.GenerateToken(user);
                    var sesion = new Models.UserSession()
                    {
                        Nombre = user.Nombre,
                        Apellidos = user.Apellidos,
                        Usuario = user.Usuario,
                        NPK_Usuario = user.NPK_Usuario,
                        Token = token
                    };
                    return Request.CreateResponse(HttpStatusCode.OK, sesion);
                }
                else
                {
                    log.Error(ModelState);
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.Conflict, ex.Message);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [AllowAnonymous]
        [Route("GetUser"), HttpPost, ResponseType(typeof(List<Models.UsuarioProfileForm>))]
        public HttpResponseMessage GetUser(Models.LoginForm datos)
        {
            try
            {
                //if (ModelState.IsValid)
                //{
                    var proxy = new Tasks(this.GetConnectionString());
                    var user = proxy.GetUser(datos.username);
                    if (user == null)
                        throw new data.exceptions.BusinessRuleValidationException("Usuario No Existe");

                    var sesion = new Models.UsuarioProfileForm()
                    {
                        NPK_Usuario = user.NPK_Usuario,
                        Nombre = user.Nombre,
                        Apellidos = user.Apellidos,
                        Usuario = user.Usuario,
                        Contrasena = user.Contrasena,
                        Telefono = (String.IsNullOrEmpty(user.Telefono) ? "" : user.Telefono.ToString()),
                        FechaNacimiento = (String.IsNullOrEmpty(user.FechaNacimiento) ? "" : user.FechaNacimiento.ToString()),
                        Genero = (String.IsNullOrEmpty(user.Genero) ? "" : user.Genero.ToString()),
                        ContactoEmergencia = (String.IsNullOrEmpty(user.ContactoEmergencia) ? "" : user.ContactoEmergencia.ToString()),
                        TelefonoContacto = (String.IsNullOrEmpty(user.TelefonoContacto) ? "" : user.TelefonoContacto.ToString()),
                        //BikeSetupAlturaAsiento = (String.IsNullOrEmpty(user.BikeSetupAlturaAsiento) ? "" : user.BikeSetupAlturaAsiento.ToString()),
                        //BikeSetupDistanciaAsiento = (String.IsNullOrEmpty(user.BikeSetupDistanciaAsiento) ? "" : user.BikeSetupDistanciaAsiento.ToString()),
                        //BikeSetupDistanciaManubrio = (String.IsNullOrEmpty(user.BikeSetupDistanciaManubrio) ? "" : user.BikeSetupDistanciaManubrio.ToString()),
                        //BikeSetupAlturaManubrio = (String.IsNullOrEmpty(user.BikeSetupAlturaManubrio) ? "" : user.BikeSetupAlturaManubrio.ToString()),
                        //TallaZapato = (String.IsNullOrEmpty(user.TallaZapato) ? "" : user.TallaZapato.ToString()),
                        //QuieroOfertas = (String.IsNullOrEmpty(user.QuieroOfertas.ToString()) ? 0 : user.QuieroOfertas),
                        
                    };
                sesion.Correo = (user.Correo == null ? user.Usuario : user.Correo);
                    return Request.CreateResponse(HttpStatusCode.OK, sesion);
                //}
                //else
                //{
                //    log.Error(ModelState);
                //    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                //}
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.Conflict, ex.Message);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        

        [AllowAnonymous]
        [Route("UpdateProfile"), HttpPost, ResponseType(typeof(List<Models.UserSession>))]
        public HttpResponseMessage UpdateProfile(Models.UsuarioForm datos)
        {
            try
            {
                //if (ModelState.IsValid)
                //{
                    var proxy = new Tasks(this.GetConnectionString());
                    var resp = new data.views.CatalogoUsuario()
                    {
                        NPK_Usuario = datos.NPK_Usuario,
                        Nombre = datos.Nombre,
                        Apellidos = datos.Apellidos,
                        Usuario = datos.Usuario,
                        Contrasena = datos.Contrasena,
                        Telefono = datos.Telefono,
                        FechaNacimiento = Convert.ToDateTime(datos.FechaNacimiento),
                        Genero = datos.Genero,
                        ContactoEmergencia = datos.ContactoEmergencia,
                        TelefonoContacto = datos.TelefonoContacto,
                        //BikeSetupAlturaAsiento = datos.BikeSetupAlturaAsiento,
                        //BikeSetupDistanciaAsiento = datos.BikeSetupDistanciaAsiento,
                        //BikeSetupDistanciaManubrio = datos.BikeSetupDistanciaManubrio,
                        //BikeSetupAlturaManubrio = datos.BikeSetupAlturaManubrio,
                        //TallaZapato = datos.TallaZapato,
                        //QuieroOfertas = datos.QuieroOfertas,
                        Activo = 1,
                        Correo = datos.Correo
                    };
                    var user = proxy.UpdateProfileUser(resp, System.Configuration.ConfigurationManager.AppSettings["APIKEY"].ToString(),
                        System.Configuration.ConfigurationManager.AppSettings["MERCHANT_ID"].ToString(), Convert.ToBoolean(System.Configuration.ConfigurationManager.AppSettings["PRODPAY"]));
                    if (user == null)
                        throw new data.exceptions.BusinessRuleValidationException("Usuario Ya Existe");

                    var usertoken = new UsuarioCatalogo()
                    {
                        NPK_Usuario = datos.NPK_Usuario,
                        Nombre = datos.Nombre,
                        Apellidos = datos.Apellidos,
                        Usuario = datos.Usuario,
                        Contrasena = datos.Contrasena                        
                    };

                    var token = Jwt.JwtManager.GenerateToken(usertoken);
                    var sesion = new Models.UserSession()
                    {
                        Nombre = user.Nombre,
                        Apellidos = user.Apellidos,
                        Usuario = user.Usuario,
                        NPK_Usuario = user.NPK_Usuario,
                        Token = token
                    };
                    return Request.CreateResponse(HttpStatusCode.OK, sesion);
                //}
                //else
                //{
                //    log.Error(ModelState);
                //    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                //}
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.Conflict, ex.Message);
            }
            catch (Exception ex)
            {
                log.Error(ex.Message, ex);
                var httpError = new HttpError(ex, true);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        

        
    }
}
