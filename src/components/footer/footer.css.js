import glamorous from 'glamorous';

export const Fter = glamorous.footer({
  height: 70,
  width: '100%',
  backgroundColor: '#F9F9F9',
  position: 'relative'
})

const innerFooterP = {
  '> p': {
    color: '#949494',
    fontSize: 11,
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
    margin: '10px 0 0',
    padding: 0,
    display: 'inline-block',
    '> li': {
    display: 'inline',
    listStyle: 'none'
    }
  }
}

export const InnerFooter = glamorous.footer({
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  left: '50%',
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
