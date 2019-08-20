--sp_helptext SP_Proc_Venta_Carro
Drop Procedure SP_Proc_Venta_Carro
Go
Create Procedure SP_Proc_Venta_Carro
	@NFK_Usuario	Int,
	@NFK_Paquete	Int,
	@Cantidad	Int
As
	Delete Venta Where FechaPago Is Null
	Insert Into Venta (NFK_Usuario,NFK_Paquete,Cantidad,PrecioVenta,FechaVenta,Activo,CreadoPor,FechaCreacion)
	Select @NFK_Usuario, @NFK_Paquete, @Cantidad, Precio, Getdate(), 1, @NFK_Usuario, Getdate()
	From	Paquete
	Where	NPK_Paquete = @NFK_Paquete
Go
Drop Procedure [dbo].[SP_Proc_Venta_Carro_Pago]
Go
Create Procedure [dbo].[SP_Proc_Venta_Carro_Pago]
	@NFK_Usuario	Int,
	@TipoTarjeta	varchar(100),
	@NumeroTarjeta	varchar(4),
	@Titular		varchar(200),
	@CorreoElectronico	varchar(200),
	@NumAutorizacion	varchar(100)
As
	Update	Venta
		Set
			FechaPago = Getdate(),
			TipoTarjeta = @TipoTarjeta,
			NumeroTarjeta = @NumeroTarjeta,
			Titular = @Titular,
			CorreoElectronico = @CorreoElectronico,
			NumAutorizacion = @NumAutorizacion,
			Cerrado = 0
	
	Where	NFK_Usuario = @NFK_Usuario
			And FechaPago Is NUll
	

GO
Drop Procedure [dbo].[SP_Sel_Clases]
Go
Create Procedure [dbo].[SP_Sel_Clases]
As
	Select	NPK_Calendario,
			Format([Date],'dd/MM/yyyy') As Fecha,
			Clase.Clase,
			Año.Año As Anio,
			Semana.NumeroSemana,
			Format(Semana.FechaInicio,'dd/MM/yyyy') As FechaInicio,
			Format(Semana.FechaFin,'dd/MM/yyyy') As FechaFin,
			NPK_CalendarioClase,
			NPK_Instructor,
			Instructor.Nombre + ' ' + Instructor.Apellidos As Instructor,
			Format(Convert(Datetime,HoraInicio),'HH:mm') As HoraInicio,
			Cast(Duracion as Varchar(6)) + ' Min ' + Actividad As Duracion,
			Case
					When DatePart(DW,[Date]) = 1 Then 'Domingo'
					When DatePart(DW,[Date]) = 2 Then 'Lunes'
					When DatePart(DW,[Date]) = 3 Then 'Martes'
					When DatePart(DW,[Date]) = 4 Then 'Miercoles'
					When DatePart(DW,[Date]) = 5 Then 'Jueves'
					When DatePart(DW,[Date]) = 6 Then 'Viernes'
					When DatePart(DW,[Date]) = 7 Then 'Sabado'
			End As DiaSemana,
			Case	When Len(Cast(DatePart(dd,[Date]) As Varchar(2))) = 1 Then '0' + Cast(DatePart(dd,[Date]) As Varchar(2))
					Else Cast(DatePart(dd,[Date]) As Varchar(2))
			End As Dia
	From	Calendario with(nolock)
			Inner Join Año with(nolock) On NFK_Año = NPK_Año
			Inner Join Semana with(nolock) On NFK_Semana = NPK_Semana
			Inner Join Clase with(nolock) On NFK_Clase = NPK_Clase
			Inner Join CalendarioClase with(nolock) On NPK_Calendario = NFK_Calendario
			Inner Join Instructor with(nolock) On CalendarioClase.NFK_Instructor = NPK_Instructor
	Where	[Date] >= Convert(Datetime,Format(GETDATE(),'yyyy-MM-dd'))
	Order By [Date]
