import C from './constants';

const initState = {
  [C.PROPS.COLLECTIONS]: {
    hats: {
      itemsOnGrid: 4,
      title: 'HATS',
      imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
      linkURL: 'hats',
      items: [
        {
          id: 'brown_brim',
          name: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          price: 25,
        },
        {
          id: 'blue_beanie',
          name: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          price: 18,
        },
        {
          id: 'brown_cowboy',
          name: 'Brown Cowboy',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          price: 35,
        },
        {
          id: 'grey_brim',
          name: 'Grey Brim',
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          price: 25,
        },
        {
          id: 'green_beanie',
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18,
        },
        {
          id: 'palm_tree_cap',
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14,
        },
        {
          id: 'red_beanie',
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18,
        },
        {
          id: 'wolf_cap',
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14,
        },
        {
          id: 'blue_snapback',
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16,
        },
      ],
    },
    jackets: {
      itemsOnGrid: 4,
      title: 'JACKETS',
      imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkURL: 'jackets',
      items: [
        {
          id: 'adidas_nmd',
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220,
        },
        {
          id: 'adidas_yeezy',
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280,
        },
        {
          id: 'black_converse',
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110,
        },
        {
          id: 'nike_white_airforce',
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160,
        },
        {
          id: 'nike_red_high_tops',
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160,
        },
        {
          id: 'nike_brown_high_tops',
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160,
        },
        {
          id: 'air_jordan_limited',
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190,
        },
        {
          id: 'timberlands',
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200,
        },
      ],
    },
    sneakers: {
      itemsOnGrid: 4,
      title: 'SNEAKERS',
      imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkURL: 'sneakers',
      items: [
        {
          id: 'black_jean_shearling',
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125,
        },
        {
          id: 'blue_jean_jacket',
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90,
        },
        {
          id: 'grey_jean_jacket',
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90,
        },
        {
          id: 'brown_shearling',
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165,
        },
        {
          id: 'tan_trench',
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185,
        },
      ],
    },
    women: {
      itemsOnGrid: 4,
      title: "WOMEN'S",
      imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
      linkURL: 'women',
      items: [
        {
          id: 'blue_tanktop',
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25,
        },
        {
          id: 'floral_blouse',
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20,
        },
        {
          id: 'floral_dress',
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80,
        },
        {
          id: 'red_dots_dress',
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80,
        },
        {
          id: 'striped_sweater',
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45,
        },
        {
          id: 'yellow_track_suit',
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135,
        },
        {
          id: 'white_blouse',
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20,
        },
      ],
    },
    men: {
      itemsOnGrid: 4,
      title: "MEN'S",
      imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
      linkURL: 'men',
      items: [
        {
          id: 'camo_down_west',
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325,
        },
        {
          id: 'floral_t_shirt',
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20,
        },
        {
          id: 'black_white_longsleeve',
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25,
        },
        {
          id: 'pink_t_shirt',
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25,
        },
        {
          id: 'jean_long_sleeve',
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40,
        },
        {
          id: 'burgundy_t_shirt',
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25,
        },
      ],
    },
  },
};

export default initState;
