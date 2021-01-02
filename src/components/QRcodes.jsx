
import React from 'react';
import randtoken from 'rand-token';
import QRCode from 'qrcode.react';


function QRcodes() {  

  const token = process.env.REACT_APP_SITE_URL +'scan?id='+ randtoken.generate(16);

  console.log('token:',token);

  return (
    <div className="qrcodes">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <QRCode value={token} />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">New QR codes</h1>
            <p> 
              1. Print and Stick the new QR code on your plant pot 
            </p><p>
              2. Scan a first time in order start the story of your plant           
            </p><p>
              3. Scan each time you need to add a photo, a comment or follow-up all the history of your plant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default QRcodes