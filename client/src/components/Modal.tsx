import AmazonImg from '../images/Amazon.png';
import { getPieces } from '../api/piece.api';
import { useEffect, useState } from 'react';
import { IOutfitPiece, IPiece } from '../appTypes/outfit.types';
import React from 'react';

const Modal = ({
  id,
  dispatch,
}: {
  id: string;
  dispatch: React.ActionDispatch<[action: { type: string; piece: IOutfitPiece }]>;
}) => {
  const [loading, setLoading] = useState(true);
  const [pieces, setPieces] = useState<IPiece[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPieces();
        setLoading(true);
        if (data) setPieces(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getShopLogo = (shop: string) => {
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
    <div className="modal" role="dialog">
      <div className="modal-box max-w-[53rem]">
        <div className="overflow-y-auto h-[30.5rem]">
          <table className="table table-md">
            {/* head */}
            <thead className="sticky top-0 bg-base-100 z-10">
              <tr className="shadow-md">
                <th>Type</th>
                <th>Selection</th>
                <th>Price</th>
                <th>Store</th>
                <th></th>
              </tr>
            </thead>
            {loading ? (
              <tbody>
                <tr>
                  <th>Loading...</th>
                </tr>
              </tbody>
            ) : (
              <tbody />
            )}
            {pieces.map((piece) => (
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
                      <div className="font-bold max-w-80 overflow-hidden w-80 leading-5">
                        {piece.title}
                      </div>
                    </div>
                  </td>
                  <td>{piece.price}</td>
                  <td>
                    <img src={getShopLogo(piece.shop)} alt="Shop" className="w-16 pt-1" />
                  </td>
                  <th>
                    <button
                      className="btn btn-secondary btn-xs w-16"
                      onClick={() =>
                        dispatch({
                          type: 'ADD',
                          piece: {
                            id: '',
                            posx: 0,
                            posy: 0,
                            width: '200px',
                            height: '200px',
                            piece: piece,
                          },
                        })
                      }
                    >
                      Add
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="text-sm p-1">End of List</div>
        </div>
      </div>
      <label className="modal-backdrop" htmlFor={id}>
        Close
      </label>
    </div>
  );
};

export default Modal;
