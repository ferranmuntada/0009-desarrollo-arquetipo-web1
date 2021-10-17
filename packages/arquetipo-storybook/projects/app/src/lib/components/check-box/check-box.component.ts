import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Subject } from 'rxjs';

interface ChkAction {
  status: boolean;
  id: string | number;
}
interface Settings {
  color: string;
  title: string;
  checked: boolean;
  id: string | number;
  callBack?: Subject<boolean>;
}
@Component({
  selector: 'mln-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent implements OnInit, AfterViewInit {
  // @ViewChild('checkmark') public checkmark!: ElementRef;
  @Output() changeChkAction: EventEmitter<ChkAction> = new EventEmitter<
    ChkAction
  >();
  @Input() public set settings(settings: Settings) {
    /* setTimeout(() => {
      this.checkmark.nativeElement.style.border = '2px solid ' + settings.color;
      this.checkmark.nativeElement.style.backgroundColor = settings.color;
    }, 120); */
    this.settings$ = settings;
  }
  public get settings(): Settings {
    return this.settings$;
  }

  private settings$: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  public changeChk(status: boolean, callback?: any): void {
    callback.next(status);
  }
}
