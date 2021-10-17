import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
    AccordionModule,
    ButtonModule,
    HeaderModule as HeaderModuleStorybook,
    ProfileTableModule,
    ChartBarModule,
} from 'arquetipo-storybook/dist';
import { MifidModalComponent } from './components/mifid-modal/mifid-modal.component';

const materialModules = [MatIconModule, MatButtonModule];

@NgModule({
    declarations: [HeaderComponent, ButtonLogoutComponent, MifidModalComponent],
    imports: [CommonModule, HeaderModuleStorybook, materialModules, ButtonModule, ProfileTableModule, AccordionModule, ChartBarModule],
    exports: [HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule {}
