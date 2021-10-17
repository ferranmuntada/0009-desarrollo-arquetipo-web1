import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mln-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  public d = new Date();
  @Input() settingsSubHeader: any;

  constructor() { }

  ngOnInit(): void {
  }

}
