
import React from 'react';
import randtoken from 'rand-token';
import QRCode from 'qrcode.react';
import { NavLink  } from "react-router-dom";

function QRcodes() {  
  const token =randtoken.generate(16);
  const navToken = `/plant/${token}`;
  const urlToken = `${process.env.REACT_APP_SITE_URL}plant/${token}`;
  
  console.log({urlToken});

  return (
    <div className="qrcodes">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          <QRCode value={urlToken}> </QRCode>
          <br></br>
          <a href={urlToken}>
              About
            </a>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">New QR codes</h1>
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