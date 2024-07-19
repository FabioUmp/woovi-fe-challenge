import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Cta from '../components/Cta';
import { QrCodeIcon } from '../components/QrCodeIcon';

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
      <QrCodeIcon />
      <div className="my-3 grid grid-cols-5 items-center gap-4 px-4">
        <a href="https://twitter.com/sahilnetic">
          <button className="fixed sticky h-12 w-12 transform animate-bounce rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img
              className="w-12 rounded-full"
              alt="profile pic"
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            />
          </button>
        </a>

        <a href="https://twitter.com/sahilnetic">
          <button className="fixed sticky h-12 w-12 transform rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img
              className="w-12 rounded-full"
              alt="profile pic"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </button>
        </a>

        <a href="https://twitter.com/sahilnetic">
          <button className="fixed sticky h-12 w-12 transform rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img
              className="w-12 rounded-full"
              alt="profile pic"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </button>
        </a>

        <a href="https://twitter.com/sahilnetic">
          <button className="fixed sticky h-12 w-12 transform rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img
              className="w-12 rounded-full"
              alt="profile pic"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </button>
        </a>

        <a href="https://twitter.com/sahilnetic">
          <button className="fixed sticky h-12 w-12 transform rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:bg-black hover:text-white">
            <img
              className="w-12 rounded-full"
              alt="profile pic"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </button>
        </a>
      </div>

      <a href="https://twitter.com/sahilnetic">
        <div className="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl">
          <div className="flex items-center">
            <img
              alt="photo"
              className="w-10 rounded-full"
              src="https://icon-library.com/images/2018/2298785_oreos-oreo-cookie-adult-costume-hd-png-download.png"
            />
            <div className="ml-2">
              <div className="text-xs font-semibold">How to get free oreo</div>
              <div className="flex text-xs font-light text-gray-600">
                yourpal.com
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </a>

      <a href="https://www.buymeacoffee.com/sahilnetic">
        <div className="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl">
          <div className="flex items-center">
            <img
              alt="photo"
              className="w-10 rounded-full"
              src="https://icon-library.com/images/2018/2298785_oreos-oreo-cookie-adult-costume-hd-png-download.png"
            />
            <div className="ml-2">
              <div className="text-xs font-semibold">How to get free oreo</div>
              <div className="flex text-xs font-light text-gray-600">
                yourpal.com
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </a>

      <a href="https://www.buymeacoffee.com/dashboard">
        <div className="my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-black px-4 shadow-xl">
          <div className="flex items-center">
            <img
              alt="photo"
              className="w-10 rounded-full"
              src="https://icon-library.com/images/2018/2298785_oreos-oreo-cookie-adult-costume-hd-png-download.png"
            />
            <div className="ml-2">
              <div className="text-xs font-semibold">How to get free oreo</div>
              <div className="flex text-xs font-light text-gray-600">
                yourpal.com
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div>
        <Link to="/credit-card" className="btn btn-info">
          credit card
        </Link>
      </div>
    </div>
  );
}

export default Qr;
