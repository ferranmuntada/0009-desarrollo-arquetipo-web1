import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'mln-button-big',
  templateUrl: './button-big.component.html',
  styleUrls: ['./button-big.component.scss'],
})
export class ButtonBigComponent implements OnInit {
  @Input() active = true;
  // @Input() classIcon = '/assets/img/actividad-profesional.png';
  @Input() text: string;
  @Input() icon = 'work_outline';
  @Input() callback: Subject<any>;

  constructor() { }

  ngOnInit(): void {}

  public onClick(event: Event): void {
    if (!this.active) {
      return ;
    }
    this.callback.next({
      event,
      text: this.text,
    });
  }
}
