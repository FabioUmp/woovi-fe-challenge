import { PaymentOptionItem } from './types';


export const paymentOptions: Array<PaymentOptionItem> = [
  {
    installments: 2,
    amount: 15300.0,
    total: 30600.0,
  },
  {
    installments: 3,
    amount: 10196.66,
    total: 30620.0,
  },
  {
    installments: 4,
    amount: 7725.0,
    total: 30900.0,
    extra: '-3% de juros: Melhor opção de parcelamento',
  },
  {
    installments: 5,
    amount: 6300.0,
    total: 31500.0,
  },
  {
    installments: 6,
    amount: 5283.33,
    total: 31699.98,
  },
  {
    installments: 7,
    amount: 4542.85,
    total: 31800.0,
  },
];
