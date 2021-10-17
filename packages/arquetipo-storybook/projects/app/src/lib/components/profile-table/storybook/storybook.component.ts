import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-storybook',
  templateUrl: './storybook.component.html',
  styleUrls: ['./storybook.component.scss']
})
export class StorybookComponent implements OnInit {
  @Input() public title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
