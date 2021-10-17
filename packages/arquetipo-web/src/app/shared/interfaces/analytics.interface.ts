import { SettingProgressInterface } from './progress.interface';
import { ToggleSettingsInterface } from './toggle.interface';
import { SettingBoxInterface } from './box.interface';
import { ButtonInterface } from './button.interface';

export interface AnalyticsInterface {
  getSettingsProgress(): SettingProgressInterface[];
  getSettingsToggleSettings(): ToggleSettingsInterface;
  getSettingsBox(): SettingBoxInterface;
  getSettingsButton(): ButtonInterface[];
  getSettingsProgressDouble(): SettingProgressInterface[];
}
