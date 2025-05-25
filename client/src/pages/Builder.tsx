import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Outfit from '../components/outift';
import { IOutfit, IPiece } from '../appTypes/outfit.types';
import AmazonImg from '../images/amazon.png';

const Builder = () => {
  const [outfit, setOutfit] = useState<IOutfit>({
    id: uuidv4(),
    head: [
      {
        id: uuidv4(),
        title: 'Flexfit Unisex Wooly Combed Twill Cap - 6277',
        description: 'Hat',
        price: '$17.99 - $28.99',
        shop: 'amazon',
        img_link: 'https://m.media-amazon.com/images/I/61pSuZP7SVL._AC_SX679_.jpg',
        shop_link: 'https://www.amazon.ca/Flexfit-Unisex-Wooly-Combed-Twill/dp/B07LB9LVGX?th=1&psc=1'
      }
    ],
    top: [
      {
        id: uuidv4(),
        title: 'Flexfit Unisex Wooly Combed Twill Cap - 6277',
        description: 'Hat',
        price: '$17.99 - $28.99',
        shop: 'amazon',
        img_link: 'https://m.media-amazon.com/images/I/61pSuZP7SVL._AC_SX679_.jpg',
        shop_link: 'https://www.amazon.ca/Flexfit-Unisex-Wooly-Combed-Twill/dp/B07LB9LVGX?th=1&psc=1'
      },
      {
        id: uuidv4(),
        title: 'Flexfit Unisex Wooly Combed Twill Cap - 6277',
        description: 'Hat',
        price: '$17.99 - $28.99',
        shop: 'amazon',
        img_link: 'https://m.media-amazon.com/images/I/61pSuZP7SVL._AC_SX679_.jpg',
        shop_link: 'https://www.amazon.ca/Flexfit-Unisex-Wooly-Combed-Twill/dp/B07LB9LVGX?th=1&psc=1'
      },
      {
        id: uuidv4(),
        title: 'Flexfit Unisex Wooly Combed Twill Cap - 6277',
        description: 'Hat',
        price: '$17.99 - $28.99',
        shop: 'amazon',
        img_link: 'https://m.media-amazon.com/images/I/61pSuZP7SVL._AC_SX679_.jpg',
        shop_link: 'https://www.amazon.ca/Flexfit-Unisex-Wooly-Combed-Twill/dp/B07LB9LVGX?th=1&psc=1'
      }
    ],
    bottom: [
      {
        id: uuidv4(),
        title: 'Flexfit Unisex Wooly Combed Twill Cap - 6277',
        description: 'Hat',
        price: '$17.99 - $28.99',
        shop: 'amazon',
        img_link: 'https://m.media-amazon.com/images/I/61pSuZP7SVL._AC_SX679_.jpg',
        shop_link: 'https://www.amazon.ca/Flexfit-Unisex-Wooly-Combed-Twill/dp/B07LB9LVGX?th=1&psc=1'
      },
      {
        id: uuidv4(),
        title: 'Flexfit Unisex Wooly Combed Twill Cap - 6277',
        description: 'Hat',
        price: '$17.99 - $28.99',
        shop: 'amazon',
        img_link: 'https://m.media-amazon.com/images/I/61pSuZP7SVL._AC_SX679_.jpg',
        shop_link: 'https://www.amazon.ca/Flexfit-Unisex-Wooly-Combed-Twill/dp/B07LB9LVGX?th=1&psc=1'
      }
    ],
    shoe: [
      {
        id: uuidv4(),
        title: 'Flexfit Unisex Wooly Combed Twill Cap - 6277',
        description: 'Hat',
        price: '$17.99 - $28.99',
        shop: 'amazon',
        img_link: 'https://m.media-amazon.com/images/I/61pSuZP7SVL._AC_SX679_.jpg',
        shop_link: 'https://www.amazon.ca/Flexfit-Unisex-Wooly-Combed-Twill/dp/B07LB9LVGX?th=1&psc=1'
      }
    ]
  }); 

  let getShopLogo = (shop: String) => {
    switch(shop) {
      case 'amazon': {
        return AmazonImg;
      }
      default: {
        console.log('Non-existant shop');
      }
    }
  }

  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="">Outfit Builder</h1>
      <div className="flex flex-row justify-center w-full">
        <div className="left w-60 min-w-60 h-[33rem]">
          <Outfit outfit={outfit} />
        </div>
        <div className="flex flex-col justify-start items-center">
          <div className="join w-1/2">
            <input type="text" className="input join-item" placeholder="Describe the look..." />
            <button className="btn join-item font-light">Find</button>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-md">
              {/* head */}
              <thead>
                <tr className='border-(length: 1px) border-[#443627]/50'>
                  <th>Type</th>
                  <th>Selection</th>
                  <th>Price</th>
                  <th>Store</th>
                </tr>
              </thead>
              {[...outfit.head, ...outfit.top, ...outfit.bottom, ...outfit.shoe].map((piece) => (
                <tbody>
                  <tr className='border-b-0 border-(length: 1px) border-[#443627]/50'>
                    <th>
                      <label>
                        {piece.description}
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={piece.img_link}
                              alt={piece.description} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold max-w-80 overflow-hidden">{piece.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {piece.price}
                    </td>
                    <td>
                      <img src={getShopLogo(piece.shop)} className='w-16'/>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default Builder;
