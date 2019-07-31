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


    }
}
