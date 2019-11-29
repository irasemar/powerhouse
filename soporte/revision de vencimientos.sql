--select * from usuario Where nombre like '%Donato%'
select * from Venta Where nfk_usuario = 461 Order by FechaPago
--select * from paquete
select	Calendario.[Date],Clase,CalendarioClase.HoraInicio,Case When ReservaClase.Asistencia = 0 Then 'No' Else 'Si' End As Asistencia,
nfk_venta
from	ReservaClase
			Inner Join CalendarioClase On NFK_CalendarioClase = NPK_CalendarioClase
			Inner Join Calendario On NFK_Calendario = NPK_Calendario
			Inner Join Clase On NFK_Clase = NPK_Clase
			Inner Join Instructor On nfk_instructor = NPK_Instructor
Where nfk_usuario = 461

Select	A.NPK_Venta,A.FechaPago,A.Cantidad,A.usadas,A.NFK_Usuario
From	(
select (Select Count(*) From ReservaClase Where nfk_venta = npk_venta) As usadas,*
from Venta Where NFK_Paquete = 7 And Cerrado = 1 And Cantidad > 5 
) A
Where A.Cantidad > A.usadas
	And nfk_usuario = 461
Order by FechaPago