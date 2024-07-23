import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Cta from '../components/Cta';
import Body from '../components/Body';
import React, { useState } from 'react';

function Selection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  return (
    <div className="mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-4 py-6 text-black shadow-2xl">
      <div className="text-center mb-5">
        <Header />
        <Cta title="Joao, como voce quer pagar?" />
      </div>
      <div className="mb-5">
        <Body onSelect={setSelectedOption} />
      </div>
      <div className="flex items-center justify-center mb-5">
        <img src="src/assets/images/logo2.svg" />
      </div>
      <div>
        <Link
          to={`/qr/${selectedOption || 'not selected'}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          qr-code scan
        </Link>
      </div>
    </div>
  );
}

export default Selection;
