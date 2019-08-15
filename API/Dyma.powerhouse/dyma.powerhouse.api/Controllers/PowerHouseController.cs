using System;
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
using AutoMapper;
namespace dyma.powerhouse.api.Controllers
{
    [EnableCors("*", "*", "GET,POST,PUT,DELETE, OPTIONS")]
    [RoutePrefix("api/v1/powerhouse")]
    public class powerhouseController : BaseController
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        [AllowAnonymous]
        [Route("Genero/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwGenero>))]
        public HttpResponseMessage TraerGeneros(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerGeneros(activo));
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("VentaUsuario"), HttpPost, ResponseType(typeof(dyma.powerhouse.data.views.vwVenta))]
        public HttpResponseMessage VentaUsuario(dyma.powerhouse.data.views.vwVenta datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                proxy.VentaUsuario(datos);
                var resp = new Models.ResponseMessage()
                {
                    NumError = 0,
                    IsError = false,
                    Message = "Messages Send successfully."
                };
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("VentaUsuarioCarro/{NPK_User:long}"), HttpGet, ResponseType(typeof(List<data.views.vwVentaCarro>))]
        public HttpResponseMessage VentaUsuarioCarro(int NPK_User)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.VentaUsuarioCarro(NPK_User));
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("VentaUsuarioPago"), HttpPost, ResponseType(typeof(dyma.powerhouse.data.views.vwVentaCarroPago))]
        public HttpResponseMessage VentaUsuarioPago(dyma.powerhouse.data.views.vwVentaCarroPago datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                proxy.VentaUsuarioPago(datos);
                var resp = new Models.ResponseMessage()
                {
                    NumError = 0,
                    IsError = false,
                    Message = "Pay Send successfully."
                };
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("ClasesDisponiblesPorInstructor/{NFK_Instructor:int}"), HttpGet, ResponseType(typeof(dyma.powerhouse.data.views.vwClasesDisponiblesWeeks))]
        public HttpResponseMessage ClasesDisponiblesPorInstructor(int NFK_Instructor)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.ClasesDisponiblesPorInstructor(NFK_Instructor));
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("ClasesDisponibles/{NFK_Clase:int}"), HttpGet, ResponseType(typeof(dyma.powerhouse.data.views.vwClasesDisponiblesWeeks))]
        public HttpResponseMessage ClasesDisponibles(int NFK_Clase)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.ClasesDisponibles(NFK_Clase));
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("Estatus_Salon_PorDia_Header/{NFK_Clase:int}/{NFK_Semana:int}/{Dia:int}/{NPK_CalendarioClase:int}/{NFK_Usuario:int}"), HttpGet, ResponseType(typeof(dyma.powerhouse.data.views.vwClaseHeader))]
        public HttpResponseMessage Estatus_Salon_PorDia_Header(int NFK_Clase, int NFK_Semana, int Dia, int NPK_CalendarioClase,int NFK_Usuario)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.Estatus_Salon_PorDia_Header(NFK_Clase, NFK_Semana, Dia, NPK_CalendarioClase, NFK_Usuario));
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("Estatus_Salon_PorDia/{NFK_Clase:int}/{NFK_Semana:int}/{Dia:int}/{NPK_CalendarioClase:int}"), HttpGet, ResponseType(typeof(dyma.powerhouse.data.views.vwClaseReserva))]
        public HttpResponseMessage Estatus_Salon_PorDia(int NFK_Clase, int NFK_Semana, int Dia, int NPK_CalendarioClase)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.Estatus_Salon_PorDia(NFK_Clase, NFK_Semana, Dia, NPK_CalendarioClase));
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("ReservaLugar/{NFK_CalendarioClase:int}/{NFK_Usuario:int}/{NFK_Salon:int}/{NFK_SalonLugar:int}"), HttpPost, ResponseType(typeof(dyma.powerhouse.data.views.vwVentaCarroPago))]
        public HttpResponseMessage ReservaLugar(int NFK_CalendarioClase, int NFK_Usuario, int NFK_Salon, int NFK_SalonLugar)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                proxy.ReservaLugar(NFK_CalendarioClase, NFK_Usuario, NFK_Salon, NFK_SalonLugar);
                var resp = new Models.ResponseMessage()
                {
                    NumError = 0,
                    IsError = false,
                    Message = "Reserva Send successfully."
                };
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("Obtener_Saldo/{NFK_Usuario:int}"), HttpGet, ResponseType(typeof(dyma.powerhouse.data.views.vwSaldo))]
        public HttpResponseMessage Obtener_Saldo(int NFK_Usuario)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.Obtener_Saldo(NFK_Usuario));
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("Mis_Reservas/{NFK_Usuario:int}"), HttpGet, ResponseType(typeof(dyma.powerhouse.data.views.vwHistoriaReserva))]
        public HttpResponseMessage Mis_Reservas(int NFK_Usuario)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.Mis_Reservas(NFK_Usuario));
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("Mi_Historia/{NFK_Usuario:int}"), HttpGet, ResponseType(typeof(dyma.powerhouse.data.views.vwHistoriaReserva))]
        public HttpResponseMessage Mi_Historia(int NFK_Usuario)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.Mi_Historia(NFK_Usuario));
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
        [Route("CancelarReservaLugar/{NPK_ReservaClase:int}/{NFK_Usuario:int}"), HttpPost, ResponseType(typeof(dyma.powerhouse.data.views.vwVentaCarroPago))]
        public HttpResponseMessage CancelarReservaLugar(int NPK_ReservaClase, int NFK_Usuario)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                proxy.CancelarReservaLugar(NPK_ReservaClase, NFK_Usuario);
                var resp = new Models.ResponseMessage()
                {
                    NumError = 0,
                    IsError = false,
                    Message = "Reserva Send successfully."
                };
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (data.exceptions.BusinessRuleValidationException ex)
            {
                log.Error(ex.Message, ex);
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
