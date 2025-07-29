import React, { useEffect, useReducer, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditableOutfit from '../components/EditableOutfit';
import { IOutfitPiece } from '../appTypes/outfit.types';
import Modal from '../components/Modal';
import Row from '../components/Table/Row';
import {
  getPiecesFromOutfit,
  addPieceToOutfit,
  RemovePieceOnOutfit,
  UpdatePieceOnOutfit,
} from '../api/piece.api';
import { useParams } from 'react-router-dom';

const outfitReducer = (
  state: { outfitId: string; pieces: IOutfitPiece[] },
  action: { type: string; piece: IOutfitPiece },
): { outfitId: string; pieces: IOutfitPiece[] } => {
  switch (action.type) {
    case 'SET': {
      return {
        ...state,
        pieces: [...state.pieces, action.piece],
      };
    }
    case 'UPDATE': {
      UpdatePieceOnOutfit(
        action.piece.id,
        action.piece.posx,
        action.piece.posy,
        action.piece.width,
        action.piece.height,
      );
      return {
        ...state,
        pieces: state.pieces.map((piece) => (piece.id == action.piece.id ? action.piece : piece)),
      };
    }
    case 'ADD': {
      const id = uuidv4();
      addPieceToOutfit(id, state.outfitId, action.piece.id);
      return {
        ...state,
        pieces: [...state.pieces, action.piece],
      };
    }
    case 'REMOVE':
      RemovePieceOnOutfit(action.piece.id);
      return {
        ...state,
        pieces: state.pieces.filter((piece) => piece.id !== action.piece.id),
      };
    default:
      throw new Error();
  }
};

const Builder = () => {
  const hasRun = useRef(false);

  const { outfitId } = useParams<{ outfitId: string }>();

  if (!outfitId) {
    return <div>Error: outfit ID is required</div>;
  }

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const fetchPieces = async () => {
      const pieces = await getPiecesFromOutfit(outfitId);
      for (var piece of pieces) {
        dispatch({ type: 'SET', piece });
      }
    };

    fetchPieces();
  }, []);

  const [outfits, dispatch] = useReducer(outfitReducer, {
    outfitId: outfitId,
    pieces: [],
  });

  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-2xl p-3">Outfit Builder</h1>
      <div className="flex flex-row justify-center w-full">
        <EditableOutfit outfit={outfits} handleUpdate={dispatch} />
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
              {outfits.pieces.map((outfitPiece) => (
                <Row
                  key={outfitPiece.id}
                  piece={outfitPiece.piece}
                  handleRemove={() => dispatch({ type: 'REMOVE', piece: outfitPiece })}
                />
              ))}
            </table>
          </div>
          <label htmlFor="my_modal" className="btn btn-secondary btn-xs rounded-xl">
            + Add Clothing
          </label>
          <input type="checkbox" id="my_modal" className="modal-toggle" />
          <Modal id="my_modal" dispatch={dispatch} />
          <div className="divider m-1 mt-1" />
          <div className="text-end">Total Price: $194.89 - $213.95</div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
