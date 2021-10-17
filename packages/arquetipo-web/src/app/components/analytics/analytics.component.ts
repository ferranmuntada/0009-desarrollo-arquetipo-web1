import { Component, OnInit } from '@angular/core';
import { ToggleSettingsInterface } from '../../shared/interfaces/toggle.interface';
import { SettingProgressInterface } from '../../shared/interfaces/progress.interface';
import { SettingBoxInterface } from '../../shared/interfaces/box.interface';
import { ButtonInterface } from '../../shared/interfaces/button.interface';
import { AnalyticsModel } from '../../shared/models/analytics.model';
import { AnalyticsInterface } from '@app/shared/interfaces/analytics.interface';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
    public statusTextToggleSettings: ToggleSettingsInterface;
    public settingsProgress: SettingProgressInterface[];
    public settingsBoxd: SettingBoxInterface;
    public settingsButton: ButtonInterface[];
    public analyticsDatasource: AnalyticsInterface;

    constructor() {
        this.analyticsDatasource = new AnalyticsModel();
        this.settingsProgress = this.analyticsDatasource.getSettingsProgress();
        this.statusTextToggleSettings = this.analyticsDatasource.getSettingsToggleSettings();
        this.settingsBoxd = this.analyticsDatasource.getSettingsBox();
        this.settingsButton = this.analyticsDatasource.getSettingsButton();
    }

    ngOnInit() {}
}
