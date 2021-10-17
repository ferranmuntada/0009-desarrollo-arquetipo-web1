import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'mln-radio-button-list',
  templateUrl: './radio-button-list.component.html',
  styleUrls: ['./radio-button-list.component.scss'],
})
export class RadioButtonListComponent implements OnInit {
  @Output() actionRadioButton: EventEmitter<any> = new EventEmitter<any>();
  @Input() textLabel: string;
  @Input() list: { text: string; checked: boolean }[];
  @Input() vertical: boolean;

  constructor() {}

  ngOnInit(): void {}

  public changeDetectionRadio(event: MatRadioChange): void {
    const text = event?.source?._elementRef?.nativeElement?.textContent.trim();
    const element = event?.source?._elementRef?.nativeElement;
    const value = event?.value;
    this.actionRadioButton.emit({ text, element, value });
  }
}
