import { Component, OnInit } from '@angular/core';
import { AnalyticsInterface } from '@app/shared/interfaces/analytics.interface';
import { SettingBoxInterface } from '@app/shared/interfaces/box.interface';
import { ButtonInterface } from '@app/shared/interfaces/button.interface';
import { SettingProgressInterface } from '@app/shared/interfaces/progress.interface';
import { ToggleSettingsInterface } from '@app/shared/interfaces/toggle.interface';
import { AnalyticsModel } from '@app/shared/models/analytics.model';

@Component({
    selector: 'app-step5',
    templateUrl: './step5.component.html',
    styleUrls: ['./step5.component.scss'],
})
export class Step5Component implements OnInit {
    public settingsButton: ButtonInterface[];
    public analyticsDatasource: AnalyticsInterface;
    public settingsProgress: SettingProgressInterface[];
    public statusTextToggleSettings: ToggleSettingsInterface;
    public settingsBoxd: SettingBoxInterface;

    constructor() {
        this.analyticsDatasource = new AnalyticsModel();
        this.settingsButton = this.analyticsDatasource.getSettingsButton();
        this.settingsProgress = this.analyticsDatasource.getSettingsProgressDouble();
        this.statusTextToggleSettings = this.analyticsDatasource.getSettingsToggleSettings();
        this.settingsBoxd = this.analyticsDatasource.getSettingsBox();
    }

    ngOnInit(): void {}
}
