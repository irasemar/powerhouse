select * from calendario Where [date] > getdate()
select calendarioclase.*,instructor.Nombre + Apellidos from calendarioclase inner join instructor On nfk_instructor = npk_instructor Where nfk_calendario in (179)
select * from usuario where usuario like '%manuel%'

Select * from Venta Where nfk_usuario = 59 Order by FechaPago
select * from ReservaClase Where nfk_usuario = 59 And nfk_venta = 2783
select * from ReservaClase Where nfk_calendarioclase = 800
--insert into ReservaClase (NFK_CalendarioClase,NFK_Usuario,NFK_Salon,NFK_SalonLugar,Estatus,Activo,CreadoPor,FechaCreacion,NFK_Venta,Asistencia)
--select 800 As NFK_CalendarioClase,59 As NFK_Usuario,1 as NFK_Salon,NPK_SalonLugar As NFK_SalonLugar,1 As Estatus,1 As Activo, 0 As CreadoPor, getdate() As FechaCreacion,2783 NFK_Venta, 0 As Asistencia
--From	SalonLugar
--Where NFK_Salon = 1

--nfk_usuario 59
select * from Paquete