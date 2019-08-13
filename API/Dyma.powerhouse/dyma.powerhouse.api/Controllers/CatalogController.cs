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
using System.Drawing.Imaging;

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
        [Route("GeneroPWH/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwGenero>))]
        public HttpResponseMessage TraerGenerosPWH(int activo)
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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

        [JwtAuthentication]
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
        [AllowAnonymous]
        [Route("Clase/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwClase>))]
        public HttpResponseMessage TraerClases(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerClases(activo));
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

        [JwtAuthentication]
        [Route("Clase"), HttpPost, ResponseType(typeof(Models.ClaseForm))]
        public HttpResponseMessage GuardarClase(Models.ClaseForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new ClaseCatalogo()
                {
                    NPK_Clase = datos.NPK_Clase,
                    Clase = datos.Clase,
                    DescripcionClase = datos.DescripcionClase,
                    Tiempo = datos.Tiempo
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarClase(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("Clase/{NPK_Clase:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.ClaseForm))]
        public HttpResponseMessage UpdateActivateClase(long NPK_Clase, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarClaseActivo(NPK_Clase, Activo, this.GetNpkUser()));
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
        [Route("Instructor/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwInstructor>))]
        public HttpResponseMessage TraerInstructors(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerInstructors(activo));
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
        [Route("InstructorPublico/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwInstructor>))]
        public HttpResponseMessage TraerInstructorsPublico(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerInstructors(activo));
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
        [Route("DetalleInstructorPublico/{NPK_Instructor:int}"), HttpGet, ResponseType(typeof(List<data.views.vwInstructor>))]
        public HttpResponseMessage DetalleInstructorPublico(int NPK_Instructor)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.DetalleInstructorPublico(NPK_Instructor));
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

        [JwtAuthentication]
        [Route("Instructor"), HttpPost, ResponseType(typeof(Models.InstructorForm))]
        public HttpResponseMessage GuardarInstructor(Models.InstructorForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new InstructorCatalogo()
                {
                    NPK_Instructor = datos.NPK_Instructor,
                    Nombre = datos.Nombre,
                    Apellidos = datos.Apellidos,
                    PasoFavoritoBici = datos.PasoFavoritoBici,
                    PasoFavoritoHiit = datos.PasoFavoritoHiit,
                    ArtistaFavorito = datos.ArtistaFavorito,
                    AnimalFavorito = datos.AnimalFavorito,
                    PeliculaFavorito = datos.PeliculaFavorito,
                    Frase = datos.Frase,
                    DescripcionSuClase = datos.DescripcionSuClase
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarInstructor(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("Instructor/{NPK_Instructor:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.InstructorForm))]
        public HttpResponseMessage UpdateActivateInstructor(long NPK_Instructor, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarInstructorActivo(NPK_Instructor, Activo, this.GetNpkUser()));
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
        }        [AllowAnonymous]
        [Route("Paquete/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwPaquete>))]
        public HttpResponseMessage TraerPaquetes(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerPaquetes(activo));
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

        [JwtAuthentication]
        [Route("Paquete"), HttpPost, ResponseType(typeof(Models.PaqueteForm))]
        public HttpResponseMessage GuardarPaquete(Models.PaqueteForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new PaqueteCatalogo()
                {
                    NPK_Paquete = datos.NPK_Paquete,
                    Paquete = datos.Paquete,
                    CantidadClases = datos.CantidadClases,
                    Precio = datos.Precio,
                    ExpiracionDias = datos.ExpiracionDias
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarPaquete(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("Paquete/{NPK_Paquete:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.PaqueteForm))]
        public HttpResponseMessage UpdateActivatePaquete(long NPK_Paquete, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarPaqueteActivo(NPK_Paquete, Activo, this.GetNpkUser()));
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
        }        [AllowAnonymous]
        [Route("PowerHouse/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwPowerHouse>))]
        public HttpResponseMessage TraerPowerHouses(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerPowerHouses(activo));
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

        [JwtAuthentication]
        [Route("PowerHouse"), HttpPost, ResponseType(typeof(Models.PowerHouseForm))]
        public HttpResponseMessage GuardarPowerHouse(Models.PowerHouseForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new PowerHouseCatalogo()
                {
                    NPK_PowerHouse = datos.NPK_PowerHouse,
                    Direccion = datos.Direccion,
                    Telefonos = datos.Telefonos,
                    Latitud = datos.Latitud,
                    Longitud = datos.Longitud
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarPowerHouse(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("PowerHouse/{NPK_PowerHouse:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.PowerHouseForm))]
        public HttpResponseMessage UpdateActivatePowerHouse(long NPK_PowerHouse, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarPowerHouseActivo(NPK_PowerHouse, Activo, this.GetNpkUser()));
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
        [Route("RedSocial/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwRedSocial>))]
        public HttpResponseMessage TraerRedSocials(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerRedSocials(activo));
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

        [JwtAuthentication]
        [Route("RedSocial"), HttpPost, ResponseType(typeof(Models.RedSocialForm))]
        public HttpResponseMessage GuardarRedSocial(Models.RedSocialForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new RedSocialCatalogo()
                {
                    NPK_RedSocial = datos.NPK_RedSocial,
                    RedSocial = datos.RedSocial,
                    RedSocialImagen = null
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarRedSocial(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("RedSocial/{NPK_RedSocial:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.RedSocialForm))]
        public HttpResponseMessage UpdateActivateRedSocial(long NPK_RedSocial, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarRedSocialActivo(NPK_RedSocial, Activo, this.GetNpkUser()));
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
        }        [JwtAuthentication]
        [Route("RedSocial/{NPK_RedSocial:int}/fileRedSocial"), HttpPost]
        public async System.Threading.Tasks.Task<HttpResponseMessage> UpdateRedSocialFotografia(int NPK_RedSocial)
        {
            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                    throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

                var task = new Tasks(this.GetConnectionString());


                var provider = new MultipartMemoryStreamProvider();
                await Request.Content.ReadAsMultipartAsync(provider);

                string baseUrl = string.Concat(Request.RequestUri.Scheme, "://", Request.RequestUri.Authority, HttpContext.Current.Request.ApplicationPath);

                var path = HttpContext.Current.Server.MapPath(string.Format("~/Files/RedesSociales/{0}/", NPK_RedSocial));
                var urlPath = string.Format("/Files/RedesSociales/{0}/", NPK_RedSocial);
                var newFilename = "";
                foreach (var file in provider.Contents)
                {

                    var filename = file.Headers.ContentDisposition.FileName.Replace("\"", string.Empty);
                    if (filename.IndexOf('.') < 0)
                        throw new data.exceptions.BusinessRuleValidationException("Invalid Request Format (Headers.ContentDisposition.FileName)");

                    var extension = filename.Split('.').Last();
                    var name = filename.Split('.').First();
                    var buffer = await file.ReadAsByteArrayAsync();
                    newFilename = name + Path.GetExtension(filename).ToLower();
                    CreateDirectoryIfNotExists(path);
                    File.WriteAllBytes(path + newFilename, buffer);
                    break;
                }

                var urlfile = baseUrl + urlPath + newFilename;
                var result = task.UpdateRedSocialFotografia(NPK_RedSocial, urlfile, GetNpkUser());

                return Request.CreateResponse(HttpStatusCode.OK, result);
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
        [JwtAuthentication]
        [Route("PowerHouseRedSocial/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwPowerHouseRedSocial>))]
        public HttpResponseMessage TraerPowerHouseRedSocials(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerPowerHouseRedSocials(activo));
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

        

        [JwtAuthentication]
        [Route("PowerHouseRedSocial"), HttpPost, ResponseType(typeof(Models.PowerHouseRedSocialForm))]
        public HttpResponseMessage GuardarPowerHouseRedSocial(Models.PowerHouseRedSocialForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new PowerHouseRedSocialCatalogo()
                {
                    NPK_PowerHouseRedSocial = datos.NPK_PowerHouseRedSocial,
                    NFK_RedSocial = datos.NFK_RedSocial,
                    RedSocial = datos.RedSocial
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarPowerHouseRedSocial(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("PowerHouseRedSocial/{NPK_PowerHouseRedSocial:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.PowerHouseRedSocialForm))]
        public HttpResponseMessage UpdateActivatePowerHouseRedSocial(long NPK_PowerHouseRedSocial, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarPowerHouseRedSocialActivo(NPK_PowerHouseRedSocial, Activo, this.GetNpkUser()));
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
        [Route("Salon/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwSalon>))]
        public HttpResponseMessage TraerSalons(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerSalons(activo));
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

        [JwtAuthentication]
        [Route("Salon"), HttpPost, ResponseType(typeof(Models.SalonForm))]
        public HttpResponseMessage GuardarSalon(Models.SalonForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new SalonCatalogo()
                {
                    NPK_Salon = datos.NPK_Salon,
                    Salon = datos.Salon
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarSalon(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("Salon/{NPK_Salon:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.SalonForm))]
        public HttpResponseMessage UpdateActivateSalon(long NPK_Salon, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarSalonActivo(NPK_Salon, Activo, this.GetNpkUser()));
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
        [JwtAuthentication]
        [Route("SalonLugar/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwSalonLugar>))]
        public HttpResponseMessage TraerSalonLugars(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerSalonLugars(activo));
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
        [Route("SalonLugar"), HttpPost, ResponseType(typeof(Models.SalonLugarForm))]
        public HttpResponseMessage GuardarSalonLugar(Models.SalonLugarForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new SalonLugarCatalogo()
                {
                    NPK_SalonLugar = datos.NPK_SalonLugar,
                    NFK_Salon = datos.NFK_Salon,
                    SalonLugar = datos.SalonLugar
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarSalonLugar(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("SalonLugar/{NPK_SalonLugar:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.SalonLugarForm))]
        public HttpResponseMessage UpdateActivateSalonLugar(long NPK_SalonLugar, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarSalonLugarActivo(NPK_SalonLugar, Activo, this.GetNpkUser()));
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
        [JwtAuthentication]
        [Route("Instructor/{NPK_Instructor:int}/filefotoInstructor"), HttpPost]
        public async System.Threading.Tasks.Task<HttpResponseMessage> UpdateInstructorFotografia(int NPK_Instructor)
        {
            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                    throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

                var task = new Tasks(this.GetConnectionString());


                var provider = new MultipartMemoryStreamProvider();
                await Request.Content.ReadAsMultipartAsync(provider);

                string baseUrl = string.Concat(Request.RequestUri.Scheme, "://", Request.RequestUri.Authority, HttpContext.Current.Request.ApplicationPath);

                var path = HttpContext.Current.Server.MapPath(string.Format("~/Files/Instructores/{0}/", NPK_Instructor));
                var urlPath = string.Format("/Files/Instructores/{0}/", NPK_Instructor);
                var newFilename = "";
                foreach (var file in provider.Contents)
                {

                    var filename = file.Headers.ContentDisposition.FileName.Replace("\"", string.Empty);
                    if (filename.IndexOf('.') < 0)
                        throw new data.exceptions.BusinessRuleValidationException("Invalid Request Format (Headers.ContentDisposition.FileName)");

                    var extension = filename.Split('.').Last();
                    var name = filename.Split('.').First();
                    var buffer = await file.ReadAsByteArrayAsync();
                    newFilename = name + Path.GetExtension(filename).ToLower();
                    CreateDirectoryIfNotExists(path);
                    File.WriteAllBytes(path + newFilename, buffer);
                    break;
                }

                var urlfile = baseUrl + urlPath + newFilename;
                var result = task.UpdateInstructorFotografia(NPK_Instructor, urlfile, GetNpkUser());

                return Request.CreateResponse(HttpStatusCode.OK, result);
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

        [JwtAuthentication]
        [Route("InstructorMusica/{NFK_Instructor:int}"), HttpGet, ResponseType(typeof(List<data.views.vwInstructorMusica>))]
        public HttpResponseMessage TraerInstructorMusicas(int NFK_Instructor)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerInstructorMusicas(NFK_Instructor));
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
        [Route("InstructorMusicaWH/{NFK_Instructor:int}"), HttpGet, ResponseType(typeof(List<data.views.vwInstructorMusica>))]
        public HttpResponseMessage TraerInstructorMusicasWH(int NFK_Instructor)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerInstructorMusicas(NFK_Instructor));
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

        [JwtAuthentication]
        [Route("InstructorMusica"), HttpPost, ResponseType(typeof(Models.InstructorMusicaForm))]

        public HttpResponseMessage GuardarInstructorMusica(Models.InstructorMusicaForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new InstructorMusicaCatalogo()
                {
                    NPK_InstructorMusica = datos.NPK_InstructorMusica,
                    NFK_Instructor = datos.NFK_Instructor,
                    Musica = datos.Musica,
                    imagen = datos.imagen
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarInstructorMusica(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("InstructorMusica/{NPK_InstructorMusica:long}/Eliminar"), HttpPost, ResponseType(typeof(Models.InstructorMusicaForm))]
        public HttpResponseMessage EliminarInstructorMusica(long NPK_InstructorMusica)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.EliminarInstructorMusica(NPK_InstructorMusica));
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
        }        [JwtAuthentication]
        [Route("InstructorMusica/{NPK_InstructorMusica:int}/filefotoInstructorMusica"), HttpPost]
        public async System.Threading.Tasks.Task<HttpResponseMessage> UpdateFotografiaInstructorMusica(int NPK_InstructorMusica)
        {
            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                    throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

                var task = new Tasks(this.GetConnectionString());


                var provider = new MultipartMemoryStreamProvider();
                await Request.Content.ReadAsMultipartAsync(provider);

                string baseUrl = string.Concat(Request.RequestUri.Scheme, "://", Request.RequestUri.Authority, HttpContext.Current.Request.ApplicationPath);

                var path = HttpContext.Current.Server.MapPath(string.Format("~/Files/InstructoresMusica/{0}/", NPK_InstructorMusica));
                var urlPath = string.Format("/Files/InstructoresMusica/{0}/", NPK_InstructorMusica);
                var newFilename = "";
                foreach (var file in provider.Contents)
                {

                    var filename = file.Headers.ContentDisposition.FileName.Replace("\"", string.Empty);
                    if (filename.IndexOf('.') < 0)
                        throw new data.exceptions.BusinessRuleValidationException("Invalid Request Format (Headers.ContentDisposition.FileName)");

                    var extension = filename.Split('.').Last();
                    var name = filename.Split('.').First();
                    var buffer = await file.ReadAsByteArrayAsync();
                    newFilename = name + Path.GetExtension(filename).ToLower();
                    CreateDirectoryIfNotExists(path);
                    File.WriteAllBytes(path + newFilename, buffer);
                    break;
                }

                var urlfile = baseUrl + urlPath + newFilename;
                var result = task.UpdateInstructorMusicaFotografia(NPK_InstructorMusica, urlfile, GetNpkUser());

                return Request.CreateResponse(HttpStatusCode.OK, result);
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
        }        [JwtAuthentication]
        [Route("InstructorRedSocial/{NFK_Instructor:int}"), HttpGet, ResponseType(typeof(List<data.views.vwInstructorRedSocial>))]
        public HttpResponseMessage TraerInstructorRedSocials(int NFK_Instructor)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerInstructorRedSocials(NFK_Instructor));
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
        [Route("InstructorRedSocialWH/{NFK_Instructor:int}"), HttpGet, ResponseType(typeof(List<data.views.vwInstructorRedSocial>))]
        public HttpResponseMessage TraerInstructorRedSocialsWH(int NFK_Instructor)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerInstructorRedSocials(NFK_Instructor));
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

        [JwtAuthentication]
        [Route("InstructorRedSocial"), HttpPost, ResponseType(typeof(Models.InstructorRedSocialForm))]
        public HttpResponseMessage GuardarInstructorRedSocial(Models.InstructorRedSocialForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new InstructorRedSocialCatalogo()
                {
                    NPK_InstructorRedSocial = datos.NPK_InstructorRedSocial,
                    NFK_Instructor = datos.NFK_Instructor,
                    NFK_RedSocial = datos.NFK_RedSocial,
                    RedSocial = datos.RedSocial
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarInstructorRedSocial(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("InstructorRedSocial/{NPK_InstructorRedSocial:long}/Eliminar"), HttpPost, ResponseType(typeof(Models.InstructorRedSocialForm))]
        public HttpResponseMessage EliminarInstructorRedSocial(long NPK_InstructorRedSocial)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.EliminarInstructorRedSocial(NPK_InstructorRedSocial));
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
        }        [AllowAnonymous]
        [Route("AñoTarjeta/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwAñoTarjeta>))]
        public HttpResponseMessage TraerAñoTarjetas(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerAñoTarjetas(activo));
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

        [JwtAuthentication]
        [Route("AñoTarjeta"), HttpPost, ResponseType(typeof(Models.AñoTarjetaForm))]
        public HttpResponseMessage GuardarAñoTarjeta(Models.AñoTarjetaForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new AñoTarjetaCatalogo()
                {
                    NPK_AñoTarjeta = datos.NPK_AñoTarjeta,
                    Anio = datos.Anio
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarAñoTarjeta(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("AñoTarjeta/{NPK_AñoTarjeta:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.AñoTarjetaForm))]
        public HttpResponseMessage UpdateActivateAñoTarjeta(long NPK_AñoTarjeta, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarAñoTarjetaActivo(NPK_AñoTarjeta, Activo, this.GetNpkUser()));
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
        [Route("Mes/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwMes>))]
        public HttpResponseMessage TraerMess(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerMess(activo));
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

        [JwtAuthentication]
        [Route("Mes"), HttpPost, ResponseType(typeof(Models.MesForm))]
        public HttpResponseMessage GuardarMes(Models.MesForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new MesCatalogo()
                {
                    NPK_Mes = datos.NPK_Mes,
                    NumeroMes = datos.NumeroMes,
                    MesDescripcion = datos.MesDescripcion
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarMes(resp, this.GetNpkUser()));
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

        [JwtAuthentication]
        [Route("Mes/{NPK_Mes:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.MesForm))]
        public HttpResponseMessage UpdateActivateMes(long NPK_Mes, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarMesActivo(NPK_Mes, Activo, this.GetNpkUser()));
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
        [Route("TipoTarjeta/{activo:int}"), HttpGet, ResponseType(typeof(List<data.views.vwTipoTarjeta>))]
        public HttpResponseMessage TraerTipoTarjetas(int activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.TraerTipoTarjetas(activo));
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
        [Route("TipoTarjeta"), HttpPost, ResponseType(typeof(Models.TipoTarjetaForm))]
        public HttpResponseMessage GuardarTipoTarjeta(Models.TipoTarjetaForm datos)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var resp = new TipoTarjetaCatalogo()
                {
                    NPK_TipoTarjeta = datos.NPK_TipoTarjeta,
                    TipoTarjeta = datos.TipoTarjeta
                };

                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarTipoTarjeta(resp, this.GetNpkUser()));
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
        [Route("TipoTarjeta/{NPK_TipoTarjeta:long}/{Activo:int}/Activar"), HttpPost, ResponseType(typeof(Models.TipoTarjetaForm))]
        public HttpResponseMessage UpdateActivateTipoTarjeta(long NPK_TipoTarjeta, int Activo)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                return Request.CreateResponse(HttpStatusCode.OK, proxy.GuardarTipoTarjetaActivo(NPK_TipoTarjeta, Activo, this.GetNpkUser()));
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
        [Route("GetUserData/{NPK_User:long}"), HttpGet, ResponseType(typeof(List<dyma.powerhouse.data.views.vwUsuarioDatos>))]
        public HttpResponseMessage GetUserData(int NPK_User)
        {
            try
            {
                var proxy = new Tasks(this.GetConnectionString());
                var user = proxy.GetUserDatos(NPK_User);
                return Request.CreateResponse(HttpStatusCode.OK, user);
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