GO
--SP_Sel_Clases
Go
Drop VIEW [dbo].[vwClasesDisponiblesWeeks]
go
CREATE VIEW [dbo].[vwClasesDisponiblesWeeks]
AS
	Select	Distinct
			NPK_Calendario,
			Semana.NumeroSemana,
			Case
					When DatePart(DW,[Date]) = 1 Then 'Domingo'
					When DatePart(DW,[Date]) = 2 Then 'Lunes'
					When DatePart(DW,[Date]) = 3 Then 'Martes'
					When DatePart(DW,[Date]) = 4 Then 'Miercoles'
					When DatePart(DW,[Date]) = 5 Then 'Jueves'
					When DatePart(DW,[Date]) = 6 Then 'Viernes'
					When DatePart(DW,[Date]) = 7 Then 'Sabado'
			End As DiaSemana,
			Case	When Len(Cast(DatePart(dd,[Date]) As Varchar(2))) = 1 Then '0' + Cast(DatePart(dd,[Date]) As Varchar(2))
					Else Cast(DatePart(dd,[Date]) As Varchar(2))
			End As Dia,
			Calendario.NFK_Semana,
			Año.Año As Anio,
			NFK_Clase,
			NFK_Instructor
	From	Calendario with(nolock)
			Inner Join Año with(nolock) On NFK_Año = NPK_Año
			Inner Join Semana with(nolock) On NFK_Semana = NPK_Semana
			Inner Join Clase with(nolock) On NFK_Clase = NPK_Clase
			Inner Join CalendarioClase with(nolock) On NPK_Calendario = NFK_Calendario
			Inner Join Instructor with(nolock) On CalendarioClase.NFK_Instructor = NPK_Instructor
	Where	[Date] >= Convert(Datetime,Format(GETDATE(),'yyyy-MM-dd'))

Go
Drop VIEW [dbo].[vwClasesDisponibles]
go
CREATE VIEW [dbo].[vwClasesDisponibles]
AS
	Select	NPK_Calendario As NFK_Calendario,
			[Date],
			Clase.Clase,
			Año.Año As Anio,
			Semana.NumeroSemana,
			Format(Semana.FechaInicio,'dd/MM/yyyy') As FechaInicio,
			Format(Semana.FechaFin,'dd/MM/yyyy') As FechaFin,
			NPK_CalendarioClase,
			NFK_Instructor,
			Instructor.Nombre + ' ' + Instructor.Apellidos As Instructor,
			Format(Convert(Datetime,HoraInicio),'HH:mm') As HoraInicio,
			Cast(Duracion as Varchar(6)) + ' Min ' + Actividad As Duracion,
			Case
					When DatePart(DW,[Date]) = 1 Then 'Domingo'
					When DatePart(DW,[Date]) = 2 Then 'Lunes'
					When DatePart(DW,[Date]) = 3 Then 'Martes'
					When DatePart(DW,[Date]) = 4 Then 'Miercoles'
					When DatePart(DW,[Date]) = 5 Then 'Jueves'
					When DatePart(DW,[Date]) = 6 Then 'Viernes'
					When DatePart(DW,[Date]) = 7 Then 'Sabado'
			End As DiaSemana,
			Case	When Len(Cast(DatePart(dd,[Date]) As Varchar(2))) = 1 Then '0' + Cast(DatePart(dd,[Date]) As Varchar(2))
					Else Cast(DatePart(dd,[Date]) As Varchar(2))
			End As Dia,
			Calendario.NFK_Semana,
			0 As Reservado,
			NFK_Clase,
			Clase.Clase
	From	Calendario with(nolock)
			Inner Join Año with(nolock) On NFK_Año = NPK_Año
			Inner Join Semana with(nolock) On NFK_Semana = NPK_Semana
			Inner Join Clase with(nolock) On NFK_Clase = NPK_Clase
			Inner Join CalendarioClase with(nolock) On NPK_Calendario = NFK_Calendario
			Inner Join Instructor with(nolock) On CalendarioClase.NFK_Instructor = NPK_Instructor
	Where	[Date] + Cast(HoraInicio As Datetime) >= Getdate()

