import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QrCodeIcon = () => {
  const qrCodeValue = 'https://example.com';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrCodeValue);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          border: '2px solid #03D69D',
          borderRadius: '10px',
          padding: '10px',
          display: 'inline-block',
        }}
      >
        <QRCode value={qrCodeValue} size={256} />
      </div>

      <div style={{ marginTop: '10px' }}>
        <button
          style={{
            backgroundColor: 'rgba(19, 58, 111, 255)',
            color: 'white',
            borderRadius: '5px',
            fontSize: '15px',
            width: '250px',
            height: '30px',
          }}
          onClick={copyToClipboard}
        >
          {'Clique para copiar QR CODE'}
        </button>
      </div>
    </div>
  );
};

export default QrCodeIcon;
