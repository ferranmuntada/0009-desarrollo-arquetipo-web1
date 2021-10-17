import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'mln-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() classButton: string;
  @Input() icon: string;
  @Input() isSquare = false;
  @Input() isDisabled = false;
  @Input() type!: string;
  @Input() callback!: Subject<{
    element: EventTarget;
    text: string;
    class: string;
  }>;
  @Input() outline: string;

  constructor() {}

  ngOnInit(): void {}

  public clickButton(event: Event): void {
    if (this.callback) {
      this.callback.next({
        element: event && event.target,
        text: this.text,
        class: this.classButton,
      });
    }
  }
}
