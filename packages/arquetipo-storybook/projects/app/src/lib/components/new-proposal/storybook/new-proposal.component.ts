import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  AfterViewChecked,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { StepComponent } from '../step/step.component';
import { StepperComponent } from '../stepper.component';
@Component({
  selector: 'mln-new-proposal',
  templateUrl: './new-proposal.component.html',
  styleUrls: ['./new-proposal.component.scss'],
})
export class NewProposalComponent implements OnInit, AfterViewChecked {
  @ViewChild(StepperComponent, { static: false })
  public stepper: StepperComponent;
  @ViewChild(StepComponent, { static: false })
  public step: StepComponent;
  @Output() closeAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() saveAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectAction: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() menuItems: Array<{
    icon: string;
    text: string;
    class: string;
    valid: boolean;
  }>;
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

  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  public closeActionEmit(): void {
    this.closeAction.emit(true);
  }

  public saveActionEmit(): void {
    this.saveAction.emit(true);
  }

  public selectActionEmit(event: Event): void {
    this.selectAction.emit(event);
  }
}
