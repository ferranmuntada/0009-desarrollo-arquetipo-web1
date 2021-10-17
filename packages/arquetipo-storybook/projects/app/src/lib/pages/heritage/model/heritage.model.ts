import { Subject } from 'rxjs';

export class HeritageModel {
  public currency: Intl.NumberFormat = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  });

  constructor() {}

  public getChartOptions(settings: any): any {
    return {
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        custom: ({ series, seriesIndex, w }) => {
          const percent = (
            (series[seriesIndex] * 100) /
            settings.total
          ).toFixed(2);
          return `
                  <div class="tooltipApxCustom">
                      <div class="tooltipheadCustom">
                          <span class="title-first">${
                            w.globals.labels[seriesIndex]
                          }</span>
                          <span class="title-first-amount" style="color: ${
                            w.globals.colors[seriesIndex]
                          }">${percent} %</span>
                      </div>
                      <span class="divider"></span>
                      <div class="tooltipfooterCustom">
                          <span class="title-second">${
                            settings.popupText
                          }</span>
                          <span class="total">${this.currency.format(
                            series[seriesIndex]
                          )}</span>
                      </div>
                  </div>`;
        },
      },
      colors: settings.colors,
      series: settings.series,
      labels: settings.labels,
      chart: {
        width: '100%',
        height: 330,
        type: 'donut',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000,
          },
        },
      },
      stroke: {
        lineCap: 'round',
        width: 2,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '90%',
          },
          expandOnClick: false,
        },
      },
      legend: { show: false },
    };
  }

  public getSettingsToggle(): { first: string; second: string } {
    return { first: 'Gráfico', second: 'Detalle' };
  }

  public getSettingsCheckBox(): {
    title: string;
    checked: boolean;
    id: string | number;
    callBack: Subject<boolean>;
  }[] {
    const testObserver = new Subject<boolean>();
    return [
      {
        title: 'Mediolanum',
        checked: true,
        id: 'medioLanum',
        callBack: testObserver,
      },
      {
        title: 'Otras entidades',
        checked: false,
        id: 'otherEntities',
        callBack: testObserver,
      },
      {
        title: 'Todo el patrimonio',
        checked: false,
        id: 'allHeritage',
        callBack: testObserver,
      },
    ];
  }
}
