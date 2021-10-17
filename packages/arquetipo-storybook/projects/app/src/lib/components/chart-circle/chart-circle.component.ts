import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { Subject } from 'rxjs';
import { HeritageModel } from '../../pages/heritage/model/heritage.model';
import { ButtonComponent } from '../button';
import { CheckBoxComponent } from '../check-box';

@Component({
  selector: 'mln-chart-circle',
  templateUrl: './chart-circle.component.html',
  styleUrls: ['./chart-circle.component.scss'],
})
export class ChartCircleComponent implements OnInit {
  @ViewChild('chart', { static: false }) public chart: ChartComponent;
  @ViewChild(ButtonComponent, { static: false })
  public customButton: ButtonComponent;
  @ViewChild(CheckBoxComponent, { static: false })
  public customChk: CheckBoxComponent;
  @Input() public title: string;
  @Input() public subText: string;
  @Input() public set settingsChart(settingsChart: any) {
    this.heritageModel = new HeritageModel();
    this.chartOptions = this.heritageModel.getChartOptions(settingsChart);
    this.total = settingsChart.total;
    const colors: string[] = settingsChart.colors;
    const labels: string[] = settingsChart.labels;
    this.settingsCheckBox = labels.map((label: string, i: number) => {
      return {
        color: colors[i],
        title: label,
        checked: true,
        id: null,
        callBack: settingsChart.callBack,
      };
    });
  }
  @Input() public settingsButton: any;

  public total: number;
  public chartOptions: Partial<any>;
  public heritageModel: HeritageModel;
  public settingsCheckBox: {
    color: string;
    title: string;
    checked: boolean;
    id: string | number;
    callBack: Subject<any>;
  }[] = [];

  constructor() {}

  ngOnInit(): void {}
}
