import React from 'react';
import './footer.css';
import FollowLink from '../follow/index'

export default function Footer(props) {
  const date = new Date();
  const yearCurrent = date.getFullYear();
  return(
    <footer>
      <div className='inner-footer'>
        <p>
          Fait main avec
          <i className='color-heart icon ion-heart'></i>
          , par moi-même © {yearCurrent}.
        </p>
        <FollowLink />
      </div>
    </footer>
  );
}
