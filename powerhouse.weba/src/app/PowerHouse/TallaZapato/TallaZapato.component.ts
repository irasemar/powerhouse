import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../shared/list/list-column.model';
import { TallaZapatoCreateUpdateComponent } from './TallaZapato-create-update/TallaZapato-create-update.component';
import { CatalogsService,TallaZapatoForm } from "../../services/catalogs.service";

@Component({
  selector: 'fury-TallaZapato',
  templateUrl: './TallaZapato.component.html',
  styleUrls: ['./TallaZapato.component.scss']
})
export class TallaZapatoComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<TallaZapatoForm[]> = new ReplaySubject<TallaZapatoForm[]>(1);
  data$: Observable<TallaZapatoForm[]> = this.subject$.asObservable();
  tallazapatos = [];

  @Input()
  columns: ListColumn[] = [
		{ name: '#TallaZapato', property:' NPK_TallaZapato', visible: false, isModelProperty: true },
		{ name: 'TallaZapato', property: 'TallaZapato', visible: true, isModelProperty: true },
		{ name: 'Activo', property: 'Activo', visible: true, isModelProperty: true },
	{ name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<TallaZapatoForm> | null;

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
	createTallaZapato() {
		this.dialog.open(TallaZapatoCreateUpdateComponent,{height: "500px",width: "800px",}).afterClosed().subscribe((tallazapato: TallaZapatoForm) => {
			if (tallazapato) {
				this.fillGrid();
			}
		});
	}
	updateTallaZapato(tallazapato) {
		this.dialog.open(TallaZapatoCreateUpdateComponent, {
			data: tallazapato,height: "500px",width: "800px",}).afterClosed().subscribe((tallazapato) => {
			if (tallazapato) {
				this.fillGrid();
			}
		});
	}
	activateTallaZapato(tallazapato,activo) {
		this.catalog.letActivarTallaZapato(tallazapato.NPK_TallaZapato,activo).subscribe(tallazapatos =>{
			this.fillGrid();
		});
	}
	fillGrid(){
		this.catalog.getTallaZapatos(2).subscribe(tallazapatolist =>{
			this.tallazapatos = tallazapatolist;
			this.subject$.next(tallazapatolist);
	})

	this.dataSource = new MatTableDataSource();

	this.data$.pipe(
	  filter(Boolean)
	).subscribe((tallazapatos) => {
	  this.tallazapatos = tallazapatos;
	  this.dataSource.data = tallazapatos;
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
