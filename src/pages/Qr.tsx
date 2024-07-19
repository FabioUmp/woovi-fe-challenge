import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Cta from '../components/Cta';
import QrCodeIcon from '../components/QrCodeIcon';

function Qr() {
  const { uuid } = useParams();
  return (
    <div className="mx-20 mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-4 py-6 text-black shadow-2xl">
      <div className="text-center">
        <Header />
        <Cta title="joao, pague a entrada pix" />
        <p className="pt-2 text-lg font-medium">qr</p>
        <p className="text-sm font-extrabold text-gray-900">
          {uuid || 'not id selected'}
        </p>
      </div>
      <div className="flex items-center justify-center mb-5">
        <QrCodeIcon />
      </div>
    </div>
  );
}

export default Qr;