Go
--Select * From vwClasesDisponiblesWeeks
--Go
--Select * From vwClasesDisponibles
Go
Drop Procedure [dbo].[SP_Obtener_Saldo]
go
CREATE Procedure [dbo].[SP_Obtener_Saldo]
	@NFK_Usuario			Int
AS
	Declare @Saldo Int = 0
	Declare	@ReservasHoy Int = 0

	Update	A Set A.Cerrado = 1
	From	Venta A Inner Join Paquete On A.NFK_Paquete = NPK_Paquete 
	Where	A.NFK_Usuario = @NFK_Usuario 
			And FechaPago Is Not Null 
			And A.Cerrado = 0
			And Paquete.CantidadClases <= (Select Count(NPK_ReservaClase) From ReservaClase Where NFK_Venta = NPK_Venta)

	Update	A Set A.Cerrado = 1
	From	Venta A Inner Join Paquete On A.NFK_Paquete = NPK_Paquete 
	Where	A.NFK_Usuario = @NFK_Usuario  
			And A.Cerrado = 0
			And FechaPago Is Not Null
			And DateAdd(MI,1439,Cast(Format(GETDATE(),'yyyy-MM-dd') As Datetime)) > Cast(Format(DateAdd(DD,Paquete.ExpiracionDias,FechaPago),'yyyy-MM-dd') As Datetime)

	Select	@ReservasHoy = Count(NPK_ReservaClase) 
	From	ReservaClase with(nolock)
				Inner Join CalendarioClase with(nolock) On ReservaClase.NFK_CalendarioClase = NPK_CalendarioClase
				Inner Join Calendario with(nolock) On CalendarioClase.NFK_Calendario = NPK_Calendario
	Where	NFK_Usuario = @NFK_Usuario 
			And Convert(Datetime,Format(Getdate(),'yyyy-MM-dd')) = [Date]
			
	
										
	Select	IsNull(Sum(A.SaldoTotal),0) As SaldoTotal,
			IsNull(Sum(A.Saldo),0) As Saldo,			
			@ReservasHoy As ReservadoHoy,
			(Select Count(NPK_ReservaClase) From ReservaClase with(nolock) Where NFK_Usuario = @NFK_Usuario And Asistencia = 1) As TotalAsistencia,
			0 As TotalReservasPerdidos
	From	(
				Select	CantidadClases - (Select Count(NPK_ReservaClase) From ReservaClase with(nolock) Where NFK_Usuario = @NFK_Usuario And NFK_Venta = NPK_Venta) As SaldoTotal,
						CantidadClases - (Select Count(NPK_ReservaClase) From ReservaClase with(nolock) Where NFK_Usuario = @NFK_Usuario And NFK_Venta = NPK_Venta) As Saldo
				From	Venta with(nolock)
							Inner Join Paquete with(nolock) On NFK_Paquete = NPK_Paquete
				Where	NFK_Usuario  = @NFK_Usuario
						And FechaPago Is Not Null
						--And DateDiff(DD,Venta.FechaPago,GETDATE()) <= Paquete.ExpiracionDias
						And Venta.Cerrado = 0
			) A
			
	
Go
Drop Procedure [dbo].[SP_Reserva_Lugar]
go
CREATE Procedure [dbo].[SP_Reserva_Lugar]
	@NFK_CalendarioClase	Int,
	@NFK_Usuario			Int,
	@NFK_Salon				Int,
	@NFK_SalonLugar			Int
