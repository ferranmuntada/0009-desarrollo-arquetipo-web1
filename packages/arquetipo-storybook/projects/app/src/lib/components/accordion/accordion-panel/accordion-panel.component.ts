import {
  Component,
  forwardRef,
  Inject,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { AccordionComponent } from '../accordion.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'mln-accordion-tab',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss'],
  animations: [
    trigger('accordionTabContent', [
      state(
        'hidden',
        style({
          height: '0',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      transition(
        'visible <=> hidden',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AccordionPanelComponent implements OnInit, OnDestroy {
  @Input() public imageIconUrl: string;
  @Input() public hideToggle!: boolean;
  @Input() public title!: string;

  public iconToggle!: boolean;

  public animate: boolean;
  @Input() public active: boolean;
  @Input() public disabled: boolean;
  @Input() public hide: boolean;

  public id: number;
  private accordion$: AccordionComponent;

  constructor(@Inject(forwardRef(() => AccordionComponent)) accordion: any) {
    this.accordion$ = accordion as AccordionComponent;
  }

  ngOnInit(): void {
    this.iconToggle = this.active;
  }

  /**
   * @description Find the index of actual tab.
   *  @return index of active tab
   */
  public findTabIndex(): number {
    const index = this.accordion$.AccordionTabListArray.findIndex(
      (accordion: AccordionPanelComponent) => accordion === this
    );
    return index;
  }

  /**
   * @description Enable/disable the collapse component
   *  @param event Event
   */
  public toggleCollapse(event: Event): void {
    if (!this.disabled) {
      this.animate = true;
      const index = this.findTabIndex();

      if (!this.accordion$.multi && !this.active) {
        this.accordion$.AccordionTabListArray.forEach((accordion) => {
          accordion.active = false;
          accordion.iconToggle = false;
        });
      }

      if (!this.active) {
        this.accordion$.openAction.emit({ originalEvent: event, index });
      } else {
        this.accordion$.closeAction.emit({ originalEvent: event, index });
      }
      this.active = !this.active;
      this.iconToggle = !this.iconToggle;
    }
    event.preventDefault();
  }

  /**
   * @description Turn off the animation when the collapse ends.
   */
  public onCollapseDone(): void {
    this.animate = false;
  }

  ngOnDestroy(): void {
    if (this.accordion$?.AccordionTabListArray?.length) {
      this.accordion$.AccordionTabListArray.splice(this.findTabIndex(), 1);
    }
  }
}
