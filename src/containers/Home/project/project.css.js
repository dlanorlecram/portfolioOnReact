import {mediaQueries} from '../../../data/responsive'
import glamorous from 'glamorous';

console.log(mediaQueries)

export const ContainerProject = glamorous.div({
  backgroundColor: 'rgb(255,184,48)',
  padding: '21px 15px'
})

export const FilterBlock = glamorous.div({
  width: 245,
  margin: '0 auto',
  '> p' : {
    margin: 0,
    color: '#7e6130',
    fontSize: 16,
    fontFamily:'"Overpass", sans-serif',
    marginBottom: 5
  }
})

//Gallery Projects

export const GalleryProjects = glamorous.div({
  minHeight: '292px',
  position: 'Relative',
  padding: '25px 0 1px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  margin: '0 auto',
  [mediaQueries.max767]: {
    maxWidth: 375
  },
  [mediaQueries.int768to1169]: {
    maxWidth: 900
  },
  [mediaQueries.min1170]: {
    maxWidth: 2000
  }
});

// Car

const headTitle = {
  '> h2': {
      maxHeight: '51px',
      opacity: 1,
      padding: '15px 25px 8px 0',
      transition: 'max-height 100ms cubic-bezier(.42,0,1,1), opacity 250ms 250ms',
      '>button':{
        fontSize:12,
        lineHeight:'28px',
        cursor: 'pointer',
        color: '#4A4A4A',
        float: 'right',
        fontFamily: '"Overpass", sans-serif',
      }
  }
}

const cardtitle = {
  '>div>.to-hide': {
    opacity: 0,
    transition: '200ms'
  }
}

const cardContent = {
  '>p': {
    maxHeight: '500px',
    transition: 'max-height 400ms cubic-bezier(.42,0,1,1)'
  }
}
export const Card = glamorous.div({
  backgroundColor: 'white',
  //width: 'calc(33% - 30px)',
  flex: '0 1 auto',
  borderRadius: 2,
  minHeight: 245,
  margin: '15px 0 30px',
  overflow: 'hidden',
  width: 'auto',
  maxWidth: 375,
  cursor: 'pointer',
  transition: '.9s, box-shadow .5s, opacity .75s',
  ':hover': {
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)'
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
  '.higherscreen': {
    position: 'absolute',
    maxWidth: 400,
    width: '55vw',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    ...headTitle,
    ...cardtitle,
    ...cardContent},
  [mediaQueries.min560]: {
    maxWidth: 'none',
    margin: '15px 15px 30px'
  },
  [mediaQueries.min1170]: {
    width: 'calc(25% - 30px)'
  },
  [mediaQueries.int768to960]: {
    width: 'calc(50% - 30px)'
  },
  [mediaQueries.int961to1169]: {
    width: 'calc(33.33% - 30px)'
  }
});


export const Description = glamorous.div({
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

export const CardTitle = glamorous.p({
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

export const CardContent = glamorous.p({
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


// export const CardBigTitle =glamorous.h2({
//   display: 'block',
//   fontFamily: '"Overpass",sans-serif',
//   color: '#6C6C6C',
//   textTransform: 'capitalize',
//   fontSize: 18,
//   margin: '15px 0 8px 25px',
//   fontWeight: 600
// })
