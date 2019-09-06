import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { InstructorRedSocialCreateUpdateComponent } from './InstructorRedSocial-create-update/InstructorRedSocial-create-update.component';
import { CatalogsService,InstructorRedSocialForm, InstructorRedSocialView } from "../../services/catalogs.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'fury-InstructorRedSocial',
  templateUrl: './InstructorRedSocial.component.html',
  styleUrls: ['./InstructorRedSocial.component.scss']
})
export class InstructorRedSocialComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<InstructorRedSocialView[]> = new ReplaySubject<InstructorRedSocialView[]>(1);
  data$: Observable<InstructorRedSocialView[]> = this.subject$.asObservable();
  InstructorRedSocials = [];
	nfk_instructor = "";
	instructor = "";
  @Input()
  columns: ListColumn[] = [
		{ name: '#InstructorRedSocial', property:' NPK_InstructorRedSocial', visible: false, isModelProperty: true },
		{ name: 'NFK_Instructor', property: 'NFK_Instructor', visible: false, isModelProperty: true },
		/* { name: 'imagen', property: 'imagen', visible: true }, */
		{ name: 'Instructor', property: 'Instructor', visible: false, isModelProperty: true },
		{ name: 'Tipo de Red Social', property: 'RedSocialDesc', visible: true, isModelProperty: true },
		{ name: 'Red Social', property: 'RedSocial', visible: true, isModelProperty: true },
		

	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<InstructorRedSocialView> | null;

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
	createInstructorRedSocial() {
		this.dialog.open(InstructorRedSocialCreateUpdateComponent,{data: {NFK_Instructor: this.nfk_instructor},height: "500px",width: "800px",}).afterClosed().subscribe((InstructorRedSocial: InstructorRedSocialForm) => {
			if (InstructorRedSocial) {
				this.fillGrid(this.nfk_instructor);
			}
		});
	}
	updateInstructorRedSocial(InstructorRedSocial) {
		this.dialog.open(InstructorRedSocialCreateUpdateComponent, {
			data: InstructorRedSocial,height: "500px",width: "800px",}).afterClosed().subscribe((InstructorRedSocial) => {
			if (InstructorRedSocial) {
				this.fillGrid(this.nfk_instructor);
			}
		});
	}
	deleteInstructorRedSocial(InstructorRedSocial,activo) {
		this.catalog.letEliminarInstructorRedSocial(InstructorRedSocial.NPK_InstructorRedSocial).subscribe(InstructorRedSocials =>{
			this.fillGrid(this.nfk_instructor);
		});
	}
	fillGrid(pNFK_Instructor){
		this.catalog.getInstructorRedSocials(pNFK_Instructor).subscribe(InstructorRedSociallist =>{
			this.InstructorRedSocials = InstructorRedSociallist;
			this.subject$.next(InstructorRedSociallist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((InstructorRedSocials) => {
	  this.InstructorRedSocials = InstructorRedSocials;
	  this.dataSource.data = InstructorRedSocials;
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
