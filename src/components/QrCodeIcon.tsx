import React from 'react';
import QRCode from 'qrcode.react';

const QrCodeIcon = () => {
  return (
    <div
      style={{
        border: '2px solid #03D69D',
        borderRadius: '10px',
        padding: '10px',
        display: 'inline-block',
      }}
    >
      <QRCode value="https://example.com" size={256} />
    </div>
  );
};

export default QrCodeIcon;
