import { PaymentOptionItem } from '../types';

type PixPaymentStepProps = {
  option: PaymentOptionItem;
  amountToShow: number;
};

const PixPaymentStep = ({ option, amountToShow }: PixPaymentStepProps) => {
  return (
    <div className="mx-auto px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:pl-1">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex">
          <div className="mr-2 flex flex-col items-center">
            <div
              className={
                option.type === 'installments'
                  ? 'h-full w-0.5 bg-gray-300'
                  : 'h-full'
              }
            />
            <div>
              <div
                className={
                  option.type === 'installments'
                    ? 'h-4 w-4 rounded-full border-2'
                    : 'h-4 w-4 rounded-full border-2 border-green-500'
                }
              ></div>
            </div>
          </div>
          <div className="flex">
            <p
              className="mt-5 text-sm font-bold"
              style={{ whiteSpace: 'nowrap', textAlign: 'left' }}
            >
              {option.type === 'installments'
                ? `${option.installments}ª no cartão`
                : `${option.installments}ª entrada no Pix`}
            </p>
            <p
              className="mt-5 mx-40 text-sm font-bold"
              style={{ textAlign: 'left' }}
            >
              R${amountToShow}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixPaymentStep;
