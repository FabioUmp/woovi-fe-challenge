import React, { useState } from 'react';
import { paymentOptions } from '../constants';
import PaymentOption from './PaymentOption';

type BodyProps = {
  onSelect: (uuid: string) => void;
};

function Body({ onSelect }: BodyProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (uuid: string) => {
    setSelectedOption(uuid);
    onSelect(uuid);
  };

  return (
    <>
      <p>{selectedOption || 'not selected'}</p>
      <div className="mx-auto text-gray-900 text-xl bg-white border border-gray-200 rounded-lg dark:border-gray-500">
        {paymentOptions
          .filter(option => option.type === 'pix')
          .map((option, index) => (
            <PaymentOption
              key={option.uuid}
              option={option}
              index={index}
              totalOptions={paymentOptions.length}
              isSelected={selectedOption === option.uuid}
              onSelect={() => handleSelect(option.uuid)}
            />
          ))}
      </div>
      <div className="mx-auto mt-4 text-gray-900 text-xl bg-white border border-gray-200 rounded-lg dark:border-gray-500">
        {paymentOptions
          .filter(option => option.type === 'installments')
          .map((option, index) => (
            <PaymentOption
              key={option.uuid}
              option={option}
              index={index}
              totalOptions={paymentOptions.length}
              isSelected={selectedOption === option.uuid}
              onSelect={() => handleSelect(option.uuid)}
            />
          ))}
      </div>
    </>
  );
}

export default Body;
