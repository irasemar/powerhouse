using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Configuration;
using dyma.powerhouse.data.entity;
using dyma.powerhouse.data.views;

namespace dyma.powerhouse.api.Jwt
{
    public static class JwtManager
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        /// <summary>
        /// Use the below code to generate symmetric Secret Key
        ///     var hmac = new HMACSHA256();
        ///     var key = Convert.ToBase64String(hmac.Key);
        /// </summary>
        private static string Secret = ConfigurationManager.AppSettings["secret"];
        private static string Issuer = ConfigurationManager.AppSettings["issuer"];
        private static string minutesToExpire = ConfigurationManager.AppSettings["tokenMinutesToExpire"];

        public static string GenerateToken(vwUsuario user)
        {
            var symmetricKey = Convert.FromBase64String(Secret);
            var tokenHandler = new JwtSecurityTokenHandler();

            var now = DateTime.UtcNow;
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                        {
                            new Claim(ClaimTypes.Name, user.Nombre),
                            new Claim(ClaimTypes.Surname, user.Apellidos),
                            new Claim(ClaimTypes.Sid, user.NPK_Usuario.ToString()),
                            new Claim(ClaimTypes.GivenName, user.Usuario)
                        }),

                //Expires = now.AddMinutes(Convert.ToInt32(minutesToExpire)),
                Issuer = Issuer,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            return token;
        }

        public static ClaimsPrincipal GetPrincipal(string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

                if (jwtToken == null)
                    return null;

                var symmetricKey = Convert.FromBase64String(Secret);

                var validationParameters = new TokenValidationParameters()
                {
                    RequireExpirationTime = false,
                    ValidateLifetime = false,
                    ValidIssuer = Issuer,
                    ValidateIssuer = true,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(symmetricKey),
                    ValidateIssuerSigningKey = true
                };

                SecurityToken securityToken;
                var principal = tokenHandler.ValidateToken(token, validationParameters, out securityToken);

                return principal;
            }

            catch (Exception ex)
            {
                log.Error(string.Format("ValidateToken {0}", token), ex);
                return null;
            }
        }
        public static ClaimsPrincipal GetPrincipalOffline(string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

                if (jwtToken == null)
                    return null;

                var symmetricKey = Convert.FromBase64String(Secret);

                var validationParameters = new TokenValidationParameters()
                {
                    RequireExpirationTime = false,
                    ValidateLifetime = false,
                    ValidIssuer = Issuer,
                    ValidateIssuer = true,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(symmetricKey),
                    ValidateIssuerSigningKey = true
                };

                SecurityToken securityToken;
                var principal = tokenHandler.ValidateToken(token, validationParameters, out securityToken);

                return principal;
            }

            catch (Exception ex)
            {
                log.Error(string.Format("ValidateToken {0}", token), ex);
                return null;
            }
        }
    }
}