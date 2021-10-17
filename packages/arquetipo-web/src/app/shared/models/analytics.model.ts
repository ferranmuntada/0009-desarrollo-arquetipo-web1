import { ToggleSettingsInterface } from '../interfaces/toggle.interface';
import { SettingProgressInterface } from '../interfaces/progress.interface';
import { SettingBoxInterface } from '../interfaces/box.interface';
import { AnalyticsInterface } from '../interfaces/analytics.interface';
import { ButtonInterface } from '../interfaces/button.interface';

export class AnalyticsModel implements AnalyticsInterface {
  public getSettingsProgress(): SettingProgressInterface[] {
    return [
      {
        deadline: 'Corto Plazo',
        time: 'menos de 3 años',
        progressInfo: [
          {
            amount: '36.64',
            text: 'Patrimonio',
          },
        ],
      },
      {
        deadline: 'Medio Plazo',
        time: 'Entre 3 y 10 años',
        progressInfo: [
          {
            amount: '42.94',
            text: 'Patrimonio',
          },
        ],
      },
      {
        deadline: 'Largo Plazo',
        time: 'Más de 10 años',
        progressInfo: [
          {
            amount: '17.24',
            text: 'Patrimonio',
          },
        ],
      },
      {
        deadline: 'Jubilación',
        time: '',
        progressInfo: [
          {
            amount: '1.31',
            text: 'Patrimonio',
          },
        ],
      },
    ];
  }

  public getSettingsProgressDouble(): SettingProgressInterface[] {
    return [
      {
        deadline: 'Corto Plazo',
        time: 'menos de 3 años',
        progressInfo: [
          {
            amount: '29.51',
            text: 'PATRIMONIO',
          },
          {
            amount: '22.45',
            text: 'PROPUESTA',
          },
        ],
      },
      {
        deadline: 'Medio Plazo',
        time: 'Entre 3 y 10 años',
        progressInfo: [
          {
            amount: '50.94',
            text: 'PATRIMONIO',
          },
          {
            amount: '57.00',
            text: 'PROPUESTA'
          }
        ],
      },
      {
        deadline: 'Largo Plazo',
        time: 'Más de 10 años',
        progressInfo: [
          {
            amount: '18.24',
            text: 'PATRIMONIO',
          },
          {
            amount: '19.10',
            text: 'PROPUESTA'
          }
        ],
      },
      {
        deadline: 'Jubilación',
        time: '',
        progressInfo: [
          {
            amount: '1.31',
            text: 'PATRIMONIO',
          },
          {
            amount: '1.45',
            text: 'PROPUESTA'
          }
        ],
      },
    ];
  }

  public getSettingsToggleSettings(): ToggleSettingsInterface {
    return { first: 'Gráfico', second: 'Detalle' };
  }

  public getSettingsBox(): SettingBoxInterface {
    return {
      title: '<span>900.217</span><span class=\'decimal\'>,00 €</span>',
      subTitle: 'IMPORTE ANALIZADO',
      listItems: [
        'Servicios Bancarios',
        'Inversiones en forma de Seguro de Vida',
        'Inversiones Bancarias',
      ],
      footerText: 'Editar filtros',
    };
  }

  public getSettingsButton(): ButtonInterface[] {
    return [
      { text: '1D Temporal', classButton: 'secondary', isSquare: true },
      {
        text: '2D Tipología de título',
        classButton: 'primary',
        isSquare: true,
      },
      { text: '3D Geográfica', classButton: 'primary', isSquare: true },
      {
        text: '4D Potencial de crecimiento',
        classButton: 'primary',
        isSquare: true,
      },
      {
        text: '5D Tipología de producto',
        classButton: 'primary',
        isSquare: true,
      },
    ];
  }
}
