export type PaymentOptionItem = {
  uuid: string;
  installments: number;
  amount: number;
  total?: number;
  extra?: string;
  cashback?: string;
  type: 'pix' | 'installments';
};
