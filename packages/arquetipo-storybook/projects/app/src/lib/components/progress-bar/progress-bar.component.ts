import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mln-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() icon: string;
  @Input() deadline: string;
  @Input() time: string;
  @Input() progressInfo: Array<{ amount: string; text: string }>;

  constructor() {}

  ngOnInit(): void {}
}
