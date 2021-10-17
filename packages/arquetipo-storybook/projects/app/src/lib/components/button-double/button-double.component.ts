import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mln-button-double',
  templateUrl: './button-double.component.html',
  styleUrls: ['./button-double.component.scss'],
})
export class ButtonDoubleComponent implements OnInit {
  @Input() active: boolean;
  @Input() classIcon: string;
  @Input() rightText: string;
  @Input() leftText: string;
  @Output() actionBigButton: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  public onClick(event: Event): void {
    this.actionBigButton.emit({ event });
  }
}
