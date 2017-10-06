import glamorous from 'glamorous';
import { mediaQueries } from './../../data/responsive'

const NavtransitionStyle = {
  '.transition-style': {
    height: 50,
    backgroundColor: '#FFC530',
    '& a':{
      color: '#fff',
      ':hover': {
        color: 'rgba(53,56,44,.9)',
        fontWeight: 600
      }
    }
  },
}

export const Nav = glamorous.nav({
  [mediaQueries.max959]:{
    minHeight: '58',
    width: '100%',
    paddingBottom: '15px',
    zIndex: 1,
    position: 'fixed',
    backgroundColor: '#FFC530',
    // backgroundColor:'rgb(255,184,48)',
    '> div:last-child':{
      display: 'block'
    },
    '> div:first-child a': {
      display: 'none'
    }
  },
  [mediaQueries.min960]: {
    width: '100%',
    position: 'fixed',
    zIndex: 10,
    height: 70,
    backgroundColor:'transparent',
    transition: 'height 400ms, background-color 500ms',
    ...NavtransitionStyle,
    '> div:first-child a': {
      fontWeight: 600
    },
    '> div:nth-child(n+2)': {
      position: 'absolute',
      top: '50%',
      right: 0,
      marginRight: 50,
      transform:'translateY(-50%)'
    },
    '> div:last-child':{ display: 'none' }
  }
}),

MenuResponsive = glamorous.div({
  [mediaQueries.max959]: {
    position: 'relative',
    overflow:'hidden',
    height: 0,
    marginBottom: '15px',
    transition: 'height 300ms 300ms cubic-bezier(.42,0,1,1)',
    '.expanded': {
      height: '54px',
      transition: 'height 300ms cubic-bezier(.42,0,1,1)',
      '& ul > li' :{
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'transform 450ms cubic-bezier(.42,0,1,1),opacity 700ms cubic-bezier(0,0,.58,1)'
      },
    }
  }
}),

ListItemMenu = glamorous.li({
  display: 'inline-block',
  margin: '0 10px',
  fontFamily: "'Overpass', sans-serif",
  textTransform: 'uppercase',
  '& a':{
    textDecoration: 'none',
    transition: 'color 300ms',
    ':hover': {
      color: '#dfB354',
      transition: 'color 300ms'
    }
  },
  [mediaQueries.min960]: {
    fontSize: 14,
    fontWeight: 600,
    '& a': {
      color: '#6C6C6C',
    }

  },
  [mediaQueries.max959]: {
    fontWeight: 900,
    fontSize: 13,
    transform: 'translateY(-20px)',
    opacity: 0,
    transition: 'transform 300ms 150ms cubic-bezier(.15,.99,.32,1), opacity 300ms cubic-bezier(0,0,.58,1)',
    '& a':{
      color: '#fff'
    }
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

const barBeforeAfter = {
  ':before,:after': {
    content: ' ',
    height: 4,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute'
  },
  ':before': transition('top','-10', false),
  ':after': transition('bottom','-10', false),
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
  ...barBeforeAfter,
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

export const LogoName = glamorous.div({
  fontFamily: '"Overpass",sans-serif',
  fontSize: 18, position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  marginLeft: 50,
  '> .hidden':{
    color: '#fff',
    opacity: 0,
    transition: 'opacity 300ms'
  },
  '> a': {
    textDecoration: 'none',
    opacity: 1,
    transition: 'opacity 300ms'
  }
})

export const Ul = glamorous.ul({
  padding: 0,
  margin: 'auto',
  [mediaQueries.max959]: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'table',
    position: 'absolute'
  },
  [mediaQueries.min960]: {

  }
})
