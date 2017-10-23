import React from 'react';
import FollowLink from '../follow/index'
import { FooterTag, InnerFooter } from './footer.css.js'

export default function Footer(props) {
  const date = new Date();
  const yearCurrent = date.getFullYear();
  return(
    <FooterTag>
      <InnerFooter className='inner-footer'>
        <p>
          Site développé avec
          <i className='icon ion-heart'></i>
          par Ronald Marcel sur React {React.version} - © { yearCurrent } - Tous droits réservés.
        </p>
        <FollowLink />
      </InnerFooter>
    </FooterTag>
  );
}
