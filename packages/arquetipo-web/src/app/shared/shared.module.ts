import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import {
    BoxItemsModule,
    ButtonModule,
    CheckBoxModule,
    CustomerInfoModule,
    DataTableModule,
    ProgressBarModule,
    SearchInputModule,
    SliderToggleModule,
    StepperModule,
    SubHeaderModule,
    BigButtonModule,
    RadioButtonListModule,
    AccordionModule,
    ChartCircleModule,
    DoubleButtonModule,
    AlertModule,
} from 'arquetipo-storybook/dist';

import { DynamicPipeModule } from './pipes/dynamicPipe.module';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

// Storybook Archetype - Modules
const moduleStoryBookArchetype = [
    SliderToggleModule,
    CheckBoxModule,
    CustomerInfoModule,
    SearchInputModule,
    ButtonModule,
    BoxItemsModule,
    ProgressBarModule,
    DataTableModule,
    StepperModule,
    SubHeaderModule,
    BigButtonModule,
    RadioButtonListModule,
    AccordionModule,
    ChartCircleModule,
    DoubleButtonModule,
    AlertModule,
];

const components = [ErrorDialogComponent];
const pipeModule = [DynamicPipeModule];

// Material Modules
const materialModules = [
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
];

@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        ...materialModules,
        ...moduleStoryBookArchetype,
        ...pipeModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        ...components,
        ...materialModules,
        ...moduleStoryBookArchetype,
        ...pipeModule,
    ],
    schemas: [],
    providers: [],
})
export class SharedModule {}
