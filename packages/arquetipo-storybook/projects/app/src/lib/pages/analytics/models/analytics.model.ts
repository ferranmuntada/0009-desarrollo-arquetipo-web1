import { SettingProgressInterface } from '../../../shared/interfaces/progress.interface';
import { ToggleSettingsInterface } from '../../../shared/interfaces/toggle.interface';
import { SettingBoxInterface } from '../../../shared/interfaces/box.interface';
import { ButtonInterface } from '../../../shared/interfaces/button.interface';
import { AnalyticsInterface } from '../interfaces/analytics.interface';

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

  public getSettingsToggleSettings(): ToggleSettingsInterface {
    return { first: 'Gráfico', second: 'Detalle' };
  }

  public getSettingsBox(): SettingBoxInterface {
    return {
      amountNumber: '900.217',
      amountDecimal: ',00 €',
      amountText: 'IMPORTE ANALIZADO',
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
