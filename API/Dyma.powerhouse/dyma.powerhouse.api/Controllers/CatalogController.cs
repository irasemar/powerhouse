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
    [RoutePrefix("api/v1/catalogos")]
    public class CatalogController : BaseController
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
        [Route("Genero"), HttpPost, ResponseType(typeof(Models.GeneroForm))]
        public HttpResponseMessage GuardarGenero(Models.GeneroForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new GeneroCatalogo()
                {
                    NPK_Genero = datos.NPK_Genero,
                    Genero = datos.Genero
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarGenero(resp, this.GetNpkUser()));
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
        [Route("Genero/{NPK_Genero:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.GeneroForm))]
        public HttpResponseMessage UpdateActivateGenero(long NPK_Genero, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarGeneroActivo(NPK_Genero, Activo, this.GetNpkUser()));
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
        [Route("AlturaAsiento/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwAlturaAsiento>))]
        public HttpResponseMessage TraerAlturaAsientos(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerAlturaAsientos(activo));
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
        [Route("AlturaAsiento"), HttpPost, ResponseType(typeof(Models.AlturaAsientoForm))]
        public HttpResponseMessage GuardarAlturaAsiento(Models.AlturaAsientoForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new AlturaAsientoCatalogo()
                {
                    NPK_AlturaAsiento = datos.NPK_AlturaAsiento,
                    AlturaAsiento = datos.AlturaAsiento
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarAlturaAsiento(resp, this.GetNpkUser()));
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
        [Route("AlturaAsiento/{NPK_AlturaAsiento:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.AlturaAsientoForm))]
        public HttpResponseMessage UpdateActivateAlturaAsiento(long NPK_AlturaAsiento, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarAlturaAsientoActivo(NPK_AlturaAsiento, Activo, this.GetNpkUser()));
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
        [Route("DistanciaAsiento/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwDistanciaAsiento>))]
        public HttpResponseMessage TraerDistanciaAsientos(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerDistanciaAsientos(activo));
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
        [Route("DistanciaAsiento"), HttpPost, ResponseType(typeof(Models.DistanciaAsientoForm))]
        public HttpResponseMessage GuardarDistanciaAsiento(Models.DistanciaAsientoForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new DistanciaAsientoCatalogo()
                {
                    NPK_DistanciaAsiento = datos.NPK_DistanciaAsiento,
                    DistanciaAsiento = datos.DistanciaAsiento
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarDistanciaAsiento(resp, this.GetNpkUser()));
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
        [Route("DistanciaAsiento/{NPK_DistanciaAsiento:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.DistanciaAsientoForm))]
        public HttpResponseMessage UpdateActivateDistanciaAsiento(long NPK_DistanciaAsiento, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarDistanciaAsientoActivo(NPK_DistanciaAsiento, Activo, this.GetNpkUser()));
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
        [Route("AlturaManubrio/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwAlturaManubrio>))]
        public HttpResponseMessage TraerAlturaManubrios(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerAlturaManubrios(activo));
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
        [Route("AlturaManubrio"), HttpPost, ResponseType(typeof(Models.AlturaManubrioForm))]
        public HttpResponseMessage GuardarAlturaManubrio(Models.AlturaManubrioForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new AlturaManubrioCatalogo()
                {
                    NPK_AlturaManubrio = datos.NPK_AlturaManubrio,
                    AlturaManubrio = datos.AlturaManubrio
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarAlturaManubrio(resp, this.GetNpkUser()));
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
        [Route("AlturaManubrio/{NPK_AlturaManubrio:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.AlturaManubrioForm))]
        public HttpResponseMessage UpdateActivateAlturaManubrio(long NPK_AlturaManubrio, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarAlturaManubrioActivo(NPK_AlturaManubrio, Activo, this.GetNpkUser()));
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
        [Route("DistanciaManubrio/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwDistanciaManubrio>))]
        public HttpResponseMessage TraerDistanciaManubrios(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerDistanciaManubrios(activo));
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
        [Route("DistanciaManubrio"), HttpPost, ResponseType(typeof(Models.DistanciaManubrioForm))]
        public HttpResponseMessage GuardarDistanciaManubrio(Models.DistanciaManubrioForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new DistanciaManubrioCatalogo()
                {
                    NPK_DistanciaManubrio = datos.NPK_DistanciaManubrio,
                    DistanciaManubrio = datos.DistanciaManubrio
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarDistanciaManubrio(resp, this.GetNpkUser()));
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
        [Route("DistanciaManubrio/{NPK_DistanciaManubrio:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.DistanciaManubrioForm))]
        public HttpResponseMessage UpdateActivateDistanciaManubrio(long NPK_DistanciaManubrio, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarDistanciaManubrioActivo(NPK_DistanciaManubrio, Activo, this.GetNpkUser()));
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
        [Route("TallaZapato/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwTallaZapato>))]
        public HttpResponseMessage TraerTallaZapatos(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerTallaZapatos(activo));
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
        [Route("TallaZapato"), HttpPost, ResponseType(typeof(Models.TallaZapatoForm))]
        public HttpResponseMessage GuardarTallaZapato(Models.TallaZapatoForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new TallaZapatoCatalogo()
                {
                    NPK_TallaZapato = datos.NPK_TallaZapato,
                    TallaZapato = datos.TallaZapato
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarTallaZapato(resp, this.GetNpkUser()));
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
        [Route("TallaZapato/{NPK_TallaZapato:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.TallaZapatoForm))]
        public HttpResponseMessage UpdateActivateTallaZapato(long NPK_TallaZapato, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarTallaZapatoActivo(NPK_TallaZapato, Activo, this.GetNpkUser()));
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