AS
	Update	A Set A.Cerrado = 1
	From	Venta A Inner Join Paquete On A.NFK_Paquete = NPK_Paquete 
	Where	A.NFK_Usuario = @NFK_Usuario 
			And FechaPago Is Not Null 
			And A.Cerrado = 0
			And Paquete.CantidadClases <= (Select Count(NPK_ReservaClase) From ReservaClase Where NFK_Venta = NPK_Venta)

	Update	A Set A.Cerrado = 1
	From	Venta A Inner Join Paquete On A.NFK_Paquete = NPK_Paquete 
	Where	A.NFK_Usuario = @NFK_Usuario  
			And A.Cerrado = 0
			And FechaPago Is Not Null
			And DateAdd(MI,1439,Cast(Format(GETDATE(),'yyyy-MM-dd') As Datetime)) > Cast(Format(DateAdd(DD,Paquete.ExpiracionDias,FechaPago),'yyyy-MM-dd') As Datetime)

	Declare @NFK_Venta	Int
	If Exists ( Select NPK_ReservaClase From ReservaClase with(nolock) Where NFK_CalendarioClase = @NFK_CalendarioClase And NFK_Usuario = @NFK_Usuario)
	Begin
		Update	ReservaClase
		Set		NFK_Salon = @NFK_Salon, NFK_SalonLugar = @NFK_SalonLugar, Asistencia = 0
		Where	NFK_CalendarioClase = @NFK_CalendarioClase And NFK_Usuario = @NFK_Usuario
	End
	Else
	Begin
		Select	Top 1 @NFK_Venta = NPK_Venta
		From	Venta Inner Join Paquete On NFK_Paquete = NPK_Paquete 
		Where	NFK_Usuario = 6  
				And FechaPago Is Not Null
				And Cerrado = 0
				And Paquete.CantidadClases > (Select Count(NPK_ReservaClase) From ReservaClase Where NFK_Venta = NPK_Venta)
		Order by NPK_Venta
		if (@NFK_Venta Is Not NUll)
		Begin
			Insert Into ReservaClase (NFK_CalendarioClase, NFK_Usuario, NFK_Salon, NFK_SalonLugar, Estatus, Activo, CreadoPor, FechaCreacion, Asistencia,NFK_Venta)
			Values (@NFK_CalendarioClase, @NFK_Usuario, @NFK_Salon, @NFK_SalonLugar, 1, 1, @NFK_Usuario, Getdate(), 0, @NFK_Venta)
		End
	End
Go
Drop Procedure [dbo].[SP_Cancelar_Reserva_Lugar]
go
CREATE Procedure [dbo].[SP_Cancelar_Reserva_Lugar]
	@NPK_ReservaClase	Int,
	@NFK_Usuario		Int
AS
	Delete ReservaClase Where NPK_ReservaClase = @NPK_ReservaClase And NFK_Usuario = @NFK_Usuario
	Update	A Set A.Cerrado = 1
	From	Venta A Inner Join Paquete On A.NFK_Paquete = NPK_Paquete 
	Where	A.NFK_Usuario = @NFK_Usuario 
			And FechaPago Is Not Null 
			And A.Cerrado = 0
			And Paquete.CantidadClases <= (Select Count(NPK_ReservaClase) From ReservaClase Where NFK_Venta = NPK_Venta)

	Update	A Set A.Cerrado = 1
	From	Venta A Inner Join Paquete On A.NFK_Paquete = NPK_Paquete 
	Where	A.NFK_Usuario = @NFK_Usuario  
			And A.Cerrado = 0
			And FechaPago Is Not Null
			And DateAdd(MI,1439,Cast(Format(GETDATE(),'yyyy-MM-dd') As Datetime)) > Cast(Format(DateAdd(DD,Paquete.ExpiracionDias,FechaPago),'yyyy-MM-dd') As Datetime)
	
Go
Drop Procedure [dbo].[SP_Mis_Reservas]
go
CREATE Procedure [dbo].[SP_Mis_Reservas]
	@NFK_Usuario			Int
