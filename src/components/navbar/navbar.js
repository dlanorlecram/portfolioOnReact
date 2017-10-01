import glamorous from 'glamorous';

export const Nav = glamorous.nav({
  position: 'fixed',
  minHeight: '58',
  width: '100%',
  zIndex: 1,
  paddingBottom: '15px',
}, ({ isWindowFull }) =>({
  backgroundColor: isWindowFull ? 'transparent' : 'rgb(255,184,48)'
})),

BoxMenuHide = glamorous.div({
  backgroundColor: 'inherit',
  position: 'relative',
  overflow:'hidden',
  height: 0,
  marginBottom: '15px',
  transition: 'height 300ms 300ms cubic-bezier(.42,0,1,1)',
  '.expanded': {
    height: '54px',
    transition: 'height 300ms cubic-bezier(.42,0,1,1)',
    '>ul>li' :{
      transform: 'translateY(0)',
      opacity: 1,
      transition: 'transform 450ms cubic-bezier(.42,0,1,1),opacity 700ms cubic-bezier(0,0,.58,1)'
    },
  }
}),

ListItemMenu = glamorous.li({
  display: 'inline-block',
  margin: '0 10px',
  fontFamily: "'Overpass', sans-serif",
  fontWeight: 900,
  fontSize: 13,
  textTransform: 'uppercase',
  transform: 'translateY(-20px)',
  opacity: 0,
  transition: 'transform 300ms 150ms cubic-bezier(.15,.99,.32,1), opacity 300ms cubic-bezier(0,0,.58,1)',
  //
  '>a':{
    color: '#fff'
  }
});

// Factorisation de la séquence

const transition = function(direction, distance, inverse, rotate){
  return {
    [direction]: distance,
    transform: rotate === undefined ? null : `rotate(${rotate}deg)`,
    transition: `${direction} ${!inverse? '300ms 300ms': '300ms'} cubic-bezier(0.23, 1, 0.32, 1), transform ${!inverse? '300ms': '300ms 300ms'} cubic-bezier(0.23, 1, 0.32, 1)`
  }
}

export const Bar = glamorous.div({
  backgroundColor: '#fff',
  height: 4,
  width: '100%',
  top: 0,
  bottom: 0,
  position: 'absolute',
  margin: 'auto',
  transition: 'all 0ms 300ms',
  ':before,:after': {
    content: ' ',
    height: 4,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute'
  },
  ':before': transition('top','-10', false),
  ':after': transition('bottom','-10', false),
  ".animated":{
    background: 'transparent',
    ':before': transition('top','0', true, '45'),
    ':after': transition('bottom','0', true, '-45')
  },
}),

HamburgerToggle = glamorous.div({
  width: 35,
  height: 30,
  marginLeft: 30,
  cursor:'pointer',
  position: 'relative',
  '>span':{
    fontFamily: '"Overpass", sans-serif',
    fontSize: 14,
    fontWeight: 900,
    marginLeft: 50,
    lineHeight: '30px',
    color: '#fff'
  }
})

export const Ul = glamorous.ul({
  padding: 0,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  margin: 'auto',
  display: 'table',
  position: 'absolute'
})
