import { mediaQueries } from '../../../data/responsive'
import styled from '@emotion/styled'

export const ContainerAbout = styled.section({
  position: 'relative',
  //padding: '80px 15px 28px',
  padding: '160px 15px 60px',
  margin: '0 auto',
  [mediaQueries.max767]: {
    minWidth: 320,
    maxWidth: 560,
  },
  [mediaQueries.min768]: {
    minWidth: 561,
    maxWidth: 900,
  }
});

export const BackgroundTitle = styled.p({
  color: 'rgba(0, 0, 0, .05)',
  fontWeight: 900,
  position: 'absolute',
  //top: 28,
  top: 108,
  left: 26,
  margin: 0,
  fontSize: 64,
  [mediaQueries.max959]: {
    fontSize: 64,
  },
  [mediaQueries.min960]: {
    //fontSize: 61,
  }
});

const ContentAboutH2 = {
  '>h2': {
    color: 'rgba(0, 0, 0, 0.57)',
    fontFamily: '"Overpass", sans-serif',
    fontWeight: 400,
    letterSpacing: .4,
    margin: 0,
    fontSize: 20,
    // [mediaQueries.max959]: {
    //   fontSize: 20,
    // },
    // [mediaQueries.min960]: {
    //   //fontSize: 18,
    // }
  }
}

const ContentAboutP = {
  '& p': {
    fontFamily: '"Overpass", sans-serif',
    color: '#4A4A4A',
    margin: '16px 0 35px 10px',
    fontSize: 16,
    fontWeight: 300,
    [mediaQueries.max959]: {
      // fontSize: 16,
      // fontWeight: 300
    },
    [mediaQueries.min768]: {
      maxWidth: '560px'
    },
  }
}

export const ContentAbout = styled.div({
  ...ContentAboutH2,
  ...ContentAboutP
});

const controlPercent = {
  '>span': {

    fontFamily: '"Roboto Mono", monospace',
    fontWeight: 100,
    color: '#DFB354',
    display: 'inline-block',
    width: '50%',
    paddingLeft: 10,
    [mediaQueries.max767]:{
      fontSize: 78,
    },
    [mediaQueries.min768]:{
      fontSize: 90,
      textAlign: 'right'
    }
  }
}

const buttonSkill = {
  '> .button-skill': {
    display: 'list-item',
    fontFamily: '"Overpass", sans-serif',
    fontSize: '18px',
    fontWeight: 400,
    color: 'rgba(74, 74, 74, 1)',
    backgroundColor: 'transparent',
    margin: '15px 0 15px auto',
    '.button-selected': {
      color: '#DFB354',
      fontSize: '22px',
      fontWeight: 900
    }
  }
}

export const ControlSkill = styled.div({
  ...controlPercent,
  '& .container-buttons': {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'middle',
    ...buttonSkill,
  }
})

/*
*  V2
**/

const skillTitle = {
  ' h3': {
    color: 'rgba(0, 0, 0,.57)',
    fontWeight: 400,
    fontSize: 20,
    letterSpacing: 0.4
  }
}

const groupSkill = {
  ' ul': {
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '0 10px',
    ' li':{
      margin: '10px 0',
      flex: '1 0 auto',
      maxWidth: 345,
      width: '100%'
    }
  }
}

const ItemSkill = {
  ' p': {
    margin: '0 0 10px',
    fontWeight: 400,
    fontSize: 14
  },
  ' p~div': {
    height: 4,
    width: '100%',
    maxWidth: 345,
    backgroundColor: 'rgba(157, 148, 146,.2)',
  },
  ' p~div>div': {
    backgroundColor: '#fecc0d',
    width: '51%',
    height: '100%',
    verticalAlign: 'top',
    display: 'inline-block',
    transition: 'width 400ms 400ms',
    '.disable': {
      width: '0!important'
    }
  },
  ' .jauge-end': {
    ':before': {
      content:'""',
      backgroundColor: '#fecc0d',
      position: 'absolute',
      height: 8,
      width: 8,
      borderRadius: '100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }
}

export const SkillContainer = styled.div({
    fontFamily: '"Overpass", sans-serif',
    ...skillTitle,
    ...groupSkill,
    ...ItemSkill
})
