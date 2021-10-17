import { Subject } from 'rxjs';

export * from '../../../projects/app/src/lib/components/datatable';
export * from '../../../projects/app/src/lib/shared/model/data-table/actions.model';

export const datasourcesAccordion = [
  {
    origin: 'Cuenta corriente ES64.98.76.0987.12.1234567890',
    destiny: 'Challenge Cyclical Equity L.',
    available: 50000000,
    proposed: 50000000,
    operation: 'Realizar traspaso/Transferencia Acción directa del cliente',
    status: 'Pendiente de iniciarse',
  },
  {
    origin: 'Cuenta corriente ES64.98.76.0987.12.1234567890',
    destiny: 'Challenge Cyclical Equity L.',
    available: 50000000,
    proposed: 50000000,
    operation: 'Realizar traspaso/Transferencia Acción directa del cliente',
    status: 'Pendiente de iniciarse',
  },
];
export const datacolumnsAccordion = [
  {
    key: 'origin',
    name: 'Origen',
    types: { type: 'text' },
  },
  {
    key: 'destiny',
    name: 'Destino',
    types: { type: 'text' },
  },
  {
    key: 'available',
    name: 'Disponible',
    types: { type: 'money' },
  },
  {
    key: 'proposed',
    name: 'Propuesto',
    types: { type: 'money' },
  },
  {
    key: 'multichanel',
    name: 'Multicanalidad',
    types: {
      type: 'toggle',
      settings: {
        label: 'Si',
      },
    },
  },
  {
    key: 'operation',
    name: 'Operación',
    types: { type: 'text' },
  },
  {
    key: 'status',
    name: 'Estado',
    types: { type: 'text' },
  },
  {
    key: 'documentation',
    name: 'Documentación',
    types: {
      type: 'button',
      settings: {
        icon: 'insert_drive_file',
        callback: new Subject(),
      },
    },
  },
];
