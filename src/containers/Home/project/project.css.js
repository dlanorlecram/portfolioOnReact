import { mediaQueries } from '../../../data/responsive'
import styled from '@emotion/styled'

/*
*   Effect
**/

const shadowEffect = {
  boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)'
}

/*
**/

export const ContainerProject = styled.section({
  backgroundColor: '#86BCE4',
  // backgroundColor: '#2C3590',
  // backgroundColor: 'rgb(255,184,48)',
  padding: '100px 15px 60px'
})

const groupButtonFilter = {
  '& .filters': {
    justifyContent: 'space-between',
    display: 'flex',
    '& .button-filter': {
      // color: '#F3C880',
      color: '#FECD0B',
      fontFamily: '"Overpass", sans-serif',
      fontSize: 14,
      padding: '2px 15px',
      //backgroundColor: '#69B7CE',
      backgroundColor: '#fff',
      fontWeight:700,
      border: 0,
      borderRadius: 1,
      '.filter-selected': {
        backgroundColor: '#F9A41B',
        fontWeight:900,
        color: '#fff'
        // backgroundColor: 'rgba(53,56,44,.9)'
      },
    }
  }
}

export const FilterBlock = styled.div({
  width: 245,
  margin: '0 auto',
  '> p' : {
    margin: 0,
    color: '#fff',
    fontWeight: 700,
    // color: '#7e6130',
    fontSize: 16,
    fontFamily:'"Overpass", sans-serif',
    marginBottom: 5
  },
  ...groupButtonFilter,
})

//Gallery Projects
export const GalleryProjects = styled.div({
  minHeight: '292px',
  position: 'Relative',
  padding: '25px 0 1px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 auto',
  [mediaQueries.max767]: {
    maxWidth: 375
  },
  [mediaQueries.int768to1169]: {
    maxWidth: 960
  },
  [mediaQueries.min1170]: {
    maxWidth: 1024
  }
});

const styleButtonClose = {
  '>button': {
    backgroundColor: 'transparent',
    fontSize:12,
    lineHeight:'28px',
    cursor: 'pointer',
    color: '#4A4A4A',
    float: 'right',
    fontFamily: '"Overpass", sans-serif',
    ' i': {
      pointerEvents: 'none',
    }
  }
}

const headTitle = {
  '> h2': {
      maxHeight: '51px',
      opacity: 1,
      padding: '15px 25px 8px 0',
      transition: 'max-height 100ms cubic-bezier(.42,0,1,1), opacity 250ms 250ms',
      ...styleButtonClose
  }
}

const cardtitle = {
  '> div >.to-hide': {
    opacity: 0,
    transition: '200ms'
  }
}

const cardContent = {
  '> p': {
    maxHeight: '500px',
    transition: 'max-height 400ms cubic-bezier(.42,0,1,1)'
  }
}

const higherScreen = {
  '.higherscreen': {
    ...shadowEffect,
    transition: 'box-shadow 500ms',
    '> div:last-child':{
      bottom: 0,
      transition: 'bottom 400ms'
    }
  },
}

const SubCardContenTitle = {
  ' span': {
    fontSize: 18,
    fontFamily: '"Overpass", sans-serif',
    margin: 0,
    textTransform: 'capitalize',
  }
}

const SubCardContenHeader = {
  '> div:first-of-type':{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#6C6C6C',
    margin: '15px  0px',
    ...SubCardContenTitle,
    ...styleButtonClose
  }
}


export const SubCardContent = styled.div({
  position: 'absolute',
  height: '100%',
  //bottom: 0,
  width: '100%',
  bottom: '-100%',
  zIndex: 3,
  fontFamily: '"Overpass", sans-serif',
  fontSize: 14,
  lineHeight: '19px',
  color: '#4A4A4A',
  backgroundColor: '#fff',
  //transform: 'translateY(100%)',
  padding: '0 15px',
  transition: 'bottom 300ms',
  ...SubCardContenHeader,
})

export const Picture = styled.picture({
  cursor: 'pointer'
})

