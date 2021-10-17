export interface ProgressInfoInterface {
  amount: string;
  text: string;
}

export interface SettingProgressInterface {
  deadline: string;
  time: string;
  progressInfo: Array<ProgressInfoInterface>;
}
