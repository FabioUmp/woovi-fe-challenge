import React, { useState } from 'react';
import { paymentOptions } from '../constants';
import PaymentOption from './PaymentOption';

function Body() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null,
  );

  const handleSelect = (index: number) => {
    setSelectedOptionIndex(index);
  };

  return (
    <div className="mx-auto text-gray-900 text-xl bg-white border border-gray-200 rounded-lg dark:border-gray-500">
      {paymentOptions.map((option, index) => (
        <PaymentOption
          key={index}
          option={option}
          index={index}
          totalOptions={paymentOptions.length}
          isSelected={selectedOptionIndex === index}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

export default Body;
