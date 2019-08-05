import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { InstructorCreateUpdateComponent } from './Instructor-create-update/Instructor-create-update.component';
import { CatalogsService,InstructorForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-Instructor',
  templateUrl: './Instructor.component.html',
  styleUrls: ['./Instructor.component.scss']
})
export class InstructorComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<InstructorForm[]> = new ReplaySubject<InstructorForm[]>(1);
  data$: Observable<InstructorForm[]> = this.subject$.asObservable();
  instructors = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Instructor', property:' NPK_Instructor', visible: false, isModelProperty: true },
		{ name: 'Nombre', property: 'Nombre', visible: true, isModelProperty: true },
		{ name: 'Apellidos', property: 'Apellidos', visible: true, isModelProperty: true },
		{ name: 'Paso Favorito de Bici', property: 'PasoFavoritoBici', visible: true, isModelProperty: true },
		{ name: 'Paso Favorito de Hiit', property: 'PasoFavoritoHiit', visible: true, isModelProperty: true },
		{ name: 'Artista Favorito', property: 'ArtistaFavorito', visible: true, isModelProperty: true },
		{ name: 'Animal Favorito', property: 'AnimalFavorito', visible: true, isModelProperty: true },
		{ name: 'Pelicula Favorito', property: 'PeliculaFavorito', visible: true, isModelProperty: true },
		{ name: 'Frase', property: 'Frase', visible: true, isModelProperty: true },
		{ name: 'Descripcion de Su Clase', property: 'DescripcionSuClase', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<InstructorForm> | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private catalog: CatalogsService) {
}
	get visibleColumns() {
		return this.columns.filter(column => column.visible).map(column => column.property);
	}  
	ngOnInit() {   
		this.fillGrid();
	}  
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	createInstructor() {
		this.dialog.open(InstructorCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((instructor: InstructorForm) => {
			if (instructor) {
				this.fillGrid();
			}
		});
	}
	updateInstructor(instructor) {
		this.dialog.open(InstructorCreateUpdateComponent, {
			data: instructor,height: "500px",width: "800px",}).afterClosed().subscribe((instructor) => {
			if (instructor) {
				this.fillGrid();
			}
		});
	}
	activateInstructor(instructor,activo) {
		this.catalog.letActivarInstructor(instructor.NPK_Instructor,activo).subscribe(instructors =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getInstructors(2).subscribe(instructorlist =>{
			this.instructors = instructorlist;
			this.subject$.next(instructorlist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((instructors) => {
	  this.instructors = instructors;
	  this.dataSource.data = instructors;
	});
  }

	onFilterChange(value) {
		if (!this.dataSource) {
			return;
		}
		value = value.trim();
		value = value.toLowerCase();
		this.dataSource.filter = value;
	}

  ngOnDestroy() {
  }
}
