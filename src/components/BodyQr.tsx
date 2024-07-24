import { paymentOptions } from '../constants';
import PixPaymentStep from './PixPaymentStep';
import { PaymentOptionItem } from '../types';

type BodyQrProps = {
  uuid: string;
};

const findPaymentOptionByUuid = (
  uuid: string,
): PaymentOptionItem | undefined => {
  return paymentOptions.find(option => option.uuid === uuid);
};

let amountToShow: number;
let index: number;

function BodyQR({ uuid }: BodyQrProps) {
  const paymentOption = findPaymentOptionByUuid(uuid);
  if (paymentOption) {
    amountToShow = paymentOptions[paymentOption.installments - 1].amount;
    index = paymentOption.installments;
  } else {
    return 'undefined';
  }

  return (
    <>
      <div>
        {['pix', 'installments'].map(type => (
          <div key={type}>
            {paymentOptions
              .slice(0, index)
              .filter(option => option.type === type)
              .map(option => (
                <PixPaymentStep
                  key={option.uuid}
                  option={option}
                  amountToShow={amountToShow}
                />
              ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default BodyQR;
