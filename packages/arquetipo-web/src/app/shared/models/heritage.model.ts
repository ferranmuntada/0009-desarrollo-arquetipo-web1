import { Subject } from 'rxjs';

export class HeritageModel {
    public currency: Intl.NumberFormat = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
    private actionMedioLanum$ = new Subject<boolean>();
    private actionOtherEntities$ = new Subject<boolean>();
    private actionAllHeritage$ = new Subject<boolean>();

    constructor(){}

    public getChartOptions(totalHeritage: number): any {
        return {
            dataLabels: {
              enabled: false,
            },
            tooltip: {
              custom: ({ series, seriesIndex, w }) => {
                  const percent = ((series[seriesIndex] * 100) / totalHeritage ).toFixed(2);
                  return (`
                  <div class="tooltipApxCustom">
                      <div class="tooltipheadCustom">
                          <span class="title-first">${w.globals.labels[seriesIndex]}</span>
                          <span class="title-first-amount" style="color: ${w.globals.colors[seriesIndex]}">${percent} %</span>
                      </div>
                      <span class="divider"></span>
                      <div class="tooltipfooterCustom">
                          <span class="title-second">Dinero invertido</span>
                          <span class="total">${this.currency.format(series[seriesIndex])}</span>
                      </div>
                  </div>`);
              },
            },
            colors: ['#85e3d1', '#3bcaaf', '#1ea78d', '#19816d', '#8471d6', '#2fb8de'],
            series: [2378, 2165, 2333, 1852, 2456, 2154],
            labels: ['Inversiones en forma de Seguro de Vida', 'Fondos de Inversión', 'Inversiones bancarias', 'Inversiones de Área de valores', 'Jubilación', 'Servicios Bancarios'],
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
              }
            },
            legend: {
              show: false
            },
        };
    }

    public getSettingsToggle(): { first: string; second: string; } {
        return { first: 'Gráfico', second: 'Detalle'};
    }

    public getSettingsCheckBox() {
        return [
            { title: 'Mediolanum', checked: true, id: 'medioLanum', callBack: this.actionMedioLanum$ },
            { title: 'Otras entidades', checked: false, id: 'otherEntities', callBack: this.actionOtherEntities$},
            { title: 'Todo el patrimonio', checked: false, id: 'allHeritage', callBack: this.actionAllHeritage$}
        ];
    }

    public getActionMediolanumSubject(): Subject<boolean> {
        return this.actionMedioLanum$;
    }

    public getActionOtherEntitiesSubject(): Subject<boolean> {
        return this.actionOtherEntities$;
    }

    public getActionAllHeritageSubject(): Subject<boolean> {
        return this.actionAllHeritage$;
    }
}
