import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Cta from '../components/Cta';
import QrCodeIcon from '../components/QrCodeIcon';
import BodyQR from '../components/BodyQr';
import List from '../components/List';

function Qr() {
  const { uuid } = useParams();
  const uuidToPass = uuid ? uuid : '';
  return (
    <div className="mx-20 flex items-center justify-center mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-4 py-6 text-black shadow-2xl">
      <div className="text-center">
        <Header />
        <Cta title="joao, pague a entrada pix" />
        <p className="pt-2 text-lg font-medium">QR</p>
        <p className="text-sm font-extrabold text-gray-900"></p>
      </div>
      <div className="text-center mt-4">
        <QrCodeIcon />
        <div className="flex items-center justify-center mt-2 flex-col">
          <p className="text-gray-400 text-sm font-light">
            Prazo de pagamento:{' '}
            <span className="font-bold text-black block">
              15/12/2021 - 08:17
            </span>
          </p>
          <div>
            <BodyQR uuid={uuidToPass} />
          </div>
        </div>
      </div>
      <div className="text-center mt-4"></div>
      <List />
      <p className="text-gray-400 text-sm font-light mt-2">Identificador:</p>
      <p className="text-sm">{uuid || 'ID não selecionado'}</p>
      <div className="flex items-center justify-center mb-5">
        <img src="src/assets/images/logo2.svg" />
      </div>
      <Link to="/credit-card" className="btn btn-info">
        Voltar
      </Link>
    </div>
  );
}

export default Qr;
