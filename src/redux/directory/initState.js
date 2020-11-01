import C from './constants';

const initState = {
  [C.PROPS.SECTIONS]: [
    {
      grid: 4,
      id: 'hats',
      title: 'HATS',
      imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
      linkURL: '/shop/hats',
    },
    {
      grid: 4,
      id: 'jackets',
      title: 'JACKETS',
      imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkURL: '/shop/jackets',
    },
    {
      grid: 4,
      id: 'sneakers',
      title: 'SNEAKERS',
      imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkURL: '/shop/jackets',
    },
    {
      grid: 6,
      id: 'women',
      title: 'WOMEN',
      imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
      linkURL: '/shop/women',
    },
    {
      grid: 6,
      id: 'men',
      title: 'MEN',
      imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
      linkURL: '/shop/men',
    },
  ],
};

export default initState;
