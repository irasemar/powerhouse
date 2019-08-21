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

        public List<vwClase> TraerClases(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerClases(Activo);
            else
                return repo.TraerClases(null);
        }
        public ClaseCatalogo GuardarClase(ClaseCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarClase(datos, NFK_User);
        }
        public ClaseCatalogo GuardarClaseActivo(long NPK_Clase, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarClaseActivo(NPK_Clase, Activo, NFK_User);
        }

        public List<vwInstructor> TraerInstructors(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerInstructors(Activo);
            else
                return repo.TraerInstructors(null);
        }
        public List<vwInstructor> DetalleInstructorPublico(int NPK_Instructor)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.DetalleInstructorPublico(NPK_Instructor);
        }
        public InstructorCatalogo GuardarInstructor(InstructorCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarInstructor(datos, NFK_User);
        }
        public InstructorCatalogo GuardarInstructorActivo(long NPK_Instructor, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarInstructorActivo(NPK_Instructor, Activo, NFK_User);
        }

        public List<vwPaquete> TraerPaquetes(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerPaquetes(Activo);
            else
                return repo.TraerPaquetes(null);
        }
        public PaqueteCatalogo GuardarPaquete(PaqueteCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarPaquete(datos, NFK_User);
        }
        public PaqueteCatalogo GuardarPaqueteActivo(long NPK_Paquete, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarPaqueteActivo(NPK_Paquete, Activo, NFK_User);
        }

        public List<vwPowerHouse> TraerPowerHouses(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerPowerHouses(Activo);
            else
                return repo.TraerPowerHouses(null);
        }
        public PowerHouseCatalogo GuardarPowerHouse(PowerHouseCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarPowerHouse(datos, NFK_User);
        }
        public PowerHouseCatalogo GuardarPowerHouseActivo(long NPK_PowerHouse, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarPowerHouseActivo(NPK_PowerHouse, Activo, NFK_User);
        }

        public List<vwRedSocial> TraerRedSocials(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerRedSocials(Activo);
            else
                return repo.TraerRedSocials(null);
        }
        public RedSocialCatalogo GuardarRedSocial(RedSocialCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarRedSocial(datos, NFK_User);
        }
        public RedSocialCatalogo GuardarRedSocialActivo(long NPK_RedSocial, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarRedSocialActivo(NPK_RedSocial, Activo, NFK_User);
        }

        public List<vwPowerHouseRedSocial> TraerPowerHouseRedSocials(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerPowerHouseRedSocials(Activo);
            else
                return repo.TraerPowerHouseRedSocials(null);
        }
        public PowerHouseRedSocialCatalogo GuardarPowerHouseRedSocial(PowerHouseRedSocialCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarPowerHouseRedSocial(datos, NFK_User);
        }
        public PowerHouseRedSocialCatalogo GuardarPowerHouseRedSocialActivo(long NPK_PowerHouseRedSocial, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarPowerHouseRedSocialActivo(NPK_PowerHouseRedSocial, Activo, NFK_User);
        }

        public List<vwSalon> TraerSalons(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerSalons(Activo);
            else
                return repo.TraerSalons(null);
        }
        public SalonCatalogo GuardarSalon(SalonCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarSalon(datos, NFK_User);
        }
        public SalonCatalogo GuardarSalonActivo(long NPK_Salon, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarSalonActivo(NPK_Salon, Activo, NFK_User);
        }

        public List<vwSalonLugar> TraerSalonLugars(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerSalonLugars(Activo);
            else
                return repo.TraerSalonLugars(null);
        }
        public SalonLugarCatalogo GuardarSalonLugar(SalonLugarCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarSalonLugar(datos, NFK_User);
        }
        public SalonLugarCatalogo GuardarSalonLugarActivo(long NPK_SalonLugar, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarSalonLugarActivo(NPK_SalonLugar, Activo, NFK_User);
        }

        public InstructorCatalogo UpdateInstructorFotografia(int NPK_Instructor, string FotografiaURL, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.UpdateInstructorFotografia(NPK_Instructor, FotografiaURL, NFK_User);
        }
        public RedSocialCatalogo UpdateRedSocialFotografia(int NPK_RedSocial, string FotografiaURL, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.UpdateRedSocialFotografia(NPK_RedSocial, FotografiaURL, NFK_User);
        }
        public InstructorMusicaCatalogo UpdateInstructorMusicaFotografia(int NPK_InstructorMusica, string FotografiaURL, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.UpdateInstructorMusicaFotografia(NPK_InstructorMusica, FotografiaURL, NFK_User);
        }
        public List<vwInstructorMusica> TraerInstructorMusicas(int NFK_Instructor)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.TraerInstructorMusicas(NFK_Instructor);
        }
        public InstructorMusicaCatalogo GuardarInstructorMusica(InstructorMusicaCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarInstructorMusica(datos, NFK_User);
        }
        public InstructorMusicaCatalogo EliminarInstructorMusica(long NPK_InstructorMusica)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.EliminarInstructorMusica(NPK_InstructorMusica);
        }

        public List<vwInstructorRedSocial> TraerInstructorRedSocials(int NFK_Instructor)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.TraerInstructorRedSocials(NFK_Instructor);
        }
        public InstructorRedSocialCatalogo GuardarInstructorRedSocial(InstructorRedSocialCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarInstructorRedSocial(datos, NFK_User);
        }
        public InstructorRedSocialCatalogo EliminarInstructorRedSocial(long NPK_InstructorRedSocial)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.EliminarInstructorRedSocial(NPK_InstructorRedSocial);
        }
        #endregion       

        #region USERS
        public vwUsuario AuthenticateUser(string username, string password)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.AuthenticateUser(username, password);
        }
        public vwUsuario AuthenticateUserAdmin(string username, string password)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.AuthenticateUserAdmin(username, password);
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
        public vwUsuarioDatos GetUserDatos(int NPK_Usuario)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.GetUserDatos(NPK_Usuario);
        }

        public string VentaUsuario(vwVenta datos)
        {
            var repo = new UserRepository(ClientConnectionString);
            repo.VentaUsuario(datos);
            return "";
        }
        public List<vwVentaCarro> VentaUsuarioCarro(int NPK_User)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.VentaUsuarioCarro(NPK_User);
        }
        public List<vwAñoTarjeta> TraerAñoTarjetas(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerAñoTarjetas(Activo);
            else
                return repo.TraerAñoTarjetas(null);
        }
        public AñoTarjetaCatalogo GuardarAñoTarjeta(AñoTarjetaCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarAñoTarjeta(datos, NFK_User);
        }
        public AñoTarjetaCatalogo GuardarAñoTarjetaActivo(long NPK_AñoTarjeta, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarAñoTarjetaActivo(NPK_AñoTarjeta, Activo, NFK_User);
        }
        public List<vwMes> TraerMess(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerMess(Activo);
            else
                return repo.TraerMess(null);
        }
        public MesCatalogo GuardarMes(MesCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarMes(datos, NFK_User);
        }
        public MesCatalogo GuardarMesActivo(long NPK_Mes, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarMesActivo(NPK_Mes, Activo, NFK_User);
        }
        public List<vwTipoTarjeta> TraerTipoTarjetas(int Activo)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            if (Activo < 2)
                return repo.TraerTipoTarjetas(Activo);
            else
                return repo.TraerTipoTarjetas(null);
        }
        public TipoTarjetaCatalogo GuardarTipoTarjeta(TipoTarjetaCatalogo datos, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            datos.Activo = 1;
            return repo.GuardarTipoTarjeta(datos, NFK_User);
        }
        public TipoTarjetaCatalogo GuardarTipoTarjetaActivo(long NPK_TipoTarjeta, int Activo, int NFK_User)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.GuardarTipoTarjetaActivo(NPK_TipoTarjeta, Activo, NFK_User);
        }        public RespuestaPago VentaUsuarioPago(vwVentaCarroPago datos)
        {
            var repo = new UserRepository(ClientConnectionString);
            return repo.VentaUsuarioPago(datos);
        }
        public List<vwClasesDisponiblesWeeks> ClasesDisponiblesPorInstructor(int NFK_Instructor)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.ClasesDisponiblesPorInstructor(NFK_Instructor);
        }
        public List<vwClasesDisponiblesWeeks> ClasesDisponibles(int NFK_Clase)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.ClasesDisponibles(NFK_Clase);
        }
        public List<vwClaseHeader> Estatus_Salon_PorDia_Header(int NFK_Clase, int NFK_Semana, int Dia, int NPK_CalendarioClase, int NFK_Usuario)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.Estatus_Salon_PorDia_Header(NFK_Clase, NFK_Semana, Dia, NPK_CalendarioClase, NFK_Usuario);
        }
        public List<vwClaseReserva> Estatus_Salon_PorDia(int NFK_Clase, int NFK_Semana, int Dia, int NPK_CalendarioClase)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.Estatus_Salon_PorDia(NFK_Clase, NFK_Semana, Dia, NPK_CalendarioClase);
        }
        public string ReservaLugar(int NFK_CalendarioClase, int NFK_Usuario, int NFK_Salon, int NFK_SalonLugar)
        {
            var repo = new UserRepository(ClientConnectionString);
            repo.ReservaLugar(NFK_CalendarioClase, NFK_Usuario, NFK_Salon, NFK_SalonLugar);
            return "";
        }
        public string CancelarReservaLugar(int NPK_ReservaClase, int NFK_Usuario)
        {
            var repo = new UserRepository(ClientConnectionString);
            repo.CancelarReservaLugar(NPK_ReservaClase, NFK_Usuario);
            return "";
        }
        public List<vwSaldo>  Obtener_Saldo(int NFK_Usuario)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.Obtener_Saldo(NFK_Usuario);
        }
        public List<vwHistoriaReserva> Mis_Reservas(int NFK_Usuario)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.Mis_Reservas(NFK_Usuario);
        }
        public List<vwHistoriaReserva> Mi_Historia(int NFK_Usuario)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.Mi_Historia(NFK_Usuario);
        }
        public List<vwHistoriaPagos> Mi_HistoriaPagos(int NFK_Usuario)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.Mi_HistoriaPagos(NFK_Usuario);
        }
        public string PagarPaquete(int NPK_Paquete, int NFK_Usuario)
        {
            var repo = new UserRepository(ClientConnectionString);
            repo.PagarPaquete(NPK_Paquete, NFK_Usuario);
            return "";
        }
        public List<vwMisTarjetas> Obtener_Tarjetas(int NFK_Usuario)
        {
            var repo = new CatalogRepository(ClientConnectionString);
            return repo.Obtener_Tarjetas(NFK_Usuario);
        }
        #endregion      
    }
}
