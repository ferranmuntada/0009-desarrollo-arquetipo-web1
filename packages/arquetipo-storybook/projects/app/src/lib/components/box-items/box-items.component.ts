import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mln-box-items',
  templateUrl: './box-items.component.html',
  styleUrls: ['./box-items.component.scss'],
})
export class BoxItemsComponent implements OnInit {
  @Output() actionEdit: EventEmitter<{ event: Event }> = new EventEmitter<{ event: Event }>();
  @Input() public settings: {
    title: string;
    subTitle: string;
    amountDecimal: string;
    footerText: string;
    listItems: string[];
  };

  constructor() {}

  ngOnInit(): void {}

  public editFilterAction(event: Event): void {
    this.actionEdit.emit({ event });
  }
}