AS
	--NFK_Semana/:NFK_Clase/:Dia/:NPK_CalendarioClase
	Select	ReservaClase.NPK_ReservaClase,
			CalendarioClase.NPK_CalendarioClase,
			CalendarioClase.NFK_Instructor,
			Instructor.Nombre + ' ' + Instructor.Apellidos As Instructor,
			Case	When DatePart(DW,[Date]) = 1 Then 'Domingo'
					When DatePart(DW,[Date]) = 2 Then 'Lunes'
					When DatePart(DW,[Date]) = 3 Then 'Martes'
					When DatePart(DW,[Date]) = 4 Then 'Miercoles'
					When DatePart(DW,[Date]) = 5 Then 'Jueves'
					When DatePart(DW,[Date]) = 6 Then 'Viernes'
					When DatePart(DW,[Date]) = 7 Then 'Sabado'
			End + ', ' +  
			Case	When Len(Cast(DatePart(dd,[Date]) As Varchar(2))) = 1 Then '0' + Cast(DatePart(dd,[Date]) As Varchar(2))
					Else Cast(DatePart(dd,[Date]) As Varchar(2))
			End + ' de ' +
			Case	When DatePart(MM,[Date]) = 1 Then 'Enero'
					When DatePart(MM,[Date]) = 2 Then 'Febrero'
					When DatePart(MM,[Date]) = 3 Then 'Marzo'
					When DatePart(MM,[Date]) = 4 Then 'Abril'
					When DatePart(MM,[Date]) = 5 Then 'Mayo'
					When DatePart(MM,[Date]) = 6 Then 'Junio'
					When DatePart(MM,[Date]) = 7 Then 'Julio'
					When DatePart(MM,[Date]) = 8 Then 'Agosto'
					When DatePart(MM,[Date]) = 9 Then 'Septiembre'
					When DatePart(MM,[Date]) = 10 Then 'Octubre'
					When DatePart(MM,[Date]) = 11 Then 'Noviembre'
					When DatePart(MM,[Date]) = 12 Then 'Diciembre'
			End + ' ' + Format(Convert(Datetime,HoraInicio),'HH:mm tt') 
			As Fecha,
			Clase.Clase + ' ' + Cast(Duracion As Varchar(50)) + ' Min' As Clase,
			Case When DateAdd(HH,-6,[Date] + Cast(HoraInicio As Datetime)) >= Getdate() Then 1
				Else 0
			End As PuedeCancelar,
			Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(Replace(
			Replace(Format(DateAdd(HH,-6,[Date] + Cast(HoraInicio As Datetime)),'dd MMM yy HH:mm ttt'),'Jan','Enero'),
				'Feb','Febrero'),'Mar','Marzo'),'Apr','Abril'),'May','Mayo'),'Jun','Junio'),'Jul','Julio'),'Aug','Agosto'),
				'Sep','Septiembre'),'Oct','Octubre'),'Nov','Noviembre'),'Dic','Diciembre')
			As HoraParaCancelar,
			[Date] + Cast(HoraInicio As Datetime) As FechaClase,
			Case	When NFK_Clase = 1 Then 'orange' 
					When NFK_Clase = 2 Then 'aqua'
			End Color,
			SalonLugar,
			IsNull(Asistencia,0) As Asistencia,
			Calendario.NFK_Semana,NFK_Clase,
			Case	When Len(Cast(DatePart(dd,[Date]) As Varchar(2))) = 1 Then '0' + Cast(DatePart(dd,[Date]) As Varchar(2))
					Else Cast(DatePart(dd,[Date]) As Varchar(2))
			End As Dia
	From	ReservaClase with(nolock)
				Inner Join CalendarioClase with(nolock) On ReservaClase.NFK_CalendarioClase = NPK_CalendarioClase
				Inner Join Calendario with(nolock) On CalendarioClase.NFK_Calendario = NPK_Calendario
				Inner Join Instructor with(nolock) On CalendarioClase.NFK_Instructor = NPK_Instructor
				Inner Join Clase with(nolock) On Calendario.NFK_Clase = NPK_Clase
				Inner Join SalonLugar with(nolock) On ReservaClase.NFK_SalonLugar = NPK_SalonLugar
			 
	Where	NFK_Usuario  = @NFK_Usuario
			And [Date] + Cast(HoraInicio As Datetime) >= Getdate()
			And Asistencia = 0
	Order by [Date]

Go
Drop Procedure [dbo].[SP_Mi_Historia]
go
CREATE Procedure [dbo].[SP_Mi_Historia]
	@NFK_Usuario			Int
