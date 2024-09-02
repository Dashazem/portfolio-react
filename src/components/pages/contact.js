import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contanctPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
    <div className='content-page-wrapper'>
      <div className='left-column'
        style={{
          background: "url(" + contanctPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className='right-column'>
        <div className='contact-bullet-points'>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className='text'>
              555-555-555
            </div>
          </div>

          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className='text'>
              dasha@gmail.com
            </div>
          </div>

          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className='text'>
              San Sebastián, ESP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}