import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Cta from '../components/Cta';
import Body from '../components/Body';

function Selection() {
  return (
    <div className="mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-4 py-6 text-black shadow-2xl">
      <div className="text-center mb-5">
        <Header />
        <Cta title="Joao, como voce quer pagar?" />
      </div>
      <div className="mb-5">
        <Body />
      </div>
      <div className="flex items-center justify-center mb-5">
        <img src="src/assets/images/logo2.svg"/>
      </div>

      <div>
        <Link to="/qr" className="btn btn-info">
          qr-code scan
        </Link>
      </div>
    </div>
  );
}

export default Selection;
