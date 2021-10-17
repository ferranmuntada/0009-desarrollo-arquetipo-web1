import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActionsMenuInterface } from '../../shared/interfaces/data-table/actions.interface';
import { MatPaginator } from '@angular/material/paginator';
import { DataColumns } from '../../shared/interfaces/data-columns.interface';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SelectComponent } from '../select';
import { ButtonComponent } from '../button';
import { SliderToggleComponent } from '../slider-toggle';
@Component({
  selector: 'mln-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      /* transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ), */
    ]),
  ],
})
export class DatatableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) public paginator: MatPaginator;
  @ViewChild(SelectComponent, { static: false })
  public customSelect: SelectComponent;
  @ViewChild(ButtonComponent, { static: false })
  public customButton: ButtonComponent;
  @ViewChild(SliderToggleComponent, { static: false })
  public customToggle: SliderToggleComponent;

  @Output() actionChangeOptions: EventEmitter<{
    datasource: any;
    value: ActionsMenuInterface;
  }> = new EventEmitter<{ datasource: any; value: ActionsMenuInterface }>();

  @Input() public set datacolumns(datacolumns: DataColumns[]) {
    this.datacolumns$ = datacolumns;
    this.datasourcesColumns =
      datacolumns && datacolumns.map((column) => column.key);
  }
  public get datacolumns(): DataColumns[] {
    return this.datacolumns$;
  }

  @Input() public set datasources(datasources: any[]) {
    this.isAccordion =
      datasources && datasources.some((datasource) => datasource.accordion);
    this.dataSources = new MatTableDataSource(datasources);
  }
  @Input() paginatorSettings!: {
    items: number;
    perPage: number[];
  };

  public datasourcesColumns = [];
  private datacolumns$: DataColumns[];
  public currency: Intl.NumberFormat = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });
  public isAccordion: boolean;
  public dataSources: MatTableDataSource<any>;
  public expandedElement: any | null;
  public iconToggle: boolean;

  constructor() {}

  ngOnInit(): void {}

  public ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSources.paginator = this.paginator;
    }
  }

  public onActionChange(datasource: any, value: ActionsMenuInterface): void {
    this.actionChangeOptions.emit({ datasource, value });
  }
}
