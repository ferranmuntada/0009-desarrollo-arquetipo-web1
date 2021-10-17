import {
  Component,
  AfterContentInit,
  OnDestroy,
  QueryList,
  ContentChildren,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';

@Component({
  selector: 'mln-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  public image = '/assets/img/cliente-real.png';
  public AccordionTabListArray: AccordionPanelComponent[];

  @Input() public multi: boolean;
  @Output() closeAction: EventEmitter<any> = new EventEmitter();
  @Output() openAction: EventEmitter<any> = new EventEmitter();
  @ContentChildren(forwardRef(() => AccordionPanelComponent))
  public AccordionTabList: QueryList<AccordionPanelComponent>;

  constructor() {}

  /**
   * @description Initialize accordion content.
   *
   */
  ngAfterContentInit(): void {
    this.AccordionTabList.forEach((tabInstance, i) =>
      this.initAccordionTabs(tabInstance, i)
    );
    this.AccordionTabListArray = this.AccordionTabList.toArray();
  }

  /**
   * @description Upadate index of accordion.
   * @param accordionTab any.
   * @param index index for the tab.
   */
  private initAccordionTabs(
    accodionTab: AccordionPanelComponent,
    index: number
  ): void {
    accodionTab.id = index;
  }

  ngOnDestroy(): void {}
}
