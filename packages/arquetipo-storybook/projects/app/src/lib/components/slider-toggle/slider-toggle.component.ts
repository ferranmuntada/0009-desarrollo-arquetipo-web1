import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mln-slider-toggle',
  templateUrl: './slider-toggle.component.html',
  styleUrls: ['./slider-toggle.component.scss'],
})
export class SliderToggleComponent implements OnInit {
  @Output() changeToggleAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() statusText: { first: string; second: string; } = { first: '', second: '' };
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}

  public changeToggle(status: boolean): void {
    this.changeToggleAction.emit(status);
  }
}
