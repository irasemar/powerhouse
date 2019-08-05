import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { RedSocialCreateUpdateComponent } from './RedSocial-create-update/RedSocial-create-update.component';
import { CatalogsService,RedSocialForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-RedSocial',
  templateUrl: './RedSocial.component.html',
  styleUrls: ['./RedSocial.component.scss']
})
export class RedSocialComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<RedSocialForm[]> = new ReplaySubject<RedSocialForm[]>(1);
  data$: Observable<RedSocialForm[]> = this.subject$.asObservable();
  redsocials = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#Red Social', property:' NPK_RedSocial', visible: false, isModelProperty: true },
		{ name: 'Red Social', property: 'RedSocial', visible: true, isModelProperty: true },
		{ name: 'Red Social Imagen', property: 'RedSocialImagen', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<RedSocialForm> | null;

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
	createRedSocial() {
		this.dialog.open(RedSocialCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((redsocial: RedSocialForm) => {
			if (redsocial) {
				this.fillGrid();
			}
		});
	}
	updateRedSocial(redsocial) {
		this.dialog.open(RedSocialCreateUpdateComponent, {
			data: redsocial,height: "500px",width: "800px",}).afterClosed().subscribe((redsocial) => {
			if (redsocial) {
				this.fillGrid();
			}
		});
	}
	activateRedSocial(redsocial,activo) {
		this.catalog.letActivarRedSocial(redsocial.NPK_RedSocial,activo).subscribe(redsocials =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getRedSocials(2).subscribe(redsociallist =>{
			this.redsocials = redsociallist;
			this.subject$.next(redsociallist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((redsocials) => {
	  this.redsocials = redsocials;
	  this.dataSource.data = redsocials;
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
