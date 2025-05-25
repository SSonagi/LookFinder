import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Outfit from '../components/outift';
import { IOutfit, IPiece } from '../appTypes/outfit.types';
import AmazonImg from '../images/Amazon.png';
import ShoppingBagImg from '../images/ShoppingBag.png';
import RemoveImg from '../images/Remove.png';

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
      <h1 className="text-2xl p-3">Outfit Builder</h1>
      <div className="flex flex-row justify-center w-full">
        <div className="left w-60 min-w-60 h-[33rem]">
          <Outfit outfit={outfit} />
        </div>
        <div className="px-5">
          <div className="join w-full">
            <input type="text" className="input join-item w-full" placeholder="Describe the look..." />
            <button className="btn join-item font-light">Find</button>
          </div>
          <div className="overflow-auto h-[30.5rem]">
            <table className="table table-md">
              {/* head */}
              <thead className='sticky top-0 bg-base-100 z-10'>
                <tr className='shadow-md'>
                  <th>Type</th>
                  <th>Selection</th>
                  <th>Price</th>
                  <th>Store</th>
                  <th></th>
                </tr>
              </thead>
              {[...outfit.head, ...outfit.top, ...outfit.bottom, ...outfit.shoe].map((piece) => (
                <tbody>
                  <tr className='border-b-2 border-[#443627]/10'>
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
                      <img src={getShopLogo(piece.shop)} className='w-16 pt-1'/>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs mr-3" onClick={() => window.open(piece.shop_link)}>
                        <img src={ShoppingBagImg} className='w-5'/>
                      </button>
                      <button className="btn btn-ghost btn-xs">
                        <img src={RemoveImg} className='w-5'/>
                      </button>
                    </th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <button className='btn btn-secondary btn-xs rounded-xl'>+ Add Clothing</button>
          <div className='divider m-1 mt-1'/>
          <div className='text-end'>Total Price: $194.89 - $213.95</div>
        </div>
      </div>
    </div>
  );
};  

export default Builder;
