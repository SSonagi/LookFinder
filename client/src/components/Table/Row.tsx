import { IPiece } from '../../appTypes/outfit.types';
import React from 'react';

import AmazonImg from '../../images/Amazon.png';
import ShoppingBagImg from '../../images/ShoppingBag.png';
import RemoveImg from '../../images/Remove.png';

const Row = ({
  piece,
  handleRemove,
}: {
  piece: IPiece;
  handleRemove: React.ActionDispatch<[]>;
}) => {
  let getShopLogo = (shop: string) => {
    switch (shop) {
      case 'amazon': {
        return AmazonImg;
      }
      default: {
        console.log('Non-existant shop');
      }
    }
  };

  return (
    <tbody key={piece.id}>
      <tr className="border-b-2 border-[#443627]/10">
        <th>
          <label>{piece.description}</label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="border-[#443627] border-opacity-40 border-2 h-12 w-12">
                <img src={piece.img_link} alt={piece.description} />
              </div>
            </div>
            <div>
              <div className="font-bold max-w-80 overflow-hidden">{piece.title}</div>
            </div>
          </div>
        </td>
        <td>{piece.price}</td>
        <td>
          <img src={getShopLogo(piece.shop)} alt="Shop" className="w-16 pt-1" />
        </td>
        <th>
          <button
            className="btn btn-ghost btn-xs mr-3"
            onClick={() => window.open(piece.shop_link)}
          >
            <img src={ShoppingBagImg} alt="Shop Link" className="w-5" />
          </button>
          <button className="btn btn-ghost btn-xs" onClick={() => handleRemove()}>
            <img src={RemoveImg} alt="Remove Piece" className="w-5" />
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Row;
