import glamorous from 'glamorous';
import Intro from './src/intro.jpg'
import { css } from 'glamor';

const bounceFirstCircle = css.keyframes({
  '0%, 50%': {transform:'scale(0)'},
  '100%': {transform:'scale(1)'}
});

const bounceInnerCircle = css.keyframes({
  '0%, 50%': {transform:'scale(0)', opacity:0},
  '90%': {transform:'scale(1.2)',opacity:1},
  '100%': {transform:'scale(1)'}
});

const translateTitre = css.keyframes({
  '0%, 50%': {transform:'translateY(25vh)', opacity:0},
  '65%': { transform:'translateY(-10px)', opacity:.4},
  '100%': {transform:'translateY(0)',opacity:1}
});

const translateSubtitle = css.keyframes({
  '0%, 50%': {transform:'translateX(-25vh)', opacity:0},
  '65%': { transform:'translateX(10px)', opacity:.4},
  '100%': {transform:'translateX(0)',opacity:1}
});

export const Picture = glamorous.div({
  backgroundColor: '#ffffff',
  height: 145,
  width: 145,
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

export const Titre = glamorous.h1({
  fontFamily: '"Overpass", sans-serif',
  fontWeight: 400,
  fontSize: 24,
  color: '#4A4A4A',
  textAlign: 'center',
  whiteSpace: 'pre',
  margin: 0,
  marginTop: 29,
  minHeight: 74,
  animation: `${translateTitre} 2.2s`
})

export const Subtitle = glamorous.p({
  fontFamily: '"Overpass", sans-serif',
  fontWeight: 400,
  fontStyle: 'italic',
  textAlign: 'center',
  color: 'rgba(0, 0, 0, .44)',
  maxWidth: 284,
  width: '100%',
  margin: 0,
  marginTop: 29,
  minHeight: 100,
  wordWrap: 'break-word',
  animation: `${translateSubtitle} 3s`,
  '> a': {
  color: '#dfB354',
  fontWeight: 600,
  textDecoration: 'none',
  fontStyle: 'normal'
  }
})