import { PaymentOptionItem } from './types';

export const paymentOptions: Array<PaymentOptionItem> = [
  {
    uuid: '2c1b951f356c4680b13ba1c9fc889c47',
    installments: 1,
    amount: 15300.0,
    cashback: 'Ganhe 3% de Cashback',
    extra: '-3% de juros: Melhor opção de parcelamento',
    type: 'pix',
  },
  {
    uuid: window.crypto.randomUUID(),
    installments: 2,
    amount: 15300.0,
    total: 30600.0,
    type: 'installments',
  },
  {
    uuid: window.crypto.randomUUID(),
    installments: 3,
    amount: 10196.66,
    total: 30620.0,
    type: 'installments',
  },
  {
    uuid: window.crypto.randomUUID(),
    installments: 4,
    amount: 7725.0,
    total: 30900.0,
    extra: '-3% de juros: Melhor opção de parcelamento',
    type: 'installments',
  },
  {
    uuid: window.crypto.randomUUID(),
    installments: 5,
    amount: 6300.0,
    total: 31500.0,
    type: 'installments',
  },
  {
    uuid: window.crypto.randomUUID(),
    installments: 6,
    amount: 5283.33,
    total: 31699.98,
    type: 'installments',
  },
  {
    uuid: window.crypto.randomUUID(),
    installments: 7,
    amount: 4542.85,
    total: 31800.0,
    type: 'installments',
  },
];
