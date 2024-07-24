import { PaymentOptionItem } from '../types';
import { formatNumber } from '../utils';
import './styles.css';

type PaymentOptionProps = {
  option: PaymentOptionItem;
  index: number;
  totalOptions: number;
  isSelected: boolean;
  onSelect: (uuid: string) => void;
};

function PaymentOption({
  option,
  index,
  totalOptions,
  isSelected,
  onSelect,
}: PaymentOptionProps) {
  const handleChange = () => {
    onSelect(option.uuid);
  };

  return (
    <div
      className={`mx-auto text-gray-900 text-xl bg-white border border-gray-200 
      ${index === 0 ? 'rounded-t-lg' : ''} 
      ${index === totalOptions - 1 ? 'rounded-b-lg' : ''} 
      ${index < totalOptions - 1 ? 'border-b' : ''} 
      dark:border-green-500 ${isSelected ? 'bg-[#ceefe6]' : ''}`}
    >
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex-1">
          <span className="text-gray-700 font-bold">
            {option.installments}x
          </span>{' '}
          R$ {formatNumber(option.amount)}
          {option.total && (
            <p className="text-gray-400 text-sm font-light mt-2">
              Total: {formatNumber(option.total)}
            </p>
          )}
          {option.extra && <span className="badge"> {option.extra}</span>}
        </div>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleChange}
          className="rounded-checkbox"
        />
      </div>
    </div>
  );
}

export default PaymentOption;
