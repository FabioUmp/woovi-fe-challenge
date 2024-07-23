import { paymentOptions } from '../constants';
import PixPaymentStep from './PixPaymentStep';

const amountToShow = paymentOptions[5].amount;

const BodyQR = () => {
  return (
    <>
      <div>
        {['pix', 'installments'].map(type => (
          <div key={type}>
            {paymentOptions
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
};

export default BodyQR;
