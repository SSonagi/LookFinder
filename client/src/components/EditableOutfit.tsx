import { IOutfitPiece } from '../appTypes/outfit.types';
import { Rnd } from 'react-rnd';
import React, { useEffect, useRef, useState } from 'react';
import Piece from './Piece';
import { getOutfitTitle, updateOutfitTitle } from '../api/outfit.api';

const EditableOutfit = ({
  outfit,
  handleUpdate,
}: {
  outfit: { outfitId: string; pieces: IOutfitPiece[] };
  handleUpdate: React.ActionDispatch<[action: { type: string; piece: IOutfitPiece }]>;
}) => {
  const hasRun = useRef(false);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
      if (hasRun.current) return;
      hasRun.current = true;

      const fetchPieces = async () => {
        const fetchedTitle = await getOutfitTitle(outfit.outfitId);
        setTitle(fetchedTitle);
      };

      fetchPieces();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateOutfitTitle(outfit.outfitId, title);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [title])

  return (
    <div className="left w-60 min-w-60 h-[33rem]">
      <div className="w-full h-full border-[#443627] border-opacity-40 border-2 rounded-lg flex flex-col justify-start items-start">
        <div className="w-full flex justify-center pt-2">
          <input type="text" className="input input-ghost input-sm text-center text-xl w-3/4 h-6" defaultValue={title} onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        {outfit.pieces.map((outfitPiece) => (
          <Rnd
            key={outfitPiece.id}
            default={{
              x: outfitPiece.posx,
              y: outfitPiece.posy,
              width: outfitPiece.width,
              height: outfitPiece.height,
            }}
            onDragStop={(_e, d) => {
              handleUpdate({
                type: 'UPDATE',
                piece: { ...outfitPiece, posx: d.x, posy: Math.floor(d.y) },
              });
            }}
            onResizeStop={(_e, _direction, ref, _delta, _position) => {
              handleUpdate({
                type: 'UPDATE',
                piece: { ...outfitPiece, width: ref.style.width, height: ref.style.height },
              });
            }}
            bounds={'parent'}
            lockAspectRatio={true}
          >
            <Piece piece={outfitPiece.piece} />
          </Rnd>
        ))}
      </div>
    </div>
  );
};

export default EditableOutfit;
