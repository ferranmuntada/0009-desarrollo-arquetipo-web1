import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { Subject } from 'rxjs';

import { StepComponent } from './step/step.component';

@Component({
  selector: 'mln-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterContentInit {
  @Input() tabName: string;
  @Input() linkAmount: {
    disabled: boolean;
    show: boolean;
    callback: Subject<boolean>;
  };
  @Input() linkHiring: {
    disabled: boolean;
    show: boolean;
    callback: Subject<boolean>;
  };
  @Output() selectAction: EventEmitter<any> = new EventEmitter();
  @Output() closeAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() saveAction: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ContentChildren(StepComponent) panels: QueryList<StepComponent>;

  public selectedIndex: number;
  private panelsArray: StepComponent[] = [];

  constructor() {}

  ngAfterContentInit(): void {
    this.initTabs();

    this.panels.changes.subscribe(() => this.initTabs());
  }

  private initTabs(): void {
    this.panels.forEach((tab: StepComponent, i: number) => tab.index = i);
    this.panelsArray = this.panels.toArray();
    const selectedTab: StepComponent = this.panelsArray.find((panel) => panel.selected);
    if (!selectedTab && this.panelsArray.length) {
      this.panelsArray[0].selected = true;
      this.selectedIndex = this.panelsArray[0].index;
    }
  }

  /**
   * @description set the given panel to the selected and emit onchange event
   * @param panel StepComponent
   */
  private changePanelSelected(panel: StepComponent): void {
    this.panelsArray = this.panels.toArray();
    this.panelsArray = this.panelsArray.map((panelArray: StepComponent) => {
      panelArray.selected = panelArray.index === panel.index;
      return panelArray;
    });
  }
  /**
   * @description triggered when the user select another tab and emit onSelect event
   * @param event Event
   * @param panel StepComponent
   */
  public selectTab(event: Event, panel: StepComponent, index: number): void {
    if (event) { event.preventDefault(); }
    this.selectedIndex = index;
    if (event && !panel?.disabled) {
      this.changePanelSelected(panel);
      this.selectAction.emit({ originalEvent: event, panel, tab: this.tabName || 'tab' });
    }
  }

  public next(event: Event): void {
    if ((this.selectedIndex + 1) < this.panels.length) {
      this.selectedIndex ++;
      const panel = this.panels.find(d => d.index === this.selectedIndex);
      this.selectTab(event, panel, this.selectedIndex);
    }
  }

  public back(event: Event): void {
    if (this.selectedIndex) {
      this.selectedIndex --;
      const panel = this.panels.find(d => d.index === this.selectedIndex);
      this.selectTab(event, panel, this.selectedIndex);
    }
  }

  public close(): void {
    this.closeAction.emit(true);
  }

  public save(): void {
    this.saveAction.emit(true);
  }

  public changeHiring(hiringAction?: {
    disabled: boolean;
    show: boolean;
    callback: Subject<boolean>;
  }): void {
    if (!hiringAction.disabled && hiringAction.show) {
      hiringAction.callback.next(true);
    }
  }

  public changeAmount(amountAction?: {
    disabled: boolean;
    show: boolean;
    callback: Subject<boolean>;
  }): void {
    if (!amountAction.disabled && amountAction.show) {
      amountAction.callback.next(true);
    }
  }
}
