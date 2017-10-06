const media = '@media only screen and '
const
  min560 = `${media}(min-width: 560px)`,
  max767 = `${media}(max-width: 767px)`,
  min768 = `${media}(min-width: 768px)`,
  max959 = `${media}(max-width: 959px)`,
  min960 = `${media}(min-width: 960px)`,
  min1170 = `${media}(min-width: 1170px)`,
  int768to960 = `${media}(min-width: 768px) and (max-width: 960px)`,
  int768to1169 = `${media}(min-width: 768px) and (max-width: 1169px)`,
  int961to1169 = `${media}(min-width: 961px) and (max-width: 1169px)`;

export const mediaQueries = {
  min560,
  max767,
  min768,
  max959,
  min960,
  min1170,
  int768to960,
  int768to1169,
  int961to1169
}
