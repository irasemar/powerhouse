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

        [JwtAuthentication]
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

        [JwtAuthentication]
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
        [JwtAuthentication]
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
        [JwtAuthentication]
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
        [JwtAuthentication]
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
        [JwtAuthentication]
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
        [JwtAuthentication]
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
        [JwtAuthentication]
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
        }        [JwtAuthentication]
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
                    DescripcionExpiracion = datos.DescripcionExpiracion,
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
        }        [JwtAuthentication]
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
        [JwtAuthentication]
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
        [JwtAuthentication]
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

        [JwtAuthentication]
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
    }
}
