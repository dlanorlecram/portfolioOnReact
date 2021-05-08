import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import Intro from '../src/intro.jpg'
import { mediaQueries } from '../../../data/responsive'

export const ContainerIntro = styled.section({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  //background: 'linear-gradient(#FDE897,#FDE897,#FFF)'
  //backgroundColor: '#fafaf0',
  backgroundColor: '#FECD0B',
  // backgroundColor: '#F7C76A',
  // backgroundColor: '#F9CA6B',
  //backgroundColor: '#E16D53',
  //backgroundImage: `url(${LowBack})`
  // backgroundColor: '#f9f9f9'
  ':after': {
    content: '""',
    //backgroundImage: `url(${bottomIntro})`,
    width: '100%'
  }
})

const bounceFirstCircle = keyframes({
  '0%, 50%': {transform:'scale(0)'},
  '100%': {transform:'scale(1)'}
});

const bounceInnerCircle = keyframes({
  '0%, 50%': {transform:'scale(0)', opacity:0},
  '90%': {transform:'scale(1.2)',opacity:1},
  '100%': {transform:'scale(1)'}
});

const translateTitre = keyframes({
  '0%, 50%': { transform:'translateY(25vh)', opacity: 0 },
  '65%': { transform:'translateY(-10px)', opacity:.4 },
  '100%': { transform:'translateY(0)',opacity: 1 }
});

const translateSubtitle = keyframes({
  '0%, 50%': { transform:'translateX(-25vh)', opacity: 0 },
  '65%': { transform:'translateX(10px)', opacity: .4 },
  '100%': { transform:'translateX(0)',opacity: 1 }
});

export const Picture = styled.div({
  backgroundColor: '#ffffff',
  // height: 145,
  // width: 145,
  [mediaQueries.min768]:{
    height: 190,
    width: 190,
  },
  [mediaQueries.max767]:{
    height: 145,
    width: 145,
  },
  boxShadow: '0 0 7px rgba(0, 0, 0, 0.3)',
  borderRadius: '100%',
  padding: 6,
  animationIterationCount: 1,
  animationFillMode: 'both',
  animation: `${bounceFirstCircle} 500ms ease-in-out`,
  '> div': {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${Intro})`,
    backgroundSize: 'cover',
    borderRadius: '100%',
    filter: 'grayscale(.5) contrast(.88)',
    animationIterationCount: 1,
    animationFillMode: 'both',
    animation: `${bounceInnerCircle} 1s ease-in-out`,
  }
})

export const Title = styled.h1({
  fontFamily: '"Overpass", sans-serif',
  fontWeight: 900,
  color: '#263645',
  textAlign: 'center',
  whiteSpace: 'pre',
  margin: 0,
  marginTop: 29,
  minHeight: 74,
  animation: `${translateTitre} 2.2s`,
  [mediaQueries.max959]:{fontSize: 26},
  [mediaQueries.min960]:{fontSize: 35}
})

export const Subtitle = styled.p({
  fontFamily: '"Overpass", sans-serif',
  fontWeight: 400,
  //fontStyle: 'italic',
  textAlign: 'center',
  color: '#263645',
  maxWidth: 410,
  margin: '29px 15px 0',
  minHeight: 100,
  wordWrap: 'break-word',
  [mediaQueries.max959]:{fontSize: 18},
  [mediaQueries.min960]:{fontSize: 20},
  animation: `${translateSubtitle} 3s`,
  '> a': {
    color: '#fff',
    position: 'relative',
    // color: '#2C3590',
    fontWeight: 600,
    textDecoration: 'none',
    fontStyle: 'normal',
    ':hover': {
      color: '#fff',
      ':after': {
        content: '""',
        width: '100%',
        borderBottom: '1px dotted #fff',
        position: 'absolute',
        left: 0,
        bottom: '-1px',
      }
    }
  }
})