AS
	Select	ReservaClase.NPK_ReservaClase,
			CalendarioClase.NPK_CalendarioClase,
			CalendarioClase.NFK_Instructor,
			Instructor.Nombre + ' ' + Instructor.Apellidos As Instructor,
			Case	When DatePart(DW,[Date]) = 1 Then 'Domingo'
					When DatePart(DW,[Date]) = 2 Then 'Lunes'
					When DatePart(DW,[Date]) = 3 Then 'Martes'
					When DatePart(DW,[Date]) = 4 Then 'Miercoles'
					When DatePart(DW,[Date]) = 5 Then 'Jueves'
					When DatePart(DW,[Date]) = 6 Then 'Viernes'
					When DatePart(DW,[Date]) = 7 Then 'Sabado'
			End + ', ' +  
			Case	When Len(Cast(DatePart(dd,[Date]) As Varchar(2))) = 1 Then '0' + Cast(DatePart(dd,[Date]) As Varchar(2))
					Else Cast(DatePart(dd,[Date]) As Varchar(2))
			End + ' de ' +
			Case	When DatePart(MM,[Date]) = 1 Then 'Enero'
					When DatePart(MM,[Date]) = 2 Then 'Febrero'
					When DatePart(MM,[Date]) = 3 Then 'Marzo'
					When DatePart(MM,[Date]) = 4 Then 'Abril'
					When DatePart(MM,[Date]) = 5 Then 'Mayo'
					When DatePart(MM,[Date]) = 6 Then 'Junio'
					When DatePart(MM,[Date]) = 7 Then 'Julio'
					When DatePart(MM,[Date]) = 8 Then 'Agosto'
					When DatePart(MM,[Date]) = 9 Then 'Septiembre'
					When DatePart(MM,[Date]) = 10 Then 'Octubre'
					When DatePart(MM,[Date]) = 11 Then 'Noviembre'
					When DatePart(MM,[Date]) = 12 Then 'Diciembre'
			End + ' ' + Format(Convert(Datetime,HoraInicio),'HH:mm tt') 
			As Fecha,
			Clase.Clase + ' ' + Cast(Duracion As Varchar(50)) + ' Min' As Clase,
			0 As PuedeCancelar,
			'' As HoraParaCancelar,
			[Date] + Cast(HoraInicio As Datetime) As FechaClase,
			Case	When NFK_Clase = 1 Then 'orange' 
					When NFK_Clase = 2 Then 'aqua'
			End Color,
			SalonLugar,
			IsNull(Asistencia,0) As Asistencia,
			Calendario.NFK_Semana,NFK_Clase,
			Case	When Len(Cast(DatePart(dd,[Date]) As Varchar(2))) = 1 Then '0' + Cast(DatePart(dd,[Date]) As Varchar(2))
					Else Cast(DatePart(dd,[Date]) As Varchar(2))
			End As Dia
	From	ReservaClase with(nolock)
				Inner Join CalendarioClase with(nolock) On ReservaClase.NFK_CalendarioClase = NPK_CalendarioClase
				Inner Join Calendario with(nolock) On CalendarioClase.NFK_Calendario = NPK_Calendario
				Inner Join Instructor with(nolock) On CalendarioClase.NFK_Instructor = NPK_Instructor
				Inner Join Clase with(nolock) On Calendario.NFK_Clase = NPK_Clase
				Inner Join SalonLugar with(nolock) On ReservaClase.NFK_SalonLugar = NPK_SalonLugar
			 
	Where	NFK_Usuario  = @NFK_Usuario
			And [Date] + Cast(HoraInicio As Datetime) < Getdate()
	Order by [Date]

Go
Drop Procedure [dbo].[SP_Estatus_Salon_PorDia_Header]
go
CREATE Procedure [dbo].[SP_Estatus_Salon_PorDia_Header]
	@NFK_Clase				Int,
	@NFK_Semana				Int,
	@Dia					Int,
	@NPK_CalendarioClase	Int,
	@NFK_Usuario			Int
