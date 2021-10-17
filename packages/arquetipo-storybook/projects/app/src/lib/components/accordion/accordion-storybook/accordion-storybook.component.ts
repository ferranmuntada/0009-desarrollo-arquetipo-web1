import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mln-accordion-storybook',
  templateUrl: './accordion-storybook.component.html',
  styleUrls: ['./accordion-storybook.component.scss']
})
export class AccordionStorybookComponent implements OnInit {
  public example = 'Esperando por cambios';

  constructor() { }

  ngOnInit(): void {}

  public onOpen(event: any): void {
    this.example = 'Tab open: ' + event.index;
  }

  public onClose(event: any): void {
    this.example = 'Tab close: ' + event.index;
  }
}
