import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Outfit from '../components/Outfit';
import { IOutfit, IPiece } from '../appTypes/outfit.types';
import Modal from '../components/Modal';
import Row from '../components/Table/Row';

const outfitReducer = (state: IOutfit, action: any): IOutfit => {
  switch (action.type) {
    case 'ADD_HEAD':
      return {
        ...state,
        head: [...state.head, action.piece],
      };
    case 'REMOVE_HEAD':
      return {
        ...state,
        head: state.head.filter((piece) => piece.id !== action.piece.id),
      };
    case 'ADD_TOP':
      return {
        ...state,
        top: [...state.top, action.piece],
      };
    case 'REMOVE_TOP':
      return {
        ...state,
        top: state.top.filter((piece) => piece.id !== action.piece.id),
      };
    case 'ADD_BOTTOM':
      return {
        ...state,
        bottom: [...state.bottom, action.piece],
      };
    case 'REMOVE_BOTTOM':
      return {
        ...state,
        bottom: state.bottom.filter((piece) => piece.id !== action.piece.id),
      };
    case 'ADD_SHOE':
      return {
        ...state,
        shoe: [...state.shoe, action.piece],
      };
    case 'REMOVE_SHOE':
      return {
        ...state,
        shoe: state.shoe.filter((piece) => piece.id !== action.piece.id),
      };
    default:
      throw new Error();
  }
};

const Builder = () => {
  const [outfit, dispatch] = useReducer(outfitReducer, {
    id: uuidv4(),
    head: [],
    top: [],
    bottom: [],
    shoe: [],
  });
  
  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-2xl p-3">Outfit Builder</h1>
      <div className="flex flex-row justify-center w-full">
        <div className="left w-60 min-w-60 h-[33rem]">
          <Outfit outfit={outfit} />
        </div>
        <div className="px-5">
          <div className="join w-full">
            <input
              type="text"
              className="input join-item w-full"
              placeholder="Describe the look..."
            />
            <button className="btn join-item font-light">Find</button>
          </div>
          <div className="overflow-auto h-[30.5rem]">
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
              {outfit.head.map((piece) => (
                <Row piece={piece} handleRemove={() => dispatch({ type: "REMOVE_HEAD", piece: piece })}/>
              ))}
              {outfit.top.map((piece) => (
                <Row piece={piece} handleRemove={() => dispatch({ type: "REMOVE_TOP", piece: piece })}/>
              ))}
              {outfit.bottom.map((piece) => (
                <Row piece={piece} handleRemove={() => dispatch({ type: "REMOVE_BOTTOM", piece: piece })}/>
              ))}
              {outfit.shoe.map((piece) => (
                <Row piece={piece} handleRemove={() => dispatch({ type: "REMOVE_SHOE", piece: piece })}/>
              ))}
            </table>
          </div>
          <label htmlFor='my_modal' className="btn btn-secondary btn-xs rounded-xl">+ Add Clothing</label>
          <input type="checkbox" id="my_modal" className="modal-toggle" />
          <Modal id="my_modal" dispatch={dispatch}/>
          <div className="divider m-1 mt-1" />
          <div className="text-end">Total Price: $194.89 - $213.95</div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