export const Card = styled.div({
  position: 'relative',
  backgroundColor: 'white',
  //width: 'calc(33% - 30px)',
  flex: '0 1 auto',
  borderRadius: 2,
  minHeight: 245,
  margin: '15px 0 30px',
  overflow: 'hidden',
  width: 'auto',
  maxWidth: 375,
  transition: '.9s, box-shadow .5s, opacity .75s',
  ':hover': {
    ...shadowEffect
  },
  '.hide': {
    opacity: 0,
    display: 'none',
    transition: 'opacity 100ms, display 200ms 200ms'
  },
  '>h2': {
    fontFamily: '"Overpass",sans-serif',
    color: '#6C6C6C',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 600,
    maxHeight: 0,
    margin: '0 0 0 25px',
    padding: 0,
    opacity: 0,
    overflow: 'hidden',
    transition: 'padding 200ms 200ms cubic-bezier(.42,0,1,1) , max-height 200ms 200ms cubic-bezier(.42,0,1,1), opacity 150ms',
    //
    '>button': {
      float: 'right',
      height: 28,
      width: 28,
      opacity: 1,
      color: '#484848',
      fontSize: 14,
      backgroundColor: 'transparent',
      transition: 'opacity 150ms'
    }
  },
  '>p': {
    maxHeight: 0,
    transition: 'max-height 400ms cubic-bezier(.42,0,1,1)',
  },
  '.lowerscreen': {...headTitle, ...cardtitle, ...cardContent},
  ...higherScreen,
  [mediaQueries.min560]: {
    maxWidth: 'none',
    margin: '15px 15px 30px'
  },
  [mediaQueries.min1170]: {
    width: 'calc(33.33% - 30px)'
  },
  [mediaQueries.int768to960]: {
    width: 'calc(50% - 30px)'
  },
  [mediaQueries.int961to1169]: {
    width: 'calc(33.33% - 30px)'
  }
});


export const Description = styled.div({
  color: '#6C6C6C',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 49,
  padding: '0 12px',
  '>div>i': {
    margin: '0 5px'
  }
})

export const CardTitle = styled.p({
  opacity: 1,
  fontSize: 18,
  fontFamily: '"Overpass", sans-serif',
  margin: 0,
  textTransform: 'capitalize',
  transition: '300ms'
})

const linkCard = {
  display: 'table',
  margin: '10px auto 25px',
  textAlign: 'center',
  fontFamily: '"Overpass",sans-serif',
  fontSize: '14px',
  padding: '2px 15px',
  fontWeight: 400,
  textDecoration: 'none',
  backgroundColor: '#DFB354',
  color: '#fff',
  border: '1px solid transparent',
  ':hover,:active': {
    color: '#DFB354',
    border: '1px solid #DFB354',
    backgroundColor: 'transparent',
  }
}

export const CardContent = styled.p({
  fontFamily: '"Overpass", sans-serif',
  fontSize: 13,
  padding: '0px 15px',
  margin: 0,
  overflow: 'hidden',
  color: '#4A4A4A',
  [mediaQueries.max767]:{
    fontSize: 13
  },
  [mediaQueries.min768]:{
    fontSize: 14
  },
  '>a':{...linkCard},
})

export const BottomLink = styled.div({
  bottom: 0,
  position: 'absolute',
  right: 0,
  left: 0,
  transform: 'translateY(-100%)',
  display: 'flex',
  justifyContent: 'space-evenly',
  ' a': {
    textDecoration: 'none',
    fontSize: 24,
    color: '#949494',
    ':hover': {color: '#DFB354'}
  }
})

export const BottomLinkMobile = styled.span({
  display: 'flex',
  justifyContent: 'space-evenly',
  margin: '10px 0 15px',
  ' a': {
    textDecoration: 'none',
    fontSize: 24,
    color: '#949494',
    ':hover': {color: '#DFB354'}
  }
})

export const TitleGallery = styled.div({
  width: 1024,
  margin: '0 auto'
})

// export const CardBigTitle =styled.h2({
//   display: 'block',
//   fontFamily: '"Overpass",sans-serif',
//   color: '#6C6C6C',
//   textTransform: 'capitalize',
//   fontSize: 18,
//   margin: '15px 0 8px 25px',
//   fontWeight: 600
// })