AS
	Declare @TengoClase Int
	Select @TengoClase = Count(NPK_ReservaClase) From ReservaClase Where NFK_CalendarioClase = @NPK_CalendarioClase And NFK_Usuario = @NFK_Usuario

	Select	CalendarioClase.NPK_CalendarioClase,
			CalendarioClase.NFK_Instructor,
			Instructor.Nombre + ' ' + Instructor.Apellidos As Instructor,
			Case	When DatePart(DW,[Date]) = 1 Then 'Domingo'
					When DatePart(DW,[Date]) = 2 Then 'Lunes'
					When DatePart(DW,[Date]) = 3 Then 'Martes'
					When DatePart(DW,[Date]) = 4 Then 'Miercoles'
					When DatePart(DW,[Date]) = 5 Then 'Jueves'
					When DatePart(DW,[Date]) = 6 Then 'Viernes'
					When DatePart(DW,[Date]) = 7 Then 'Sabado'
			End + ', ' +  
			Case	When Len(Cast(DatePart(dd,[Date]) As Varchar(2))) = 1 Then '0' + Cast(DatePart(dd,[Date]) As Varchar(2))
					Else Cast(DatePart(dd,[Date]) As Varchar(2))
			End + ' de ' +
			Case	When DatePart(MM,[Date]) = 1 Then 'Enero'
					When DatePart(MM,[Date]) = 2 Then 'Febrero'
					When DatePart(MM,[Date]) = 3 Then 'Marzo'
					When DatePart(MM,[Date]) = 4 Then 'Abril'
					When DatePart(MM,[Date]) = 5 Then 'Mayo'
					When DatePart(MM,[Date]) = 6 Then 'Junio'
					When DatePart(MM,[Date]) = 7 Then 'Julio'
					When DatePart(MM,[Date]) = 8 Then 'Agosto'
					When DatePart(MM,[Date]) = 9 Then 'Septiembre'
					When DatePart(MM,[Date]) = 10 Then 'Octubre'
					When DatePart(MM,[Date]) = 11 Then 'Noviembre'
					When DatePart(MM,[Date]) = 12 Then 'Diciembre'
			End + ' ' + Format(Convert(Datetime,HoraInicio),'HH:mm tt') 
			As Fecha,
			Clase.Clase + ' ' + Cast(Duracion As Varchar(50)) + ' Min' As Clase,
			Instructor.Fotografia,
			@TengoClase As TengoClase
	From	CalendarioClase with(nolock)
			Inner Join Calendario with(nolock) On CalendarioClase.NFK_Calendario = NPK_Calendario
			Inner Join Instructor with(nolock) On CalendarioClase.NFK_Instructor = NPK_Instructor
			Inner Join Clase with(nolock) On Calendario.NFK_Clase = NPK_Clase
			 
	Where	CalendarioClase.NPK_CalendarioClase = @NPK_CalendarioClase

Go
Drop Procedure [dbo].[SP_Estatus_Salon_PorDia]
go
CREATE Procedure [dbo].[SP_Estatus_Salon_PorDia]
	@NFK_Clase				Int,
	@NFK_Semana				Int,
	@Dia					Int,
	@NPK_CalendarioClase	Int
