using System;
using System.Collections.Generic;
using dyma.powerhouse.data.entity;
using dyma.powerhouse.data.views;
using dyma.powerhouse.data.exceptions;
using dyma.powerhouse.data.repositories;

namespace dyma.powerhouse.data.actions
{
    public class Tasks
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        private static string ClientConnectionString = "";
        public Tasks(string clientConnString)
        {
            ClientConnectionString = clientConnString;
        }


        #region CATALOGOS
        public List<vwGenero> TraerGeneros(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerGeneros(Activo);
            else
                return repo.TraerGeneros(null);
        }
        public GeneroCatalogo GuardarGenero(GeneroCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarGenero(datos, NFK_User);
        }
        public GeneroCatalogo GuardarGeneroActivo(long NPK_Genero, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarGeneroActivo(NPK_Genero, Activo, NFK_User);
        }
        public List<vwAlturaAsiento> TraerAlturaAsientos(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerAlturaAsientos(Activo);
            else
                return repo.TraerAlturaAsientos(null);
        }
        public AlturaAsientoCatalogo GuardarAlturaAsiento(AlturaAsientoCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarAlturaAsiento(datos, NFK_User);
        }
        public AlturaAsientoCatalogo GuardarAlturaAsientoActivo(long NPK_AlturaAsiento, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarAlturaAsientoActivo(NPK_AlturaAsiento, Activo, NFK_User);
        }
        public List<vwDistanciaAsiento> TraerDistanciaAsientos(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerDistanciaAsientos(Activo);
            else
                return repo.TraerDistanciaAsientos(null);
        }
        public DistanciaAsientoCatalogo GuardarDistanciaAsiento(DistanciaAsientoCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarDistanciaAsiento(datos, NFK_User);
        }
        public DistanciaAsientoCatalogo GuardarDistanciaAsientoActivo(long NPK_DistanciaAsiento, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarDistanciaAsientoActivo(NPK_DistanciaAsiento, Activo, NFK_User);
        }
        public List<vwAlturaManubrio> TraerAlturaManubrios(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerAlturaManubrios(Activo);
            else
                return repo.TraerAlturaManubrios(null);
        }
        public AlturaManubrioCatalogo GuardarAlturaManubrio(AlturaManubrioCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarAlturaManubrio(datos, NFK_User);
        }
        public AlturaManubrioCatalogo GuardarAlturaManubrioActivo(long NPK_AlturaManubrio, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarAlturaManubrioActivo(NPK_AlturaManubrio, Activo, NFK_User);
        }
        public List<vwDistanciaManubrio> TraerDistanciaManubrios(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerDistanciaManubrios(Activo);
            else
                return repo.TraerDistanciaManubrios(null);
        }
        public DistanciaManubrioCatalogo GuardarDistanciaManubrio(DistanciaManubrioCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarDistanciaManubrio(datos, NFK_User);
        }
        public DistanciaManubrioCatalogo GuardarDistanciaManubrioActivo(long NPK_DistanciaManubrio, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarDistanciaManubrioActivo(NPK_DistanciaManubrio, Activo, NFK_User);
        }
        public List<vwTallaZapato> TraerTallaZapatos(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerTallaZapatos(Activo);
            else
                return repo.TraerTallaZapatos(null);
        }
        public TallaZapatoCatalogo GuardarTallaZapato(TallaZapatoCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarTallaZapato(datos, NFK_User);
        }
        public TallaZapatoCatalogo GuardarTallaZapatoActivo(long NPK_TallaZapato, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarTallaZapatoActivo(NPK_TallaZapato, Activo, NFK_User);
        }

        #endregion       

        #region USERS
        public vwUsuario AuthenticateUser(string username, string password)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.AuthenticateUser(username, password);
        }
        public vwUsuario RegisterUser(vwUsuario datos)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.RegisterUser(datos);
        }
        public CatalogoUsuario UpdateProfileUser(CatalogoUsuario datos)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.UpdateProfileUser(datos);
        }
        public vwRespuesta ValidateExistsUser(string username)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.ValidateExistsUser(username);
        }
        public vwUsuario GetUser(string username)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.GetUser(username);
        }
        #endregion      
    }
}
