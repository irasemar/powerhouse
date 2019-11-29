--Select * From (--
--select *,(Select Count(*) From ReservaClase Where nfk_venta = NPK_Venta) As CantClases from Venta Where Cantidad > 12 and Cerrado = 1
--) A Where A.Cantidad > CantClases

--Select Nombre,Apellidos,usuario,Cantidad As CantidadClasesPagadas,CantClases As CantClasesUtilizadas From (
--select NPK_Venta,Cantidad,(Select Count(*) From ReservaClase Where nfk_venta = NPK_Venta) As CantClases, Cerrado, NFK_Paquete,FechaPago,FechaVenta,NFK_Usuario
--	from Venta Where Cantidad >= 12 And NFK_Paquete in (7,9,10,11) And FechaCreacion <= '2019-10-15'And Cerrado = 1
--) A Inner Join Usuario On NFK_Usuario = NPK_Usuario Where A.Cantidad > CantClases --Order by NPK_Venta

--Select * from Usuario Where NPK_Usuario in (
--Select NFK_Usuario From (
--select NPK_Venta,Cantidad,(Select Count(*) From ReservaClase Where nfk_venta = NPK_Venta) As CantClases, Cerrado, NFK_Paquete,FechaPago,FechaVenta,NFK_Usuario
--	from Venta Where Cantidad >= 12 And NFK_Paquete in (7,9,10,11) And FechaCreacion <= '2019-10-15'And Cerrado = 1
--) A Where A.Cantidad > CantClases --Order by NPK_Venta
--)
--Update Venta Set NFK_Paquete = 9
--Select * From Venta
--Where NPK_Venta in (
--Select NPK_Venta From (
--select NPK_Venta,Cantidad,(Select Count(*) From ReservaClase Where nfk_venta = NPK_Venta) As CantClases, Cerrado, NFK_Paquete,FechaPago,FechaVenta
--	from Venta Where Cantidad >= 12 And NFK_Paquete = 7 And FechaCreacion <= '2019-10-15'And Cerrado = 0
--) A Where A.Cantidad > CantClases
--)
--Order by NPK_Venta
--Select NPK_Venta From (
--select *,(Select Count(*) From ReservaClase Where nfk_venta = NPK_Venta) As CantClases from Venta Where Cantidad >= 12 And NFK_Paquete = 7 And Cerrado = 0
--) A Where A.Cantidad > CantClases


--Select * From (
--select *,(Select Count(*) From ReservaClase Where nfk_venta = NPK_Venta) As CantClases from Venta Where Cantidad > 12 And NFK_Paquete = 7 And Cerrado = 0
--) A Where A.Cantidad > CantClases And A.Cantidad = 24

--Update Venta Set NFK_Paquete = 10
--Select * FRom Venta 
--Where NPK_Venta in (
--Select NPK_Venta From (
--select *,(Select Count(*) From ReservaClase Where nfk_venta = NPK_Venta) As CantClases from Venta Where Cantidad > 12 And NFK_Paquete = 10 And Cerrado = 0
--) A Where A.Cantidad > CantClases And A.Cantidad = 24
--)

--select * from Usuario Where NPK_Usuario in (

--Select NFK_Usuario From (
--select *,(Select Count(*) From ReservaClase Where nfk_venta = NPK_Venta) As CantClases from Venta Where Cantidad >= 12 And NFK_Paquete = 7
--) A Where A.Cantidad > CantClases
--)
--select *,(Select Count(*) From ReservaClase Where nfk_venta = NPK_Venta) As CantClases from Venta Where Cantidad > 12 and Cerrado = 1

--Update Venta Set Cerrado = 0 Where Cantidad > 12 and Cerrado = 1
--Select * from Paquete
--Select NPK_Usuario,Nombre,Apellidos,Usuario From Usuario with(nolock) Where NPK_Usuario Not In (Select Distinct NFK_Usuario From Venta with(nolock))

select NPK_Calendario,[Date], NFK_Clase,Clase, NPK_CalendarioClase, NFK_Instructor,Nombre,Apellidos, HoraInicio,Duracion,Actividad
From Calendario
		Inner Join Clase On NFK_Clase = NPK_Clase
	Inner Join CalendarioClase On NPK_Calendario = NFK_Calendario
	Inner Join Instructor On NFK_Instructor = NPK_Instructor
Where [date] = '2019-10-31'