import { SettingProgressInterface } from '../../../shared/interfaces/progress.interface';
import { ToggleSettingsInterface } from '../../../shared/interfaces/toggle.interface';
import { SettingBoxInterface } from '../../../shared/interfaces/box.interface';
import { ButtonInterface } from '../../../shared/interfaces/button.interface';

export interface AnalyticsInterface {
  getSettingsProgress(): SettingProgressInterface[];
  getSettingsToggleSettings(): ToggleSettingsInterface;
  getSettingsBox(): SettingBoxInterface;
  getSettingsButton(): ButtonInterface[];
}
