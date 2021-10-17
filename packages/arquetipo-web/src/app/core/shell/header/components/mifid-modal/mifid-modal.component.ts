import { Component, OnInit, ViewChild } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexXAxis,
    ApexFill,
    ApexTooltip,
} from 'ng-apexcharts';

type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
};
@Component({
    selector: 'app-mifid-modal',
    templateUrl: './mifid-modal.component.html',
    styleUrls: ['./mifid-modal.component.scss'],
})
export class MifidModalComponent implements OnInit {
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: '1',
                    data: [25, 100, 100],
                },
                {
                    name: '2',
                    data: [25, 100, 100],
                },
                {
                    name: '3',
                    data: [25, 100, 100],
                },
                {
                    name: '4',
                    data: [25, 100, 100],
                },
                {
                    name: '5',
                    data: [25, 100, 100],
                },
            ],
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['1', '2', '3'],
            },
            fill: {
                opacity: 1,
                colors: ['#200b3c', '#200b3c', '#200b3c', '#200b3c', '#200b3c'],
            },
            tooltip: {
                y: {
                    formatter: (val) => {
                        return '$ ' + val + ' thousands';
                    },
                },
            },
            legend: {
                show: false,
                position: 'right',
                floating: false,
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial',
                fontWeight: 400,
                horizontalAlign: 'center',
                labels: {
                    colors: ['#200b3c', '#60abc1'],
                    useSeriesColors: false,
                },
            },
        };
    }

    ngOnInit(): void {}
}
