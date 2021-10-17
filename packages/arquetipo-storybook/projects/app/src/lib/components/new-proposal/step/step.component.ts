import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'mln-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements AfterContentInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() descriptionLabel: string;
  @Input() count: string;
  @Input() disabled: boolean;
  @Input() get selected(): boolean {
    return this.selected$;
  }
  set selected(selected: boolean) {
    this.selected$ = selected;
    if (this.selected$) {
      this.loaded = true;
    }
  }

  @ContentChildren('content') templates: QueryList<TemplateRef<any>>;

  public index: number;
  public loaded: boolean;
  public contentTemplate: TemplateRef<any>;
  private selected$: boolean;

  constructor(public viewContainer: ViewContainerRef) {
    this.index = 0;
  }

  ngAfterContentInit(): void {
    this.templates.forEach((template, i) => {
      this.contentTemplate = template;
      this.index = i;
    });
  }
}
