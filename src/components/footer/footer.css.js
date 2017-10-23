import glamorous from 'glamorous';

export const FooterTag = glamorous.footer({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#F9F9F9',
  position: 'relative',
  padding: '20px 15px'
})

const innerFooterP = {
  '> p': {
    color: '#949494',
    fontSize: 12,
    fontFamily: '"Overpass", sans-serif',
    fontWeight: 400,
    textAlign: 'center',
    margin: 0,
    '> i': {
      color: '#FF5C5C',
      fontSize: 13,
      margin: '0 3px',
    }
  }
}

const InnerFooterUl = {
  '> ul': {
    margin: '20px 0 0',
    padding: 0,
    display: 'inline-block',
    '> li': {
    display: 'inline',
    listStyle: 'none'
    }
  }
}

export const InnerFooter = glamorous.div({
  textAlign: 'center',
  // position: 'absolute',
  // top: '50%',
  // transform: 'translate(-50%, -50%)',
  // left: '50%',
  display: 'table',
  ...innerFooterP,
  ...InnerFooterUl,
  '& a': {
    textDecoration: 'none',
    color: '#949494',
    margin: '0 15px',
    ':hover':{
      color: '#ffc432'
    }
  }
})
