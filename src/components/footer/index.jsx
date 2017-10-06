import React from 'react';
import FollowLink from '../follow/index'
import { Fter, InnerFooter } from './footer.css.js'

export default function Footer(props) {
  const date = new Date();
  const yearCurrent = date.getFullYear();
  return(
    <Fter>
      <InnerFooter className='inner-footer'>
        <p>
          Fait main avec
          <i className='icon ion-heart'></i>
          , par moi-même © { yearCurrent }.
        </p>
        <FollowLink />
      </InnerFooter>
    </Fter>
  );
}