AS
	Declare @SalonOcupacion Table (
		NPK_Salon		Int,
		Salon			Varchar(100),
		NPK_SalonLugar	Int,
		LugarSalon		int,
		NPK_ReservaClase	Int,
		NPK_CalendarioClase	Int,
		Estatus				Int,
		NFK_Usuario			Int
	)
	Insert Into @SalonOcupacion (NPK_Salon,Salon,NPK_SalonLugar,LugarSalon,NPK_ReservaClase,NPK_CalendarioClase,Estatus,NFK_Usuario) 
	Select	NPK_Salon,
			Salon.Salon,
			NPK_SalonLugar,
			SalonLugar.SalonLugar,
			Null,
			Null,
			0,
			Null
	From	Salon with(nolock)
			Inner Join SalonLugar with(nolock) On NFK_Salon = NPK_Salon	
	Where	Salon.NFK_Clase = @NFK_Clase

	Update	A
			Set	A.NPK_CalendarioClase = B.NPK_CalendarioClase,
				A.NPK_ReservaClase = B.NPK_ReservaClase,
				A.Estatus = 1,
				A.NFK_Usuario = B.NFK_Usuario
	From	@SalonOcupacion A
				Inner Join (
								Select	CalendarioClase.NPK_CalendarioClase,
										ReservaClase.NPK_ReservaClase,
										NFK_Salon,
										NFK_SalonLugar,
										ReservaClase.NFK_Usuario			
								From	CalendarioClase with(nolock)
										Inner Join Calendario with(nolock) On CalendarioClase.NFK_Calendario = NPK_Calendario
										Inner Join Instructor with(nolock) On CalendarioClase.NFK_Instructor = NPK_Instructor
										Inner Join Clase with(nolock) On Calendario.NFK_Clase = NPK_Clase
										Inner Join ReservaClase	with(nolock) On NPK_CalendarioClase = ReservaClase.NFK_CalendarioClase 
								Where	CalendarioClase.NPK_CalendarioClase = @NPK_CalendarioClase
							) B On A.NPK_Salon = B.NFK_Salon And A.NPK_SalonLugar = NFK_SalonLugar

	Select * From @SalonOcupacion Order by LugarSalon

Go
--SP_Estatus_Salon_PorDia_Header 1,1,12,2,4
--Go
--SP_Estatus_Salon_PorDia 1,1,12,2
-- Go

--Select * From vwUsuario with(nolock) Where Activo = 1 AND Usuario = 'pruebas1'
--Select	a.NPK_Calendario,a.NumeroSemana,a.DiaSemana,a.Dia,
--		                                b.NFK_Calendario,
--		                                'a' As Fecha,
--		                                b.Clase,
--		                                b.Anio,
--		                                b.FechaInicio,
--		                                b.FechaFin,
--		                                b.NPK_CalendarioClase,
--		                                b.NFK_Instructor,
--		                                b.Instructor,
--		                                b.HoraInicio,
--		                                b.Duracion
--                                From	vwClasesDisponiblesWeeks a WITH (NOLOCK)
--			                                Inner Join vwClasesDisponibles b WITH (NOLOCK) On a.NPK_Calendario = b.NFK_Calendario And a.NumeroSemana = b.NumeroSemana And a.Dia = b.Dia
--                                Order by [Date]

--	Select	a.NumeroSemana,a.DiaSemana,a.Dia
--                                From	vwClasesDisponiblesWeeks a WITH (NOLOCK)
--                                Order by a.NumeroSemana
--	select Distinct b.DiaSemana,b.Dia from vwClasesDisponibles b WITH (NOLOCK) Where b.NFK_Semana = 1 Order by b.Dia

--SP_Obtener_Saldo 6
--Go
--SP_Mis_Reservas 6
--Go
--SP_Mi_Historia 6
--Select * From vwUsuario with(nolock)
Select * From Instructor with(nolock)
Select	Distinct a.NumeroSemana,a.NFK_Semana, a.Anio, a.NFK_Clase From vwClasesDisponiblesWeeks a WITH (NOLOCK) Where a.NFK_Instructor = 7 Order by a.Anio,a.NumeroSemana
select Distinct b.DiaSemana,b.Dia from vwClasesDisponibles b WITH (NOLOCK) Where b.NFK_Semana = 1 And b.NFK_Instructor = 7 Order by b.Dia
Select	b.DiaSemana,b.Dia,b.Clase,b.Anio,b.FechaInicio,b.FechaFin,b.NPK_CalendarioClase,b.NFK_Instructor,b.Instructor,
		                                b.HoraInicio,b.Duracion,b.Reservado
                                From	vwClasesDisponibles b WITH (NOLOCK) 
                                Where   b.NFK_Semana = 1
                                        And b.Dia = 16
                                        And b.NFK_Instructor = 7
                                Order by [Date]