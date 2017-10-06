import { mediaQueries } from '../../../data/responsive'
import glamorous from 'glamorous';

export const ContainerAbout = glamorous.div({
  position: 'relative',
  padding: '80px 15px 28px',

});

export const BackgroundTitle = glamorous.p({
  color: 'rgba(0, 0, 0, .05)',
  fontWeight: 900,
  position: 'absolute',
  top: 30,
  left: 26,
  margin: 0,
  [mediaQueries.max959]: {
    fontSize: 61,
  },
  [mediaQueries.min960]: {
    fontSize: 61,
  }
});

const ContentAboutH2 = {
  '>h2': {
    color: 'rgba(0, 0, 0, 0.57)',
    fontFamily: '"Overpass", sans-serif',
    fontWeight: 400,
    letterSpacing: .4,
    margin: 0,
    [mediaQueries.max959]: {
      fontSize: 18,
    },
    [mediaQueries.min960]: {
      fontSize: 18,
    }
  }
}

const ContentAboutP = {
  '>p': {
    fontFamily: '"Overpass", sans-serif',
    color: '#4A4A4A',
    margin: '16px 0 35px 10px',
    [mediaQueries.max959]: {
      fontSize: 13,
    },
    [mediaQueries.min960]: {
      fontSize: 13,
    },
  }
}

export const ContentAbout = glamorous.div({
  ...ContentAboutH2,
  ...ContentAboutP
});

const controlPercent = {
  '>span': {
    fontSize: 72,
    fontFamily: '"Roboto Mono", monospace',
    fontWeight: 100,
    color: '#DFB354',
    display: 'inline-block',
    width: '50%',
    paddingLeft: 10
  }
}

const buttonSkill = {
  '> .button-skill': {
    display: 'list-item',
    fontFamily: '"Overpass", sans-serif',
    fontSize: 14,
    fontWeight: 400,
    color: 'rgba(74, 74, 74, 1)',
    backgroundColor: 'transparent',
    margin: '15px 0 15px auto',
    '.button-selected': {
      color: '#DFB354',
      fontSize: 18,
      fontWeight: 900
    }
  }
}

export const ControlSkill = glamorous.div({
  ...controlPercent,
  '& .container-buttons': {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'middle',
    ...buttonSkill,
  }
})
