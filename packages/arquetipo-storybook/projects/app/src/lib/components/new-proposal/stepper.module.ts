import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StepComponent } from './step/step.component';
import { StepperComponent } from './stepper.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
    ],
    exports: [
        StepComponent,
        StepperComponent,
        MatButtonModule,
    ],
    declarations: [
        StepComponent,
        StepperComponent
    ]
})
export class StepperModule { }
