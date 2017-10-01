import glamorous from 'glamorous';

const mediaQueries = {
  hightscreen:'',
  desktop:'',
  tablet:'@media only screen and (min-width: 501px) and (max-width: 960px)',
  phone: '@media only screen and (max-width: 500px)',
  min560: '@media only screen and (min-width: 560px)',
  max767: '@media screen and (max-width: 767px)',
  int768to960: '@media screen and (min-width: 768px) and (max-width: 960px)',
  int768to1169: '@media screen and (min-width: 768px) and (max-width: 1169px)',
  int961to1169: '@media screen and (min-width: 961px) and (max-width: 1169px)',
  min1170: '@media screen and (min-width: 1170px)'
}

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
    marginBottom: 5,
    [mediaQueries.tablet]: {
      color:'red!important'
    }
  }
})

//Gallery Projects

export const GalleryProjects = glamorous.div({
  minHeight: '292px',
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

export const Card = glamorous.div({
  backgroundColor: 'white',
  width: 'calc(33% - 30px)',
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
    display: 'none'
  },
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
  fontSize: 18,
  fontFamily: '"Overpass", sans-serif',
  margin: 0,
  textTransform: 'capitalize'
})

export const CardContent = glamorous.p({
  height: 0,
  fontFamily: '"Overpass", sans-serif',
  fontSize: 13,
  padding: '0px 15px',
  transition: '.8s',
  margin: 0,
  overflow: 'hidden'
})

export const CardBigTitle =glamorous.h2({
  display: 'block',
  fontFamily: '"Overpass",sans-serif',
  color: '#6C6C6C',
  textTransform: 'capitalize',
  fontSize: 18,
  margin: '15px 0 8px 25px',
  fontWeight: 600
})
