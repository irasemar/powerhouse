using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Filters;

namespace dyma.powerhouse.api.Jwt
{
    public class JwtAuthenticationAttribute : Attribute, IAuthenticationFilter
    {
        public string Realm { get; set; }
        public bool AllowMultiple => false;

        public async Task AuthenticateAsync(HttpAuthenticationContext context, CancellationToken cancellationToken)
        {
            var request = context.Request;
            var authorization = request.Headers.Authorization;

            if (authorization == null || authorization.Scheme != "Bearer")
                return;

            if (string.IsNullOrEmpty(authorization.Parameter))
            {
                context.ErrorResult = new AuthenticationFailureResult("You need an authorization token", request);
                return;
            }

            var token = authorization.Parameter;
            var principal = await AuthenticateJwtToken(token);


            if (principal == null)
                context.ErrorResult = new AuthenticationFailureResult("Invalid token", request);

            else
                context.Principal = principal;


        }

        private static bool ValidateToken(string token, out Models.UserSession username)
        {
            username = null;
            var simplePrinciple = JwtManager.GetPrincipal(token);
            var identity = simplePrinciple?.Identity as ClaimsIdentity;

            if (identity == null)
                return false;

            if (!identity.IsAuthenticated)
                return false;

            username = new Models.UserSession();

            var usernameClaim = identity.FindFirst(ClaimTypes.Name);
            username.Nombre = usernameClaim?.Value;

            usernameClaim = identity.FindFirst(ClaimTypes.Surname);
            username.Apellidos = usernameClaim?.Value;

            usernameClaim = identity.FindFirst(ClaimTypes.GivenName);
            username.Usuario = usernameClaim?.Value;

            usernameClaim = identity.FindFirst(ClaimTypes.Sid);
            username.NPK_Usuario = int.Parse(usernameClaim?.Value);
                        
            if (string.IsNullOrEmpty(username.Usuario))
                return false;



            // More validate to check whether username exists in system

            return true;
        }

        protected Task<IPrincipal> AuthenticateJwtToken(string token)
        {
            Models.UserSession usuario;

            if (ValidateToken(token, out usuario))
            {
                // based on username to get more information from database in order to build local identity
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, usuario.Nombre),
                    new Claim(ClaimTypes.Surname, usuario.Apellidos),
                    new Claim(ClaimTypes.Sid, usuario.NPK_Usuario.ToString()),
                    new Claim(ClaimTypes.GivenName, usuario.Usuario)
                };

                var identity = new ClaimsIdentity(claims, "Jwt");
                IPrincipal user = new ClaimsPrincipal(identity);
                return Task.FromResult(user);
            }

            return Task.FromResult<IPrincipal>(null);
        }

        public Task ChallengeAsync(HttpAuthenticationChallengeContext context, CancellationToken cancellationToken)
        {
            Challenge(context);
            return Task.FromResult(0);
        }

        private void Challenge(HttpAuthenticationChallengeContext context)
        {
            string parameter = null;

            if (!string.IsNullOrEmpty(Realm))
                parameter = "realm=\"" + Realm + "\"";

            context.ChallengeWith("Bearer", parameter);
        }
    }
}