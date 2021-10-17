import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mln-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() message: {
    matIcon: string;
    textStart: string;
    textEnd: string;
    link: { text: string; href: string; target: string; };
  };
  constructor() {}

  ngOnInit(): void {}
}
