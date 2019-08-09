import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { InstructorMusicaCreateUpdateComponent } from './InstructorMusica-create-update/InstructorMusica-create-update.component';
import { CatalogsService,InstructorMusicaForm, InstructorMusicaView } from "../../services/catalogs.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'fury-InstructorMusica',
  templateUrl: './InstructorMusica.component.html',
  styleUrls: ['./InstructorMusica.component.scss']
})
export class InstructorMusicaComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<InstructorMusicaView[]> = new ReplaySubject<InstructorMusicaView[]>(1);
  data$: Observable<InstructorMusicaView[]> = this.subject$.asObservable();
  InstructorMusicas = [];
	nfk_instructor = "";
	instructor = "";
  @Input()
  columns: ListColumn[] = [
		{ name: '#InstructorMusica', property:' NPK_InstructorMusica', visible: false, isModelProperty: true },
		{ name: 'NFK_Instructor', property: 'NFK_Instructor', visible: false, isModelProperty: true },
		{ name: 'imagen', property: 'imagen', visible: true },
		{ name: 'Instructor', property: 'Instructor', visible: false, isModelProperty: true },
		{ name: 'Musica', property: 'Musica', visible: true, isModelProperty: true },
		

	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<InstructorMusicaView> | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private catalog: CatalogsService,private route: ActivatedRoute,private router: Router) {
}
	get visibleColumns() {
		return this.columns.filter(column => column.visible).map(column => column.property);
	}  
	ngOnInit() {  
		this.nfk_instructor = this.route.snapshot.paramMap.get("npk_instructor");
		console.log(this.nfk_instructor);
		this.instructor = this.route.snapshot.paramMap.get("instructor");
		console.log(this.instructor); 
		this.fillGrid(this.nfk_instructor);
	}  
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	createInstructorMusica() {
		this.dialog.open(InstructorMusicaCreateUpdateComponent,{data: {NFK_Instructor: this.nfk_instructor},height: "500px",width: "800px",}).afterClosed().subscribe((InstructorMusica: InstructorMusicaForm) => {
			if (InstructorMusica) {
				this.fillGrid(this.nfk_instructor);
			}
		});
	}
	updateInstructorMusica(InstructorMusica) {
		this.dialog.open(InstructorMusicaCreateUpdateComponent, {
			data: InstructorMusica,height: "500px",width: "800px",}).afterClosed().subscribe((InstructorMusica) => {
			if (InstructorMusica) {
				this.fillGrid(this.nfk_instructor);
			}
		});
	}
	deleteInstructorMusica(InstructorMusica) {
		this.catalog.letEliminarInstructorMusica(InstructorMusica.NPK_InstructorMusica).subscribe(InstructorMusicas =>{
			this.fillGrid(this.nfk_instructor);
		});
	}
	fillGrid(pNFK_Instructor){
		this.catalog.getInstructorMusicas(pNFK_Instructor).subscribe(InstructorMusicalist =>{
			this.InstructorMusicas = InstructorMusicalist;
			this.subject$.next(InstructorMusicalist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((InstructorMusicas) => {
	  this.InstructorMusicas = InstructorMusicas;
	  this.dataSource.data = InstructorMusicas;
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
